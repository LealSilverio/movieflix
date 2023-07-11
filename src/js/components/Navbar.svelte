<script>
    import Genres from "./Genres.svelte";

    // This toggles the list of genres when the link in the navbar is clicked 
    let show = false;
    async function showGenres() {
        if (show) {
            show = false;
        } else {
            show = true;
        }
    }
    // This hides the list of genres when you click somewhere else on the page 
    window.onclick = function(event) {
        if (!event.target.matches("#genre-menu")) {
            show = false;
        }
    }
</script>

<nav>
    <ul class="navbar">
        <li><a href="#home">Home</a></li>
        <li><a href="#myMovies">My Movie List</a></li>
        <li><a href="#genres" id="genre-menu" on:click={showGenres}>Genres</a></li>
    </ul>
</nav>

{#if show}
<Genres />
{/if}