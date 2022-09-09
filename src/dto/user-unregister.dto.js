import addErrors from 'ajv-errors';
import Ajv from 'ajv';
import { Type } from '@sinclair/typebox';

import { passwordDTOSchema } from '#Lib/dto-types.js';

const UnregisterDTOSchema = Type.Object(
  {
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
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
addErrors(ajv);
const validateSchema = ajv.compile(UnregisterDTOSchema);

const userUnregisterDTO = (req, res, next) => {
  const isDTOValid = validateSchema(req.body);
  if (!isDTOValid)
    return res
      .status(400)
      .send({ errors: validateSchema.errors.map((err) => err.message) });

  next();
};

export default userUnregisterDTO;
