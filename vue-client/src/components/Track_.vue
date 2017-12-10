<template lang="pug">
  .track
    template(v-if='Track')
      h2 {{ Track.name }}
      template(v-if='Track.clips.length')
        clip(
          v-for='clip in Track.clips'
          v-bind:id='clip.id'
          v-bind:key='clip.id'
        )
      template(v-else)
        | This track is empty
    template(v-else)
      | {{ notFoundMessage }}
</template>

<script>
import gql from 'graphql-tag'

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

  data () {
    return {
      notFoundMessage: '...'
    }
  },

  apollo: {

    Track: {
      query: gql`
        query TrackQuery ($id: ID) {
          Track (id: $id) {
            id,
            name,
            clips {
              id
            },
          }
        }
      `,
      variables () {
        return {
          id: this.id
        }
      }
    }

  },

  mounted () {
    setTimeout(() => {
      this.notFoundMessage = `Can't find track "${this.id}"`
    }, 2000)
  },

  components: {
    Clip,
    Comment
  }

}
</script>

<style scoped lang="sass">
.track
  margin-left: 120px  

h5
  margin-left: 30px  
</style>
