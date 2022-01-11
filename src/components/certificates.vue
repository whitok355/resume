<template>
  <div class="certificates-block margin">
    <h2>My certificates</h2>
    <carusel :received="certificates" :path="'certificates'" />
  </div>
</template>
<script>
import carusel from "./carusel.vue";
export default {
  name: "certificates",
  components: { carusel },
  data() {
    return {
      certificates: [
        {
          title: 1,
          year: 2021,
          discription: "Как начать свой путь в разработке (Ознакомительный)",
        },
        {
          title: 2,
          year: 2021,
          discription: "Основы программирования. Интерактивный курс",
        },
        {
          title: 3,
          year: 2021,
          discription: "Основы программирования. Начальный Уровень",
        },
        {
          title: 4,
          year: 2021,
          discription: "GIT. Базовый уровень",
        },
        {
          title: 5,
          year: 2021,
          discription: "CSS/HTML. Интерактивный курс",
        },
        {
          title: 6,
          year: 2021,
          discription: "CSS/HTML. Сложный уровень",
        },
        {
          title: 7,
          year: 2021,
          discription: "Продвинутый курс JavaScript",
        },
        {
          title: 8,
          year: 2021,
          discription: "Основы программирования",
        },
        {
          title: 9,
          year: 2022,
          discription: "Основы баз данных",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped></style>
