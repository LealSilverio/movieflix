<script>
  import { login, signup, checkLogin } from "../../lib/supabaseClient.mjs";
  import { userStore, route, searchResults } from '../../lib/stores.mjs';

  async function init() {
    await checkLogin();
  }

  let email = "";
  let password = "";
  let loading = false;
  let errorMessage = "";

  async function handleLogin() {
    try {
      // Displays "loading" in button
      loading = true;

      // Give {email, password} object to login function
      // Login function returns {data, error} object
      const { data, error } = await login({ email, password });

      // If login function returned an error
      if (error) throw error;
    } catch (error) {
      errorMessage = error;
    } finally {
      // When we finish, stop "loading" message
      loading = false;
    }
  }

  init();

  // function message() {
  //   if ($userStore.isLoggedIn == true) {
  //     alert('You are logged in!');
  //   }
  // }

  // message();

</script>

<h1 class="login-title">Login Form</h1>
<form on:submit|preventDefault={handleLogin}>
  <div>
    <label for="email">Email</label>
    <input id="email" name="email" type="email" bind:value={email} required />
  </div>
  <div>
    <label for="password">Password</label>
    <input id="password" name="password" type="password" bind:value={password} required/>
  </div>
  <div>
    <button type="submit" disabled={loading}> <!-- I added onclick on:click|once={message} -->
      <span>{loading ? "Loading" : "LOGIN"}</span>
    </button>
    <p>Don't have an account?</p>
    <button class="signupButton">
      <span><a href="#signup">SIGNUP</a></span>
    </button>
  </div>
  {#if errorMessage}
    <p>{errorMessage}</p>
  {/if}
  {#if $userStore.isLoggedIn}
    {alert('You are logged in!')}
  {/if}
</form>