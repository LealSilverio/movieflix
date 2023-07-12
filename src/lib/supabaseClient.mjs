
import { createClient } from '@supabase/supabase-js';
import { userStore } from './stores.mjs';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

export async function signup(user) {

    // Function from supabase to sign up a user 
    let { data, error } = await supabase.auth.signUp({
        email: user.email,
        password: user.password
    });
    console.log(data);
    return { data, error };
}

export async function login(user) {
    
    // Function from supabase to log in a user 
    let { data, error } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: user.password
    });
    if (data.session) userStore.set({ isLoggedIn: true, user: data.user });
    console.log(data);
    return { data, error };  
}

export async function checkLogin() {
    const { data: { session } } = await supabase.auth.getSession();

    // If there is a session, it means there is a user logged in 
    if (session) {
        userStore.set({ isLoggedIn: true, user: session.user });
    } else {
        userStore.set({ isLoggedIn: false, user: null });
    }
}

export async function logout() {
    let {error} = await supabase.auth.signOut();
    if (!error) userStore.set({ isLoggedIn: false, user: null });
} 

export async function getUserProfile(userId) {
    let {data: profiles, error} = await supabase
    .from('profiles')
    .select("*")
    .eq("id", userId)
    .single()
    return profiles;
}

export async function  setUserProfile(profile, userId) {
    const {data, error} = await supabase
    .from('profile')
    .update(profile)
    .eq('id', userId)
    .select()
    return error
}