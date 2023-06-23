<script>
    import { login, signup } from '../../lib/supabaseClient.mjs';

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
            if(error) throw error;
        } catch(error) {
            errorMessage = error;
        } finally {
            // When we finish, stop "loading" message 
            loading = false;
        }
    }

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

<div>
    <div>
    <h1>Login Page</h1>
        <form on:submit|preventDefault={handleLogin}>
        <div>
            <label for="email">Email</label>
            <input id="email" name="email" type="email" bind:value={email} required/>
        </div>
        <div>
            <label for="password">Password</label>
            <input id="password" name="password" type="password" bind:value={password} required />
        </div>
        <div>
            <button type="submit" disabled={loading}>
                <span>{loading ? "Loading" : "Login"}</span>
            </button>
            <button on:click={handleSignup} type="button" disabled={loading}>
                <span>{"Signup"}</span>
            </button>
        </div>
        {#if errorMessage}
        <p>{errorMessage}</p>
        {/if}
        </form>
    </div>
</div>