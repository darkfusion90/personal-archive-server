import { RequestHandler } from "express";
import { performMultifactorLogout } from "./utils";

const logout: RequestHandler = async (req, res) => {
    try {
        await performMultifactorLogout(req)
        req.logout()
        res.json({ message: 'Logged out successfully' })
    } catch (err) {
        res.status(500).json({})
    }
}

export default logout