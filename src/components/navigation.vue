<template>
  <div class="navigation-block-mobile" v-if="visible">
    <ul class="navigation">
      <li class="navigation__li">
        <a href="#" class="navigation__link" @click="handleVisible()">Home </a>
      </li>
      <li class="navigation__li">
        <a href="#about" class="navigation__link" @click="handleVisible()">About Me</a>
      </li>
      <li class="navigation__li">
        <a href="#projects" class="navigation__link" @click="handleVisible()"
          >My Project</a
        >
      </li>
      <li class="navigation__li">
        <a href="#certificates" class="navigation__link" @click="handleVisible()"
          >Сertificates</a
        >
      </li>
      <li class="navigation__li">
        <a href="#footer" class="navigation__link" @click="handleVisible()">Contact Me</a>
      </li>
    </ul>
  </div>
  <div class="navigation-block-screen">
    <ul class="navigation">
      <li class="navigation__li"><a href="#" class="navigation__link">Home</a></li>
      <li class="navigation__li">
        <a href="#about" class="navigation__link">About Me</a>
      </li>
      <li class="navigation__li">
        <a href="#projects" class="navigation__link">My Project</a>
      </li>
      <li class="navigation__li">
        <a href="#certificates" class="navigation__link">Сertificates</a>
      </li>
      <li class="navigation__li">
        <a href="#footer" class="navigation__link">Contact Me</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "navigation",
  props: {
    visible: {
      type: Boolean,
    },
  },
  methods: {
    handleVisible() {
      this.$emit("changeVisible");
    },
  },
};
</script>
<style lang="sass" scoped>
.navigation-block-screen
    display: none
.navigation-block-mobile
    background: $dark
    opacity: 0.7
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100vh
    padding: 30px
    box-sizing: border-box
    text-align: center
    display: flex
    align-items: center
    justify-content: center
.navigation__li
    list-style-type: none
    margin-bottom: 15px
.navigation__link
    color: $white
    text-decoration: none
.navigation__li:hover  .navigation__link
    border-bottom: 1px solid $white
@include tablet
    .navigation-block-mobile
        display: none
    .navigation-block-screen
        display: block
        width: 80%
    .navigation
        display: flex
        justify-content: space-between
</style>
