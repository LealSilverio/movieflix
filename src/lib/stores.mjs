import { writable } from 'svelte/store'; 

export const userStore = writable({ isLoggedIn: false, user: null });

export const route = writable(window.location.hash || "#home");

export const searchResults = writable([]);