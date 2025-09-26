<template>
  <div class="youtube-embed-container">
    <iframe
      :src="embedUrl"
      :title="title"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen>
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'YouTubeEmbed',
  props: {
    videoId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: 'YouTube video player'
    },
    params: {
      type: String,
      default: ''
    }
  },
  computed: {
    embedUrl() {
      return `https://www.youtube.com/embed/${this.videoId}${this.params ? '?' + this.params : ''}`;
    }
  }
}
</script>

<style scoped>
.youtube-embed-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  width: 100%;
  margin-top: 28px;
  margin-bottom: 28px;
}

.youtube-embed-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>