<script>
  import Navbar from './Navbar.svelte';
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import Login from './Login.svelte';
  import Home from './Home.svelte';
  import MovieCard from './MovieCard.svelte';
  import { userStore, route, searchResults, genreResults, movieId } from '../../lib/stores.mjs';
  import { checkLogin } from '../../lib/supabaseClient.mjs';
  import { onMount } from 'svelte';
  import MovieDetails from './MovieDetails.svelte';
  import Signup from './signup.svelte';
  import MyMovieList from './MyMovieList.svelte';

  // When the page loads, check if user is logged in. 
  async function init() {
    await checkLogin();
  }

  window.addEventListener('popstate', () => {
    if (document.location.hash == "#profile" && !$userStore.isLoggedIn) {
      document.location.hash = "#login"
    } else $route = document.location.hash
    // getParameters function 
  })

  // window.onpopstate = function (event) {
  //   if (document.location.hash == #profile && !$userStore.isLoggedIn) {
  //     document.location.hash
  //   } else $route = document.location.hash;
  // };

  // let movieId;
  onMount(init);

</script>

<header>
  <Header />
</header>
<Navbar />

<main>
  <h1>MovieFlix</h1>

  <div class="card">
    {#if $route == "#home"}
    <Home />
    {:else if $route == "#login"}
    <Login />
    {:else if $route == "#myMovies"}
    <MyMovieList />
    {:else if $route == "#signup"}
    <Signup />
    {:else if $route == "#genres"}
    {#each $genreResults as movie}
    <MovieCard {movie} />
    {/each}
    {:else if $route.includes("#movieDetails")}
    <MovieDetails />
    {:else if $route == "#search"}
    {#each $searchResults as movie}
    <MovieCard {movie}/>
    {/each}
    {/if}

  </div>
  

  <!-- the movieId parameter is from the URL, like this: #details?id=movieId 
  The route is #details and the parameter is id=movieId-->
</main>

<footer>
  <Footer />
</footer>