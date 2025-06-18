import type {NextFunction, Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import {DecodedUser} from "../../types/decoded-user";
import httpStatusCode from "../constants/http-status-code";

export default function decodeJWT(req: Request, res: Response, next: NextFunction) {
    try {
        const authHeader = req.headers.authorization;

        console.log("Authorization Header:", authHeader);

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(httpStatusCode.UNAUTHORIZED).json({message: 'Missing or invalid token'});
        }

        const token = authHeader.split(' ')[1];
        req.user = jwt.verify(token, process.env.JWT_SECRET!) as DecodedUser;
        next();
    } catch (error) {
        console.error('JWT decode error:', error);
        return res.status(httpStatusCode.UNAUTHORIZED).json({message: 'Invalid or expired token'});
    }
}
