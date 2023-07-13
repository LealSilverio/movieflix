<script>
    import MovieDetails from "./MovieDetails.svelte";
  
  export let movie;
  console.log(movie);
  var imageURL = `https://image.tmdb.org/t/p/original${movie.poster_path}`
</script>

<div>
    <img src={movie.poster_path} alt={movie.title}>
    <h3>{movie.title}</h3>
    <p>{movie.overview}</p>
</div>