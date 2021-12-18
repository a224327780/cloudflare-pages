const authorize = (searchParams: URLSearchParams) => {
    return ''
}

export async function onRequest(context) {
    const {
        request, // same as existing Worker API
        env, // same as existing Worker API
        params, // if filename includes [id] or [[path]]
        waitUntil, // same as ctx.waitUntil in existing Worker API
        next, // used for middleware or to fetch assets
        data, // arbitrary space for passing data between middlewares
    } = context;

    console.log(env.KV_INDEX)
    const {pathname, searchParams, origin} = new URL(request.url)
    if (pathname.includes('authorize')) {
        return authorize(searchParams)
    }

    return '404';
}
