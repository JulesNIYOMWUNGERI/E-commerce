import joi from 'joi';
import { joiPasswordExtendCore } from 'joi-password';

const joiPassword = joi.extend(joiPasswordExtendCore);

const validator = schema => payload =>
  schema.validate(payload, { abortEarly: false });

const signupSchema = joi.object({
  firstname: joi.string().required(),
  lastname: joi.string().required(),
  email: joi.string().email().required().label('email'),
  password: joiPassword
    .string()
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(2)
    .noWhiteSpaces()
    .min(8)
    .alphanum()
    .required(),
});

validator(signupSchema);

export default validator(signupSchema);
