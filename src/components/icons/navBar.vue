<template>
    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">
        <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/>
    </svg>
</template>
<script>
export default {
    name: 'navBar'
}
</script>
<style lang='sass' scoped>
svg
    fill: $white
    position: relative
    z-index: 1
    width: 46px
    height: 46px
    border: 2px solid $white
    border-radius: 50px
    padding: 5px
@include tablet
    svg
        display: none
</style>
