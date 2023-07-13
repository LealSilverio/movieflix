<script>
    import GenreName from "./GenreName.svelte";

    async function getGenres() {

        const urlGenre = 'https://api.themoviedb.org/3/genre/movie/list?';
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2Q0ODg1ODhlYTI3Nzg2M2NlOGE2MjA3ZDFiNjY3NyIsInN1YiI6IjY0OWRmN2I0MDkxZTYyMDBhZDU0OGM4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DPwW979vHfknWm16hkBASCL59yCxcA7lYR-dBHJnYpE'
        }
        };
        
        let genres;

        await fetch(urlGenre, options)
        .then(response => response.json())
        .then(response => genres = response.genres)
        .catch(err => console.error(err));

        return genres;
    }

    let promise = getGenres()

</script>

<div class="genres">
    {#await promise}
        Loading...
    {:then genres} 
        {#each genres as genre}
        <GenreName {genre}/>
        {/each}
    {/await}
</div>