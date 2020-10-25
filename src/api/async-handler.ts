import { RequestHandler } from "express";

type AnyRequestHandler = RequestHandler<any, any, any, any>

const asyncRequestHandler = (handler: AnyRequestHandler): AnyRequestHandler => (req, res, next) => {
    Promise.resolve(handler(req, res, next)).catch(next)
}

export default asyncRequestHandler