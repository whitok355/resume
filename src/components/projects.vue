<template>
  <div class="projects-block">
    <h2>Project i've contributed</h2>
    <div class="projects-boxs">
      <div class="project-box">
        <carusel :received="images" :path="'projects'" />
        <div class="project-box-content">
          <div class="project-box-content__title"></div>
          <div class="project-box-content__discription"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import carusel from "./carusel.vue";
export default {
  name: "projects",
  components: { carusel },
  data() {
    return {
      images: [
        {
          title: "online-store",
          year: 2021,
          link: "https://whitok355.github.io/online-magazine/",
          discription:
            "GeekBrains graduation project. Development of an online store, with the following functionality: Adding goods, Removal of the product, Search-filtering,  Interaction with the server.Technologies used: JavaScript, Node js, express (for server development), CSS, HTML",
        },
        {
          title: "landing-page",
          year: 2021,
          link: "https://whitok355.github.io/project-landing-page/",
          discription:
            "Landing page made for training and honing skills.Technologies used: Vue js, CSS, HTML",
        },
        {
          title: "animals-aid",
          year: 2021,
          discription:
            "I participate as an intern in a charity project. The goal of the project is to help homeless animals.My main goal is to develop a personal account. Layout according to the layout. Technologies used: Vue js, Vue router, JavaScript, HTML, CSS, Node js",
        },
      ],
    };
  },
};
</script>
<style lang="sass" scoped>
.projects-block
  display: flex
  flex-direction: column
.projects-boxs
  display: flex
  align-items: center
  justify-content: center
.project-box
  width: 100%
@include tablet
    .project-box
        width: 700px
@include screen
    .project-box
        width: 100%
</style>
