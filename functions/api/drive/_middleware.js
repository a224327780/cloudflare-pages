import {jsonResponse} from "../../utils/jsonResponse";

const handler = async ({next}) => {
    try {
        return await next()
    } catch (err) {
        return jsonResponse({message: `${err.message}\n${err.stack}`, code: 1, data: {}})
    }
}

export const onRequest = [
    handler
]