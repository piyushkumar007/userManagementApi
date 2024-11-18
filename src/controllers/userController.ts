import { Request, Response } from 'express';
import User, { IUser } from '../models/User';

export const createUser = async (req: Request, res: Response) => {
  try {
    console.log('insde creatr user');
    const { name, email, password } = req.body;
    const newUser: IUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  }catch (error: unknown) {
    if(error instanceof Error) res.status(500).json({ message: error.message });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    console.log('inside>>>')
    const users = await User.find();
    res.status(200).json(users);
  } catch (error: unknown) {
    if(error instanceof Error) res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    console.log('inside line 28')
    const user = await User.findById(req.params.id);
    if (user) res.status(200).json(user);
    else res.status(404).json({ message: 'User not found' });
  } catch (error: unknown) {
    if(error instanceof Error) res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedUser) res.status(200).json(updatedUser);
    else res.status(404).json({ message: 'User not found' });
  } catch (error: unknown) {
    if(error instanceof Error) res.status(400).json({ message: error.message });
  }
};


export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (deletedUser) res.status(200).json({ message: 'User deleted successfully' });
    else res.status(404).json({ message: 'User not found' });
  } catch (error: unknown) {
    if(error instanceof Error) res.status(500).json({ message: error.message });
  }
};
