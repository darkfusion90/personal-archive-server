import create from './create'
import retrieve from './retrieve'

export * from './create'
export * from './retrieve'
export * from './update'
export default { ...create, ...retrieve }