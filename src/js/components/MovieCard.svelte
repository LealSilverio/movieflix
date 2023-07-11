<script>
  import MovieDetails from "./MovieDetails.svelte";

export let movie;
console.log(movie)

var imageURL = `https://image.tmdb.org/t/p/original${movie.poster_path}`
</script>

<div id="movie-card">
    <a href="#movieDetails">
        <img src={imageURL} alt={movie.title}>
        <div>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
        </div>
    </a>
</div>