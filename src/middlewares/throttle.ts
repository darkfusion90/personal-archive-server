import { RequestHandler } from "express";

const throttle = (durationMillis: number = 0): RequestHandler => (_, __, next) => {
    setTimeout(() => {
        next()
    }, durationMillis);
}

export default throttle