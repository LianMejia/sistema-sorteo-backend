import { queryIdNotExist, queryValueExists } from '@/shared/helpers';
import { check, param } from 'express-validator';

export const validateSorteoCreation = [
  check('category_id', 'El country_id es requerido y de tipo numerico')
    .notEmpty()
    .isInt()
    .custom(queryIdNotExist('category_id', 'categories')),
  check('name', 'El name es requerido')
    .notEmpty()
    .custom(queryValueExists('name', 'sorteos')),
  check('description', 'La description es requerida').notEmpty(),
  check('is_active', 'El estado activo debe ser un tipo boolean')
    .optional()
    .isBoolean(),
  check('image', 'Las images son requeridas y de tipo Array')
    .notEmpty()
    .isArray(),
  check('start_date', 'El start_date es requerido').notEmpty(),
  check('end_date', 'El end_date es requerido').notEmpty(),
  check('total_tickets', 'El total_tickets es requerido y de tipo numerico')
    .notEmpty()
    .isInt(),
];

export const validateSorteoGetOne = [
  param('id', 'El id debe ser un número válido')
    .isInt()
    .custom(queryIdNotExist('sorteo_id', 'sorteos')),
];

export const validateSorteoUpdate = [
  param('id', 'El id debe ser un número válido')
    .isInt()
    .custom(queryIdNotExist('sorteo_id', 'sorteos')),
  check('name', 'El name es requerido')
    .optional()
    .notEmpty()
    .custom(queryValueExists('name', 'sorteos')),
  check('description', 'La description es requerida').optional().notEmpty(),
  check('is_active', 'El estado debe ser un tipo boolean')
    .optional()
    .isBoolean(),
  check('image', 'Las images son requeridas y de tipo Array')
    .optional()
    .notEmpty()
    .isArray(),
  check('start_date', 'El start_date es requerido').optional().notEmpty(),
  check('end_date', 'El end_date es requerido').optional().notEmpty(),
  check('total_tickets', 'El total_tickets es requerido y de tipo numerico')
    .optional()
    .notEmpty()
    .isInt(),
];

export const validateSorteoDelete = [
  param('id', 'El id debe ser un número válido')
    .isInt()
    .custom(queryIdNotExist('sorteo_id', 'sorteos')),
];
