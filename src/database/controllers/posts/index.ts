export * from './create'
export * from './retrieve'
export * from './delete'
export * from './update'

import * as create from './create'
import * as retrieve from './retrieve'
import * as _delete from './delete'
import * as update from './update'

export default { ...create, ...retrieve, ..._delete, ...update }
