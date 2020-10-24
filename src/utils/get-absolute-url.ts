import url from 'url'

export default function getAbsoluteUrl(relativeUrl: string) {
    const selfHost = process.env.SELF_HOST_ADDRESS || 'https://personalarchive.herokuapp.com'

    return url.resolve(selfHost, relativeUrl)
}