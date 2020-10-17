import { CustomValidator } from 'express-validator'
import mongoose from 'mongoose'

const isObjectId: CustomValidator = (input) => {
    console.log('Check for: ', { input }, "result: ", mongoose.isValidObjectId(input))

    if (!mongoose.isValidObjectId(input)) {
        console.log('not valid')
        throw new Error('must be a valid ObjectId')
    }

    return true
}

export default isObjectId