<script>
    import MovieCard from "./MovieCard.svelte";

    let popularMovies = [];
    async function getPopularMovies() {

        const urlPopular = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2Q0ODg1ODhlYTI3Nzg2M2NlOGE2MjA3ZDFiNjY3NyIsInN1YiI6IjY0OWRmN2I0MDkxZTYyMDBhZDU0OGM4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DPwW979vHfknWm16hkBASCL59yCxcA7lYR-dBHJnYpE'
        }
        };

        await fetch(urlPopular, options)
        .then(response => response.json())
        .then(response => popularMovies = response.results)
        .catch(err => console.error(err));

        popularMovies.length = 10;

        console.log(popularMovies)
        return popularMovies;
    }

    getPopularMovies();
</script>

<div class="home-grid">
    <img class="home-image" src="../../../public/images/elderly-man-watching-movie-cinema.jpg" alt="Man watching movie with popcorn">
    <p class="home-moto">Great movies with everything you need!</p>
</div>

{#each popularMovies as movie}
    <MovieCard {movie}/>
{/each}