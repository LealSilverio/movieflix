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


<h1 class="signup-title">Signup Form</h1>
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
    <button on:click={handleSignup} type="button" disabled={loading} class="signupButton">
        <span>{"SIGNUP"}</span>
    </button>
</div>
{#if errorMessage}
<p>{errorMessage}</p>
{/if}
</form>