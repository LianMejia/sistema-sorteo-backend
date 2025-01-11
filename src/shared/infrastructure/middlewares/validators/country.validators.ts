import {
  queryIdNotExist,
  queryValueExists,
} from '@/shared/helpers/db-validators.helpers';
import { check, param } from 'express-validator';

export const validateCountryCreation = [
  check('name', 'El name es requerido')
    .notEmpty()
    .custom(queryValueExists('name', 'countries')),
  check('is_active', 'El estado activo debe ser un tipo boolean')
    .optional()
    .isBoolean(),
  check('country_code', 'El country_code es requerido')
    .notEmpty()
    .custom(queryValueExists('country_code', 'countries')),
  check('phone_code', 'El phone_code es requerido')
    .notEmpty()
    .custom(queryValueExists('phone_code', 'countries')),
];

export const validateCountryGetOne = [
  param('id', 'El id debe ser un número válido')
    .isInt()
    .custom(queryIdNotExist('country_id', 'countries')),
];

export const validateCountryUpdate = [
  param('id', 'El id debe ser un número válido')
    .isInt()
    .custom(queryIdNotExist('country_id', 'countries')),
  check('name', 'El name es requerido')
    .optional()
    .notEmpty()
    .custom(queryValueExists('name', 'countries')),
  check('is_active', 'El estado debe ser un tipo boolean')
    .optional()
    .isBoolean(),
  check('country_code', 'El country_code es requerido')
    .optional()
    .notEmpty()
    .custom(queryValueExists('country_code', 'countries')),
  check('phone_code', 'El phone_code es requerido')
    .optional()
    .notEmpty()
    .custom(queryValueExists('phone_code', 'countries')),
];

export const validateCountryDelete = [
  param('id', 'El id debe ser un número válido')
    .isInt()
    .custom(queryIdNotExist('country_id', 'countries')),
];
