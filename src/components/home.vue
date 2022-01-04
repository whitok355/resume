<template>
  <div class="home-block">
    <h2>Hi, my name is</h2>
    <h1>Andrey Ampleev</h1>
    <typewriter />
  </div>
</template>
<script>
import typewriter from "./typewriter.vue";
export default {
  name: "home",
  components: { typewriter },
};
</script>
<style lang="sass" scoped>
.home-block
    color: $white
    height: 90vh
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    text-align: center
</style>
