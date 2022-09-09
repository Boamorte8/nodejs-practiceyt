import { Type } from '@sinclair/typebox';

export const idDTOSchema = Type.String({
  format: 'uuid',
  errorMessage: {
    type: '_id must be a string',
    format: '_id must be a valid password with format uuid4',
  },
});

export const nameDTOSchema = Type.String({
  minLength: 2,
  maxLength: 20,
  errorMessage: {
    minLength: 'Name must be at least 2 characters',
    maxLength: 'Name must be max 20 characters',
    type: 'Name must be a string',
  },
});

export const surnameDTOSchema = Type.String({
  minLength: 4,
  maxLength: 50,
  errorMessage: {
    minLength: 'Surname must be at least 4 characters',
    maxLength: 'Surname must be max 50 characters',
    type: 'Surname must be a string',
  },
});

export const emailDTOSchema = Type.String({
  format: 'email',
  errorMessage: {
    type: 'Email must be a string',
    format: 'Email must be a valid email address',
  },
});

export const passwordDTOSchema = Type.String({
  format: 'password',
  minLength: 10,
  maxLength: 25,
  errorMessage: {
    minLength: 'Password must be at least 10 characters',
    maxLength: 'Password must be max 25 characters',
    type: 'must be a string',
    format:
      'Password must have at least a uppercase letter, a lowercase letter and a number',
  },
});
