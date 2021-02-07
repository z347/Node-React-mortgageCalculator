import { Request, Response } from 'express';
import { validationResult, Result } from 'express-validator';

const errors = (req: Request, res: Response, statusCode: number): Response => {
    // Array with all errors
    const errorFormatter = ({ msg, param }: { msg: string; param: string }) => `${param} : ${msg}`;

    const result: Result = validationResult(req).formatWith(errorFormatter);
    return res.status(statusCode).json({ errors: result.array() });
};

export default errors;
