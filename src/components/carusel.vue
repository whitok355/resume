<template>
  <div class="carusel margin">
    <svg class="carusel-arrow" @click="previous" viewBox="0 0 1024 1024">
      <path
        d="M297.813333 491.648l1.365334-1.749333 379.093333-376.149334a38.784 38.784 0 0 1 5.077333-4.096 34.346667 34.346667 0 0 1 14.293334-4.992c2.218667-0.170667 2.176-0.170667 4.394666-0.170666a33.493333 33.493333 0 0 1 14.549334 4.181333c12.330667 6.997333 18.688 21.76 15.274666 35.498667-1.237333 5.077333-7.04 13.44-7.04 13.44l-355.498666 352.853333 354.090666 354.389333s6.272 7.978667 7.893334 12.928a32.213333 32.213333 0 0 1-33.749334 41.557334c-6.656-0.682667-17.749333-7.68-17.749333-7.68l-379.221333-377.984-1.28-1.450667a30.378667 30.378667 0 0 1-7.893334-17.749333 31.018667 31.018667 0 0 1 3.712-18.602667 27.221333 27.221333 0 0 1 2.688-4.224z"
      />
    </svg>
    <template v-for="(item, index) of received" :key="index">
      <div class="carusel-image" :class="{ hidden: index != current }">
        <img :src="getUrlImg(item)" :alt="item.title" />
        <p :class="{ hidden: !item.link }">
          Link:
          <a :href="item.link">{{ item.title }}</a>
        </p>
        <p>{{ item.discription }}</p>
      </div>
    </template>
    <svg class="carusel-arrow" @click="next" viewBox="0 0 1024 1024">
      <path
        d="M290.909091 983.272727a29.090909 29.090909 0 0 1-20.596364-49.570909L689.92 512l-418.909091-421.701818a29.090909 29.090909 0 0 1 41.309091-40.96l439.505455 442.181818a29.090909 29.090909 0 0 1 0 40.96l-439.505455 442.181818a28.974545 28.974545 0 0 1-21.410909 8.610909z"
      />
    </svg>
  </div>
</template>
<script>
export default {
  name: "carusel",
  props: {
    received: {
      commentIds: Array,
    },
    path: {
      type: String,
    },
  },
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    getUrlImg(item) {
      return require(`../assets/image/${this.path}/${item.title}.png`);
    },
    previous() {
      this.current = this.current === 0 ? this.received.length - 1 : this.current - 1;
    },
    next() {
      this.current = this.current === this.received.length - 1 ? 0 : this.current + 1;
    },
  },
};
</script>
<style lang="sass" scoped>
.carusel
  display: flex
  align-items: center
  justify-content: center
.carusel-image
  display: flex
  flex-direction: column
  width: 100%
.carusel-image img
  width: 100%
  max-height: 200px
  margin-bottom: 10px
  border-radius: 50px
.carusel-image a
  font-size: 1.1em
  text-decoration: underline
  color: $white
.carusel-image p
  margin: 20px
.carusel-arrow
  width: 60px
  height: 60px
  fill: $white
  margin: 10px
  cursor: pointer
  display: block
.hidden
  display: none
@include tablet
  .carusel-image img
    width: 100%
    max-height: 400px
  .carusel-image:hover img
    transform: scale(1.2)
    transition-duration: 0.5s
  .carusel-image p
    margin: 30px
@include screen
  .carusel-image img
    max-height: 500px
  .carusel-arrow
    width: 120px
    height: 120px
</style>
