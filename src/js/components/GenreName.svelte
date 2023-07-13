<script>
    import { genreResults } from "../../lib/stores.mjs";

    export let genre = {};

    // Search the API for movies with the parameter with_genres 
    export async function getMoviesByGenre() {
        const urlByGenre = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc&with_genres=${genre.id}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2Q0ODg1ODhlYTI3Nzg2M2NlOGE2MjA3ZDFiNjY3NyIsInN1YiI6IjY0OWRmN2I0MDkxZTYyMDBhZDU0OGM4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DPwW979vHfknWm16hkBASCL59yCxcA7lYR-dBHJnYpE'
            }
        };

        await fetch(urlByGenre, options)
        .then(response => response.json())
        .then(response => $genreResults = response.results)
        .catch(err => console.error(err));

        console.log($genreResults);
    }

</script>

<a href="#genres" on:click={getMoviesByGenre}>{genre.name}</a>