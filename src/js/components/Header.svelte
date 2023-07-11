<script>
    import { userStore } from '../../lib/stores.mjs';
    import Search from './Search.svelte';
    import { logout } from '../../lib/supabaseClient.mjs';
</script>

<div class="logo">
    <a href="../../index.html"><img src="/images/logo.svg" alt="movieflix logo" width="200"/></a>
</div>
<div class="search-bar">
    <Search />
</div>
<div class="login-button">
    {#if $userStore.isLoggedIn}
    <li><a href="#home" on:click={logout}>Logout</a></li>
    {:else}
    <li><a href="#login">Login</a></li>
    {/if}
</div>