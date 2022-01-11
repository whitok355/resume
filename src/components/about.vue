<template>
  <div class="about-block">
    <div class="about-content">
      <h2>About Me<span class="about-line"></span></h2>
      <p class="margin">
        Hi, my name is Andrey Ampleyev, and I am a novice frontend developer who is
        building a new career on what I really like. For a year, I honed my web developer
        skills by learning how to create web applications using HTML, GIT, CSS,
        JavaScript, Vue js, Node, MySQL. I liked creating things for the Internet and
        working with JavaScript (S6+), HTML and CSS, Vue.js , Node.js, MySQL.
      </p>
    </div>
    <img class="about-image" src="../assets/image/foto.png" alt="foto" />
  </div>
</template>
<script>
export default {
  name: "about",
};
</script>
<style lang="sass" scoped>
.about-block
    line-height: 1.3
    letter-spacing: 1.3px
    display: flex
    flex-direction: column
    align-items: center
.about-content h2
    display: flex
    align-items: center
.about-line
    display: inline-block
    width: 70px
    min-height: 2px
    border-radius: 10px
    margin-left: 20px
    background: linear-gradient(1deg, $white, rgba(0, 0, 0, 0.1) 60%, $dark)
    margin-bottom: 5px
.about-image
    max-width: 80%
    border-radius: 100px
    margin-top: 30px
    box-shadow: $shadow
@include tablet
    .about-block
        flex-direction: row
    .about-image
        max-width: 300px
        margin-left: 30px
@include screen
    .about-block
        flex-direction: column
    .about-image
        max-width: 500px
        margin-left: 0
</style>
