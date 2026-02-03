import { NextFunction, Request, RequestHandler, Response } from 'express';
import { ApiListResponse } from '../types/api';

export const asyncHandler = (handler: RequestHandler) =>
    (req: Request, res: Response, next: NextFunction) =>
        Promise.resolve(handler(req, res, next)).catch(next);

export const sendList = <T>(res: Response, items: T[]): ApiListResponse<T> => {
    const payload = {
        generatedAt: new Date().toISOString(),
        total: items.length,
        items
    };
    res.json(payload);
    return payload;
};
