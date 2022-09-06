<script>
  import Character from "./lib/Character.svelte";

  let chartacters = [];
  let Countpage = 1;
  async function load() {
    const reponse = await fetch(
      "https://rickandmortyapi.com/api/character?page=" + Countpage
    );
    const data = await reponse.json();
    console.log(data.results);
    chartacters = data.results;
  }

  load();
  function nextPage() {
    Countpage++;
    load();
  }
  function previousPage() {
    Countpage--;
    load();
  }
</script>

<h1 class="title">Rick and Morty</h1>
<div class="content">
  <div class="btn">
    <button on:click={previousPage} disabled={Countpage === 1}>Prev</button>
  </div>
  <div class="btn">
    <button on:click={nextPage}>Next</button>
  </div>
</div>
<div class=" container__img">
  <div class="grid">
    {#each chartacters as character}
      <!-- <div>
      <img src={character.image} alt={character.name} srcset="" />
      <h1>{character.name}</h1>
      <h3>{character.species}</h3>
    </div> -->
      <Character {character} />
    {/each}
  </div>
</div>
