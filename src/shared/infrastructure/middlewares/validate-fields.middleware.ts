import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

const validateFields = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // validationResult recolecta los errores almacenados en req
  // luego de ser validados y alamcenados en req por check
  const errors = validationResult(req);

  // Si error no esta vacio
  if (!errors.isEmpty()) {
    res.status(400).json({
      status: 400,
      errors: errors.array(),
    });
    return;
  }
  next();
};

export default validateFields;
