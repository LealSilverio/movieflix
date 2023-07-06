<script>
  import { login, signup } from "../../lib/supabaseClient.mjs";

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
</script>

<div id="login">
  <h1>Login Form</h1>
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
      <button type="submit" disabled={loading}>
        <span>{loading ? "Loading" : "Login"}</span>
      </button>
      <p>Dont have an account?</p>
      <button id="signupButton">
        <span><a href="#signup">Signup</a></span>
      </button>
    </div>
    {#if errorMessage}
      <p>{errorMessage}</p>
    {/if}
  </form>
</div>

<style>
  #login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  form {
    display: block;
    margin: 0 auto;
  }

  p {
    text-align: center;
  }

  a {
    color: white;
    text-decoration: none;
  }

  label, input {
    display: block;
    margin: 0px auto;
  }

  label{
    margin-left: 20px;
  }
  input {
    padding: 5px;
    margin: 0px 20px;
    margin-bottom: 20px;
  }
  
  #signupButton {
    background-color: blue;
    font-size: 1em;
    padding: 8px 15px;
  }

  button {
    display: block;
    margin: 10px auto;
    padding: 10px 50px;
    background-color: rgb(220, 30, 40);
    color: white;
    font-size: 1.2em;
    border-radius: 10px;
  }
</style>
