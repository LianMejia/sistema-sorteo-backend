import { Response } from 'express';

export const customSuccessData = (
  res: Response,
  status: number,
  message: string,
  data?: any
): Response => {
  const response: { status: number; message: string; data?: any } = {
    status,
    message,
  };

  if (data) {
    response.data = data;
  }

  console.log('data', data);

  return res.status(status).json(response);
};
