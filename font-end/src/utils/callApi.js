export default async function APICaller(
    endPoint,
    method = "Get",
    data,
    params
) {
    const accessToken = localStorage.getItem("accessToken")
    const result = await fetch(
        `http://localhost:4001/${endPoint}${params ? "?" + params : ""}`,
        {
            method,
            body: data ? JSON.stringify(data) : null,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                Authentication: accessToken
            },
        }
    )
        .then(async (res) => res.json())
        .catch((err) => console.log(err));

    return result;
}