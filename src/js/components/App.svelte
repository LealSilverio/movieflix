<script>
  import Genres from './Genres.svelte';
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import Login from './Login.svelte';
  import { userStore, route } from '../../lib/stores.mjs';
  import { checkLogin } from '../../lib/supabaseClient.mjs';
  import { onMount } from 'svelte';
  import Navbar from './Navbar.svelte';
  import MyMovieList from './MyMovieList.svelte';

  // When the page loads, check if user is logged in. 
  async function init() {
    await checkLogin();
  }

  window.addEventListener('popstate', () => {
    console.log(window.location.hash);
    $route = window.location.hash;
  })

  onMount(init);
</script>

<header>
  <Header />
</header>
<main>
  <h1>MovieFlix</h1>

  <div class="card">
    {#if $route == "#home"}
    <h2>Home</h2>
    {:else if $route == "#login"}
    <Login />
    {:else if $route == "#myMovies"}
    <MyMovieList />
    {:else if $route == "#genres"}
    <Genres />
    {/if}
  </div>
</main>
<footer>
  <Footer />
</footer>

<style>
  header, main, footer {
    margin: 0 3em 0 3em;
  }
</style>