<script>
import { movieId } from "../../lib/stores.mjs";

let movie; 
console.log($movieId);

async function getMovie() {
    
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2Q0ODg1ODhlYTI3Nzg2M2NlOGE2MjA3ZDFiNjY3NyIsInN1YiI6IjY0OWRmN2I0MDkxZTYyMDBhZDU0OGM4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DPwW979vHfknWm16hkBASCL59yCxcA7lYR-dBHJnYpE'
    }
    };
    await fetch(` https://api.themoviedb.org/3/movie/${$movieId}`, options)
    .then(response => response.json())
    .then(response => movie = response)
    .catch(err => console.error(err));

    console.log(movie);
    return movie;
}
let promise = getMovie();

</script>
{#await promise}
        Loading...
    {:then movie} 
        <div id="movie-details">
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title}>
            <div>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
                <button id="add-to-favs">&#9825; Add to Favorites</button>
            </div>
        </div>     
{/await}
