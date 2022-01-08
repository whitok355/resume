<template>
  <div class="typewriter">
    <div class="block">
      <div class="run-text">
        <template v-for="(text, index) of texts" :key="index">
          <p class="text text-writer" :class="{ hidden: index != current }">
            {{ text }}
          </p>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "typewriter",
  data() {
    return {
      current: 0,
      texts: [
        "I'am junior front-end developer",
        "I like to play table tennis",
        "I am a father of two children",
      ],
    };
  },
  mounted() {
    this.writer();
  },
  methods: {
    writer() {
      setTimeout(() => {
        this.current =
          this.current === this.texts.length - 1 ? (this.current = 0) : this.current + 1;
        this.writer();
      }, 8000);
      console.log(this.current);
    },
  },
};
</script>
<style scoped lang="sass">
.hidden
  display: none
.typewriter
  margin: 50px 0 0
  display: flex
.run-text
  display: flex
  max-width: max-content
.text-writer
  animation: typewriter 8.1s steps(44), blinkTextCursor 500ms steps(44) infinite normal
  border-right: 2px solid rgba(255,255,255,.75)
  white-space: nowrap
  overflow: hidden
  font-family: "Special-elite"
  color: $red
@keyframes typewriter
  from
    width: 0
  50%
    width: 100%
  to
    width: 0
@keyframes blinkTextCursor
  from
    border-right-color: rgba(255,255,255,.75)
  to
    border-right-color: transparent
</style>
