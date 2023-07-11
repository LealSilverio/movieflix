<script>
export let movie;
// console.log(movie)
</script>

<div>
    <img src={movie.poster_path} alt={movie.title}>
    <h3>{movie.title}</h3>
    <p>{movie.overview}</p>
</div>