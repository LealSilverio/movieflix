
<script>
    import { userStore } from "../../lib/stores.mjs";
</script>
<nav>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#profile">Profile</a></li>
        {#if $userStore.isLoggedIn}
        <li><a href="#home">Logout</a></li>
        {:else}
        <li><a href="#login">Login</a></li>
        {/if}
    </ul>
</nav>