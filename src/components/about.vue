<template>
  <div class="about-block">
    <div class="about-content">
      <h2>About Me<span class="about-line"></span></h2>
      <p class="margin">
        Hi, my name is Andrey Ampleev and I am novice front-end developer who is building
        a new career from the thing I really enjoy. For a year, I have honed my skills as
        a web-developer, learning how to build web applications with HTML, CSS,
        JavaScript, Vue js, Node, databasing in MySQL while studying in Educational
        Studies at GeekBrains. I've loved building things for web and been working with
        JavaScript (ES6+), HTML & CSS, Vue.js, Node.js, MySQL recently.
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
