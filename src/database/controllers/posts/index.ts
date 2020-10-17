export * from './create'
export * from './retrieve'
export * from './delete'

import * as create from './create'
import * as retrieve from './retrieve'
import * as _delete from './delete'

export default { ...create, ...retrieve, ..._delete }
