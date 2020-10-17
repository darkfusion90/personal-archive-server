import { RequestHandler } from "express";

const logout: RequestHandler = (req, res) => {
    const success = () => res.json({ message: 'Logged out successfully' })

    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                res.status(500).json({})
            } else {
                success()
            }
        })
    } else {
        // TODO: Maybe specify that session could not be found?
        success()
    }
}

export default logout