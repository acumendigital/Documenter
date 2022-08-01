<template>
  <home />
</template>

<script>
import home from './user/home.vue';
// import VueQuillEditor from 'quill-vuejs';

// import 'quill/dist/quill.core.css' // import styles
// import 'quill/dist/quill.snow.css' // for snow theme
// import 'quill/dist/quill.bubble.css' // for bubble theme

// Vue.use(VueQuillEditor, {theme: 'snow'})
export default {
  components: { home },
  name: 'IndexPage'
}
</script>
