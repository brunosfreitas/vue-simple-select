<template>
  <div id="vaxinlife-vue">
    <VaxinlifeMap/>
  </div>
</template>

<script>
import VaxinlifeMap from './components/Vaxinlife-map.vue'

export default {
  name: 'vaxinlife-vue',
  components: {
    VaxinlifeMap
  }
}
</script>

<style>
#vaxinlife-vue {
  margin-top: 60px;
}
</style>
