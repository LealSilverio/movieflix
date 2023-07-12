<script>
  import { userStore } from "../../lib/stores.mjs";
  import { getUserProfile, setUserProfile } from "../../lib/supabaseClient.mjs";
  import { searchResults } from "../../lib/stores.mjs";
  import MyMovieCard from "./MyMovieCard.svelte";
  import { checkLogin } from "../../lib/supabaseClient.mjs";

  async function init() {
    await checkLogin();
  }
  init();

  if ($userStore.isLoggedIn) {
    const userId = $userStore.user.ID;
    let profile = {};
    async function init() {
      profile = await getUserProfile(userId);
    }

    async function handleSubmit(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const userProfile = {};
      userProfile.website = formData.get("website"); //corresponds to name attribute on the form
      userProfile.full_name = formData.get("full_name");
      setUserProfile(userProfile, userId);
    }
    init();

    let userInput = "star wars";

    async function getData() {
      console.log(userInput);
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2Q0ODg1ODhlYTI3Nzg2M2NlOGE2MjA3ZDFiNjY3NyIsInN1YiI6IjY0OWRmN2I0MDkxZTYyMDBhZDU0OGM4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DPwW979vHfknWm16hkBASCL59yCxcA7lYR-dBHJnYpE",
        },
      };
      await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${userInput}`,
        options
      )
        .then((response) => response.json())
        .then((response) => ($searchResults = response.results))
        .catch((err) => console.error(err));
    }

    getData();
  }
</script>

<h2>My Movie List</h2>

<!-- <form on:submit={handleSubmit}>
    <p>
        <label for="website">Website</label>
        <input type=text id="website" name="website" bind:value={profile.website} />
    </p>
    <p>
        <label for="full_name">Full Name</label>
        <input type=text id="full_name" name="full_name" bind:value={profile.full_name}/>
    </p>
<button type="submit">Submit</button>
</form> -->
<main>
  {#each $searchResults as movie}
  <MyMovieCard {movie} />
  {/each}
</main>


<style>

main{
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

</style>