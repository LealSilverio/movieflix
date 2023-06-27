<script>
    import { userStore } from '../../lib/stores.mjs';
</script>

<div class="logo">
    <a href="../../index.html"><img src="../../../placeholder-image.png" alt="movieflix logo" width="150"/></a>
</div>
<!-- <div class="search-bar"></div>  -->
<div class="login-button">
    {#if $userStore.isLoggedIn}
    <li><a href="#home">Logout</a></li>
    {:else}
    <li><a href="#login">Login</a></li>
    {/if}
</div>