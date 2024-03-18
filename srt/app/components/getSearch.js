
async function getSearchResults(query){
    let data;
    await fetch(`/api/search/${query}`)
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