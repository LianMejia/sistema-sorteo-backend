import { queryIdNotExist, queryValueExists } from '@/shared/helpers';
import { check, param } from 'express-validator';

export const validateCityCreation = [
  check('country_id', 'El country_id es requerido y de tipo numerico')
    .isInt()
    .custom(queryIdNotExist('country_id', 'countries')),
  check('name', 'El name es requerido')
    .notEmpty()
    .custom(queryValueExists('name', 'cities')),
  check('is_active', 'El estado activo debe ser un tipo boolean')
    .optional()
    .isBoolean(),
];

export const validateCityGetOne = [
  param('id', 'El id debe ser un número válido')
    .isInt()
    .custom(queryIdNotExist('city_id', 'cities')),
];

export const validateCityUpdate = [
  param('id', 'El id debe ser un número válido')
    .isInt()
    .custom(queryIdNotExist('city_id', 'cities')),
  check('name', 'El name es requerido')
    .optional()
    .notEmpty()
    .custom(queryValueExists('name', 'cities')),
  check('is_active', 'El estado debe ser un tipo boolean')
    .optional()
    .isBoolean(),
];

export const validateCityDelete = [
  param('id', 'El id debe ser un número válido')
    .isInt()
    .custom(queryIdNotExist('city_id', 'cities')),
];
