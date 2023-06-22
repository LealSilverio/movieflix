<script>
  import Login from './Login.svelte';
  import { userStore } from '../../lib/stores.mjs';
  import { checkLogin } from '../../lib/supabaseClient.mjs';
    import { onMount } from 'svelte';

  // When the page loads, check if user is logged in. 
  async function init() {
    await checkLogin();
  }


  onMount(init);
</script>

<main>
  <h1>MovieFlix</h1>

  <div class="card">
    {#if $userStore.isLoggedIn}
    <p>Logged in!</p>
    {:else}
    <Login />
    {/if}
  </div>
</main>