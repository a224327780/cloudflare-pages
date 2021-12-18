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

    console.log(env.KV_INDEX)
    let data1 = {message: '', code: 0, data: {}}
    const {pathname, searchParams, origin} = new URL(request.url)
    console.log(searchParams)
    // if (pathname.includes('authorize')) {
    // }

    return jsonResponse(data1)
}
