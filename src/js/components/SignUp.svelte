<script>
    import { login, signup } from '../../lib/supabaseClient.mjs';

    let name = "";
    let email = "";
    let password = "";
    let loading = false;
    let errorMessage = "";

    async function handleSignup() {
        try {
            // Displays "loading" in button 
            loading = true;

            // Give {email, password} object to signup function 
            // Signup function returns {data, error} object 
            const { data, error } = await signup({ email, password });
            
            // If signup function returned an error 
            if(error) throw error;
        } catch(error) {
            errorMessage = error;
        } finally {
            // When we finish, stop "loading" message 
            loading = false;
        }
    }
</script>


<div id="signup">
<h1>SignUp Form</h1>
    <form on:submit|preventDefault={handleSignup}>
    <div>
        <label for="name">Name</label>
        <input id="name" name="name" bind:value={name} required/>
    </div>
    <div>
        <label for="email">Email</label>
        <input id="email" name="email" type="email" bind:value={email} required/>
    </div>
    <div>
        <label for="password">Password</label>
        <input id="password" name="password" type="password" bind:value={password} required />
    </div>
    <div>
        <button on:click={handleSignup} type="button" disabled={loading} id="signupButton">
            <span>{"Signup"}</span>
        </button>
    </div>
    {#if errorMessage}
    <p>{errorMessage}</p>
    {/if}
    </form>
</div>

<style>
    #signup{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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

    input{
        padding: 5px;
    }

    button{
        display: block;
        margin: 10px auto;
        padding: 10px 50px;
        background-color: blue;
        color: white;
        font-size: 1.2em;
        border-radius: 10px;
    }
</style>