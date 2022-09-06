<script>
  export let character;
</script>

<div class="img">
  <img src={character.image} alt={character.name} srcset="" />
  <div class="texto">
    <p>{character.name}</p>
    <p>{character.species}</p>
  </div>
</div>
