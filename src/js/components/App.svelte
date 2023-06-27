<script>
  import Login from './Login.svelte';
  import { userStore, route } from '../../lib/stores.mjs';
  import { checkLogin } from '../../lib/supabaseClient.mjs';
  import { onMount } from 'svelte';
  import Navbar from './Navbar.svelte';
  import UserProfile from './UserProfile.svelte';
  import MovieDetails from './MovieDetails.svelte';

  // When the page loads, check if user is logged in. 
  async function init() {
    await checkLogin();
  }

  window.addEventListener('popstate', () => {
    console.log(window.location.hash);
    $route = window.location.hash;
    // getParameters function 
  })

  let movieId;

  onMount(init);
</script>
<header>
  <Navbar />
</header>
<main>
  <h1>MovieFlix</h1>

  <div class="card">
    {#if $route == "#home"}
    <p>Home</p>
    {:else if $route == "#login"}
    <Login />
    {:else if $route == "#profile"}
    <UserProfile />
    {/if}
  </div>
  <MovieDetails movieId={movieId}/>
</main>
