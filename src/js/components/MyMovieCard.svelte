<script>
    import MovieDetails from "./MovieDetails.svelte";
  
  export let movie;
  console.log(movie);
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

<style>

    div{
        margin-right: 30px;
        margin-bottom: 30px;
    }

    img{
        max-width: 200px;
        display: block;
        margin: 0 auto;
    }

    a{
        text-decoration: none;
        color: black;
    }

</style>