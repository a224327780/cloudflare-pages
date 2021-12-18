const handler = async ({next}) => {
    let data = {message: '', code: 0, data: {}}
    try {
        data['data'] = await next()
    } catch (err) {
        data['code'] = 1
        data['message'] = 'error'
    }
    console.log(111)
    return new Response(JSON.stringify(data))
}

export const onRequest = [
    handler
]