import { AuthDetailModel } from '../../models/AuthDetailModel'

export const createAuthDetail = (userId: string) => {
    const authDetail = new AuthDetailModel({ user: userId })
    return authDetail.save()
}

export const createAuthDetailIfMissing = (userId: string) => {
    const partialAuthDetail = { user: userId }

    // What do these do?
    //      new: true -> returns updated document
    //      upsert: true -> will create auth detail document for user if missing
    //      setDefaultsOnInsert: true -> by default, in case of updates, mongoose
    //                                   will not set the default values. 
    //                                   This prevents that from happening
    const options = { new: true, upsert: true, setDefaultsOnInsert: true }

    // The query and update is same because we are not interested in updating here.
    // All we want is to create AuthDetail for user if not present.
    // Hence `query` contains user: to search for the concerned user
    // and `update` contains user as well: similar to `createAuthDetail`,
    // `update` requires only user because everything else will be created
    // by the pre 'save' hook in AuthDetailSchema
    return AuthDetailModel.findOneAndUpdate(
        partialAuthDetail,
        partialAuthDetail,
        options
    ).exec()
}