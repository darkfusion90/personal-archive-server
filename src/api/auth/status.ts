import { RequestHandler } from 'express';

import { getUserAuthStatus } from './utils';

const status: RequestHandler = async (req, res) => {
    const authStatus = await getUserAuthStatus(req)
    
    if (authStatus.loggedIn) {
        res.json(authStatus)
    } else {
        res.json({ loggedIn: false })
    }
}

export default status