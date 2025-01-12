import { queryIdNotExist, queryValueExists } from '@/shared/helpers';
import { check, param } from 'express-validator';

export const validateUserCreation = [
  check('email', 'El email es requerido')
    .notEmpty()
    .custom(queryValueExists('email', 'users')),
  check(
    'password',
    'El password es requerido, debe tener al menos 8 caracteres'
  )
    .notEmpty()
    .isString()
    .isLength({ min: 8 }),
];

export const validateUserGetOne = [
  param('id', 'El id debe ser un número válido')
    .isInt()
    .custom(queryIdNotExist('user_id', 'users')),
];

export const validateUserUpdate = [
  param('id', 'El id debe ser un número válido')
    .isInt()
    .custom(queryIdNotExist('user_id', 'users')),
  check(
    'password',
    'El password es requerido, debe tener al menos 8 caracteres'
  )
    .optional()
    .notEmpty()
    .isString()
    .isLength({ min: 8 }),
];
