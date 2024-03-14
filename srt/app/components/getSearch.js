
async function getSearchResults(query){
    let data;
    //post request to the server
    await fetch('/api/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({query: query})
    })
    .then(response => response.json())
    .then(result => {
        data = result;
    })
    .catch((error) => {
        console.error('Error:', error);
    }
    );
    return data;
}

export default getSearchResults;