declare interface ApiIdOpts {
    name: string
    optional: boolean = false
}

declare interface ApiPathOpts {
    id?: boolean | string | ApiIdOpts | Array<ApiIdOpts>
}

type RespondResource<T> = T | T[] | null

namespace Express {
    interface Session extends SessionData {
        multifactorAuthenticated?: boolean
    }
    interface Response {
        respondResource: (data: any, fieldName: any) => void
    }
}

