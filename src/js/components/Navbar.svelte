<script>
    import Genres from "./Genres.svelte";
</script>

<nav>
    <ul class="navbar">
        <li><a href="#home">Home</a></li>
        <li><a href="#myMovies">My Movie List</a></li>
        <li id="genre-menu"><a href="#home">Genres</a><Genres /></li>
    </ul>
</nav>