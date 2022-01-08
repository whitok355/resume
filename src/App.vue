<template>
  <div class="wrapper" id="top">
    <div class="wrapper-home">
      <div class="container">
        <div class="header-block">
          <logotip />
          <navBar @click="visible = !visible" />
          <navigation :visible="visible" @changeVisible="changeVisible" />
        </div>
        <home />
      </div>
    </div>
    <div class="wrapper-about">
      <div class="container">
        <about id="about" class="heightBlock" />
        <projects id="projects" class="heightBlock" />
        <certificates id="certificates" class="heightBlock" />
      </div>
    </div>
    <div class="wrapper-footer">
      <div class="container">
        <footer-block id="footer" />
      </div>
    </div>
    <arrowUp :scrollPosition="scrollPosition" />
  </div>
</template>

<script>
import navigation from "./components/navigation.vue";
import logotip from "./components/logotip.vue";
import navBar from "./components/icons/navBar.vue";
import home from "./components/home.vue";
import about from "./components/about.vue";
import projects from "./components/projects.vue";
import certificates from "./components/certificates.vue";
import footerBlock from "./components/footer.vue";
import arrowUp from "./components/icons/arrowUp.vue";
export default {
  name: "App",
  components: {
    navigation,
    logotip,
    navBar,
    home,
    about,
    projects,
    certificates,
    arrowUp,
    footerBlock,
  },
  emits: ["changeVisible"],
  data() {
    return {
      visible: false,
      scrollPosition: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e) {
      this.scrollPosition = e.srcElement.scrollingElement.scrollTop;
    },
    changeVisible() {
      this.visible = !this.visible;
    },
  },
};
</script>
<style lang="sass">
.wrapper
  display: flex
  justify-content: space-between
  flex-direction: column
.wrapper-home
 background-image: url(./assets/image/background.jpg)
 background-repeat: no-repeat
 background-position: center center
 background-size: cover
.header-block
 display: flex
 justify-content: space-between
 align-items: center
 height: 100%
.wrapper-about
  background: $dark
  box-shadow: 11px -19.5px 34.5px 30.5px $dark
  padding-top: 50px
  color: $white
  text-align: justify
.wrapper-footer
  background: black
  box-shadow: 11px -19.5px 34.5px 30.5px black
  color: $white
  padding: 30px
</style>
