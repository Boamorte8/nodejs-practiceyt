import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';
import Ajv from 'ajv';
import { Type } from '@sinclair/typebox';

import { emailDTOSchema, passwordDTOSchema } from '#Dto/dto-types.js';

const UpdateEmailDTOSchema = Type.Object(
  {
    email: emailDTOSchema,
    password: passwordDTOSchema,
  },
  {
    additionalProperties: false,
    errorMessage: {
      additionalProperties: 'Body must NOT have additional properties',
    },
  }
);

const ajv = new Ajv({ allErrors: true });
addFormats(ajv, ['email']);
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
addErrors(ajv);
const validateSchema = ajv.compile(UpdateEmailDTOSchema);

const userUpdateEmailDTO = (req, res, next) => {
  const isDTOValid = validateSchema(req.body);
  if (!isDTOValid)
    return res
      .status(400)
      .send({ errors: validateSchema.errors.map((err) => err.message) });

  next();
};

export default userUpdateEmailDTO;
