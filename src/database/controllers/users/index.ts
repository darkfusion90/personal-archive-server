import create from './create'
import retrieve from './retrieve'

export const { createUser } = create
export const { getUser, getUserByUsername } = retrieve

export default { ...create, ...retrieve }