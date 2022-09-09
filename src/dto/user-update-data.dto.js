import addErrors from 'ajv-errors';
import Ajv from 'ajv';
import { Type } from '@sinclair/typebox';

import { nameDTOSchema, surnameDTOSchema } from '#Lib/dto-types.js';

const UpdateDataDTOSchema = Type.Object(
  {
    name: nameDTOSchema,
    surname: surnameDTOSchema,
  },
  {
    additionalProperties: false,
    errorMessage: {
      additionalProperties: 'Body must NOT have additional properties',
    },
  }
);

const ajv = new Ajv({ allErrors: true });
addErrors(ajv);
const validateSchema = ajv.compile(UpdateDataDTOSchema);

const userUpdateDataDTO = (req, res, next) => {
  const isDTOValid = validateSchema(req.body);
  if (!isDTOValid)
    return res
      .status(400)
      .send({ errors: validateSchema.errors.map((err) => err.message) });

  next();
};

export default userUpdateDataDTO;
