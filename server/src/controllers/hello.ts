import { Request, Response } from 'express';

/**
 * Hello World
 * @route GET /
 */
export const helloWorld = (req: Request, res: Response): void => {
  res.send('Hello World!');
};
