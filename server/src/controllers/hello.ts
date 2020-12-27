import { Request, Response } from 'express';
import UserModel, { User } from '../models/User';

/**
 * Hello World
 * @route GET /
 */
export const helloWorld = async (req: Request, res: Response): Promise<void> => {
  const user = await UserModel.create({
    firstName: 'Steve',
    lastName: 'Jobs',
    username: 'stevejobs',
    password: '12345678',
  });
  await user.save();
  res.status(201);
  res.send('Hello World!');
};

export const testRoute = async (req: Request, res: Response) => {
  const user = await UserModel.findOne({ username: 'stevejobs' });
  if (user) {
    res.status(200);
    res.send(`Username: ${user.firstName}`);
  } else {
    res.status(400);
    res.send('User not found!');
  }
};
