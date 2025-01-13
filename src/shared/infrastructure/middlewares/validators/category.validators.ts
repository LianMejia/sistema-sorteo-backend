import { queryIdNotExist, queryValueExists } from '@/shared/helpers';
import { check, param } from 'express-validator';

export const validateCategoryCreation = [
  check('name', 'El name es requerido')
    .notEmpty()
    .custom(queryValueExists('name', 'categories')),
  check('description', 'La description debe ser de tipo texto')
    .optional()
    .isString(),
  check('is_active', 'El estado activo debe ser un tipo boolean')
    .optional()
    .isBoolean(),
];

export const validateCategoryGetOne = [
  param('id', 'El id debe ser un número válido')
    .isInt()
    .custom(queryIdNotExist('category_id', 'categories')),
];

export const validateCategoryUpdate = [
  param('id', 'El id debe ser un número válido')
    .isInt()
    .custom(queryIdNotExist('category_id', 'categories')),
  check('name', 'El name es requerido')
    .optional()
    .custom(queryValueExists('name', 'categories')),
  check('description', 'La description debe ser de tipo texto')
    .optional()
    .isString(),
  check('is_active', 'El estado debe ser un tipo boolean')
    .optional()
    .isBoolean(),
];

export const validateCategoryDelete = [
  param('id', 'El id debe ser un número válido')
    .isInt()
    .custom(queryIdNotExist('category_id', 'categories')),
];
