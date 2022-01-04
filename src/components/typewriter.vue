<template>
<div class="typewriter">
    <div class="block">
      <div class="run-text">
        <p class="text"></p>
      </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'typewriter',
  data () {
    return {
      current: -1,
      texts: [
        "I'am junior front-end developer",
        "I like to play table tennis",
        "I am a father of two children"
      ]
    }
  },
  mounted () {
    this.writer()
  },
  methods: {
    writer () {
      const block = document.querySelector('.text')
      block.classList.remove('writer-back')
      block.classList.remove('text-writer')
      if(this.current === this.texts.length -1) {
        this.current = -1
      }
      this.current++
      block.textContent = `${this.texts[this.current]}`
      block.classList.add('text-writer')
      setTimeout(this.backWriter, 4000, block)
    },
    backWriter (block) {
      block.classList.add('writer-back')
      setTimeout(this.writer, 4000)
    }
  }
}
</script>
<style scoped lang="sass">
.typewriter 
  margin: 50px 0 0
  display: flex
.run-text
  display: flex
  max-width: max-content
.text-writer
  animation: typewriter 4s steps(44), blinkTextCursor 500ms steps(44) infinite normal
  border-right: 2px solid rgba(255,255,255,.75)
  white-space: nowrap
  overflow: hidden
  transform: translateY(-50%)
  font-family: "Special-elite"
  color: $red
.writer-back
  animation: backWriter 4s steps(44), blinkTextCursor 500ms steps(44) infinite normal
@keyframes typewriter
  from 
    width: 0
  to 
    width: 100%
@keyframes backWriter 
  from 
    width: 100%
  to 
    width: 0
@keyframes blinkTextCursor
  from 
    border-right-color: rgba(255,255,255,.75)
  to 
    border-right-color: transparent
</style>