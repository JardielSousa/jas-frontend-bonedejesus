<template>
  <!--Modal-->
  <div class="modal" id="videoModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div style="padding: 56.25% 0 0 0; position: relative">
            <iframe
              src="https://player.vimeo.com/video/172825105?autoplay=1"
              style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              "
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <p>
            <a href="https://vimeo.com/172825105">Baked omelette</a> from
            <a href="https://vimeo.com/user10277501">allrecipes uk</a> on
            <a href="https://vimeo.com">Vimeo</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal'
}
</script>

<style>

</style>