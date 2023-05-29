/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable require-jsdoc */
import crypto from 'crypto';
import client from '../utils/redis.util';
import db from '../Database/models';
import { comparePassword, generateToken } from '../utils/user.util';
import sendMail from '../utils/sendEmail.util';
import {
  generateSecretKey,
  generateOTPCode,
} from './two-factor-auth.controller';

const { User, signUpToken } = db;

export class PublicController {
  static async PublicLogin(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res
          .status(400)
          .json({ msg: 'Please Fiil in blank fields', error: '' });
      }

      const doesExist = await User.findOne({ where: { email } });

      if (!doesExist) {
        return res.status(404).json({ msg: "User doesn't exist", error: '' });
      }

      if (doesExist.dataValues.isEnabled === false) {
        return res
          .status(403)
          .json({ msg: 'Account is disabled please contact admin' });
      }

      const isValid = await comparePassword(password, doesExist.password);
      if (!isValid) {
        return res.status(401).json({ msg: 'Invalid password' });
      }

      if (!doesExist.verified) {
        let verifiedToken = await signUpToken.findOne({
          where: {
            userId: doesExist.id
          }
        });

        if (!verifiedToken) {
          verifiedToken = await signUpToken.create({
            userId: doesExist.id,
            token: crypto.randomBytes(32).toString('hex')
          });

          const url = `${process.env.BASE_URL}users/${doesExist.id}/verify/${verifiedToken.token}`;
          const sentEmail = {
            recipientEmail: doesExist.email,
            emailSubject: 'Verify Email',
            emailBody: url
          };

          await sendMail(sentEmail);
        }
        return res.status(400).json({ message: 'An Email sent to your account please verify' });
      }

      const token = await generateToken(doesExist);
      if (doesExist.enable2FA) {
        const { base32 } = generateSecretKey();
        const secret = base32;
        const code = generateOTPCode(secret);
        client.set(doesExist.email, code, 'EX', 300);
        const recipient = {
          recipientEmail: doesExist.email,
          emailSubject: 'ECOMMERCE AUTHENTICATON CODE',
          emailBody: `Your authentication code is: ${code}`,
        };

        const checkEmail = await sendMail(recipient);
        if (checkEmail) {
          return res.status(200).header('authenticate', token).json({
            msg: 'Please check your email for the authentication code',
            token,
          });
        }
        return res.status(500).json({ msg: 'Email is not sent' });
      }
      return res
        .status(200)
        .header('authenticate', token)
        .json({ msg: 'Logged in succesfully', token });
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default PublicController;
