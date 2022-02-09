<template>
  <div class="footer-block">
    <h2>Contact with me</h2>
    <div class="footer-content margin">
      <div class="footer-content-block">
        <h3>Telephone: <span> +7-917-313-91-39</span></h3>
        <h3>Telegram: <span> @OlegovichAndrey</span></h3>
      </div>
      <div class="footer-content-block">
        <h3>Mail: <span> 3139139@mail.ru</span></h3>
        <h3>Instagram: <span> _olegovich89_</span></h3>
      </div>
      <div class="footer-content-block">
        <h3>
          HeadHunter:<br />
          <a
            target="blank"
            href="https://hh.ru/resume/d12aa7efff0987e1000039ed1f417548576f4b"
            >просмотреть резюме</a
          >
        </h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "footer",
};
</script>
<style lang="sass" scoped>
.footer-content h3
  margin-top: 15px
@include tablet
  .footer-content h3
    letter-spacing: 2px
@include screen
  .footer-content
    display: flex
    justify-content: space-between
  .footer-content-block
    width: 33%
  .footer-content-block:first-child
      text-align: left
  .footer-content-block:nth-child(2)
    text-align: center
  .footer-content-block:last-child
    text-align: right
</style>
