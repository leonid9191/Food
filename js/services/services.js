//Send data to the server
const postData = async (url, data) => {
    const res = await fetch(url, {
        //send to the server
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    return await res.json();
};

//get all information from json db
const getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
};

export {getResource};
export {postData};