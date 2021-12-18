import {jsonResponse} from "../../utils/jsonResponse";

export async function onRequest(context) {
    const {
        request, // same as existing Worker API
        env, // same as existing Worker API
        params, // if filename includes [id] or [[path]]
        waitUntil, // same as ctx.waitUntil in existing Worker API
        next, // used for middleware or to fetch assets
        data, // arbitrary space for passing data between middlewares
    } = context;

    const value = await env.KV_INDEX.list()
    const {pathname, searchParams, origin} = new URL(request.url)
    // if (pathname.includes('authorize')) {
    // }
    let data1 = {message: '', code: 0, data: [searchParams.toString(), value, params]}

    return jsonResponse(data1)
}
