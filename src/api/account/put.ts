import AccountPutRequestHandler from "./typings/put"
import { body } from "express-validator"
import { createValidation } from "../validators"

import { updateUserDetails } from '../.././database/controllers/users/update'
import { sessionUserId } from "../../utils"

export const put: AccountPutRequestHandler = async (req, res) => {
    console.log("Received: ", req.body)
    const userId = sessionUserId(req) as string
    const updatedUser = await updateUserDetails(userId, req.body)
    if (updatedUser) {
        res.json(updatedUser.filterSensitiveData())
    } else {
        res.json({})
    }
}

export const putValidator = createValidation([
    body('username', 'must be string').optional().isString(),
    body('email', 'must be an email').optional().isEmail()
])