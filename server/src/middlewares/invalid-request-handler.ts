import { Request, Response } from 'express';

const invalidRequestHandler = (req: Request, res: Response): Response =>
    res.status(404).json({ message: 'Not valid request' });

export default invalidRequestHandler;
