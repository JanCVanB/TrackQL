<template lang="pug">
  .clip
    h2 Clip
    template(v-if='Clip')
      div id: {{ Clip.id }}
      div name: {{ Clip.name }}
      comment(
        v-for='comment in Clip.comments'
        v-bind:id='comment.id'
        v-bind:key='comment.id'
      )
</template>

<script>
import { CLIP_QUERY } from '../constants/graphql'
import Comment from './Comment.vue'

export default {

  name: 'Clip',

  props: {

    id: {
      type: String,
      required: true
    }

  },

  apollo: {

    Clip: {
      query: CLIP_QUERY,
      variables () {
        return {
          id: this.id
        }
      }
    }

  },

  components: {
    Comment
  }

}
</script>

<style scoped lang="sass">
.clip
  margin-left: 60px  
</style>
