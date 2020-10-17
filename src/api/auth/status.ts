import { RequestHandler } from 'express';
import { sessionUser } from '../../utils'

const status: RequestHandler = async (req, res) => {
    res.json({
        user: sessionUser(req),
        loggedIn: req.isAuthenticated()
    })
}

export default status