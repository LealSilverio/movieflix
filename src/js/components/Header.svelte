<script>
    import Navbar from './Navbar.svelte';
    import { userStore } from '../../lib/stores.mjs';
</script>

<main class="header-main">
    <div class="logo">
        <a href="../../index.html"><img src="../../../placeholder-image.png" alt="movieflix logo" width="150"/></a>
    </div>
    <div class="search-bar"></div>
    <div class="login-button">
        {#if $userStore.isLoggedIn}
        <li><a href="#home">Logout</a></li>
        {:else}
        <li><a href="#login">Login</a></li>
        {/if}
    </div>
</main>
<Navbar />

<style>
    .header-main {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .logo {
        text-align: left;
    }
    /* not in use right now! */
    /* .search-bar {
        grid-column: 2/3;
        grid-row: 1/2;
        text-align: right;
        align-self: center;
    } */
    .login-button {
        text-align: right;
        align-self: center;
        grid-row: 1/2;
        grid-column: 3/4;
        padding: 20px;
        list-style: none;
    }
    .login-button li a {
        padding: 5px;
        text-decoration: none;
        border: 1px solid black;
        background-color: black;
        color: white;
    }
</style>