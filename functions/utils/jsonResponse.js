export const jsonResponse = (data) => {
    new Response(JSON.stringify(data), {
        headers: {"Content-Type": "application/json"}
    });
}
