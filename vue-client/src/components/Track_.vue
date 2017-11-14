<template lang="pug">
  .track
    h2 Track
    template(v-if='Track')
      div id: {{ Track.id }}
      div name: {{ Track.name }}
      clip(
        v-for='clip in Track.clips'
        v-bind:id='clip.id'
        v-bind:key='clip.id'
      )
      comment(
        v-for='comment in Track.comments'
        v-bind:id='comment.id'
        v-bind:key='comment.id'
      )
</template>

<script>
import { TRACK_QUERY } from '../constants/graphql'
import Clip from './Clip.vue'
import Comment from './Comment.vue'

export default {

  name: 'Track_',

  props: {

    id: {
      type: String,
      required: true
    }

  },

  apollo: {

    Track: {
      query: TRACK_QUERY,
      variables () {
        return {
          id: this.id
        }
      }
    }

  },

  components: {
    Clip,
    Comment
  }

}
</script>

<style scoped lang="sass">
.track
  margin-left: 60px  
</style>
