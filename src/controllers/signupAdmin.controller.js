import crypto from 'crypto';
import db from '../Database/models';
import validateSignup from '../validation/signup.validator';
import asyncWrapper from '../utils/handlingTryCatchBlocks';
import ROLES_LIST from '../utils/userRoles.util';
import { generateToken, hashPassword } from '../utils/user.util';
import sendMail from '../utils/sendEmail.util';

const { User, signUpToken } = db;
const createAdminAccount = asyncWrapper(async (req, res) => {
  const { email } = req.body;

  const { error } = validateSignup(req.body);

  if (error) {
    return res.status(406).send(error.details[0].message);
  }
  const existingUser = await User.findOne({ where: { email } });

  if (existingUser) {
    return res
      .status(401)
      .json({ message: 'Email already used, please use different email.' });
  }

  const hashedPassword = await hashPassword(req.body.password);
  const userRole = 'admin';
  const newRole = ROLES_LIST[userRole];

  const user = {
    fullname: `${req.body.firstname} ${req.body.lastname}`,
    email: req.body.email,
    password: hashedPassword,
    role: JSON.stringify(newRole),
  };

  User.create(user).then(async (data) => {
    const verifyToken = await signUpToken.create({
      userId: data.id,
      token: crypto.randomBytes(32).toString('hex')
    });
    const url = `${process.env.BASE_URL}users/${data.id}/verify/${verifyToken.token}`;
    const sentEmail = {
      recipientEmail: data.email,
      emailSubject: 'Verify Email',
      emailBody: url
    };

    await sendMail(sentEmail);

    const token = await generateToken(data);
    res
      .status(200)
      .header('authenticate', token)
      .json({ message: 'Admin successfully signed up, Now check your account to verify your email', token, verifyToken });
  });
});

export default createAdminAccount;
