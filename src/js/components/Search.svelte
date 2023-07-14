<script>
import { searchResults } from "../../lib/stores.mjs";

let userInput;

async function getData() {
    console.log(userInput); 
    if (userInput != null)
    {
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2Q0ODg1ODhlYTI3Nzg2M2NlOGE2MjA3ZDFiNjY3NyIsInN1YiI6IjY0OWRmN2I0MDkxZTYyMDBhZDU0OGM4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DPwW979vHfknWm16hkBASCL59yCxcA7lYR-dBHJnYpE'
    }
    };
    await fetch(`https://api.themoviedb.org/3/search/movie?query=${userInput}`, options)
    .then(response => response.json())
    .then(response => $searchResults = response.results)
    .catch(err => console.error(err));
    }
}


</script>

<input id="search" name="searchBar" type="searchBar" bind:value={userInput}/>
<a href="#search"><button id="search-button" type="submit" on:click={getData}><span>&#x1F50D;&#xFE0E;</span></button></a>