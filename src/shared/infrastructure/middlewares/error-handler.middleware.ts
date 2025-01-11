import { Request, Response, NextFunction } from 'express';
const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).json({
    response: 'error',
    message: err.message || 'Ha ocurrido un error interno en el servidor',
    error: err.details,
  });
};

export default errorHandler;
