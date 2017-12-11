<template lang="pug">
  .clip
    template(v-if='Clip')
      h3 {{ Clip.name }}
      h5 {{ volumePercent }}% volume
      h5 starts {{ formatTime(Clip.offset) }} into the track
      h5
        | uses {{ formatTime(Clip.trimStart) }} - {{ formatTime(Clip.trimEnd) }}
        | from its file, {{ Clip.file.name }}
      h5 {{ prettyBytes(Clip.file.size) }}
    template(v-else)
      | {{ notFoundMessage }}
</template>

<script>
import gql from 'graphql-tag'
import prettyBytes from 'pretty-bytes'

import Comment from './Comment.vue'

export default {

  name: 'Clip',

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

    Clip: {
      query: gql`
        query ClipQuery ($id: ID) {
          Clip (id: $id) {
            id,
            file {
              id,
              name,
              size,
              url
            },
            level,
            name,
            offset,
            trimEnd,
            trimStart
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

  computed: {

    volumePercent () {
      if (!this.Clip || !this.Clip.level) return 0
      return Number.parseInt(this.Clip.level * 100)
    }

  },

  methods: {

    formatTime (timeInSeconds) {
      if (!timeInSeconds) return '0s'
      const seconds = Number.parseInt(timeInSeconds % 60)
      const minutes = Number.parseInt((timeInSeconds - seconds) / 60)
      return `${minutes}m ${seconds}s`
    },

    prettyBytes: prettyBytes

  },

  mounted () {
    setTimeout(() => {
      this.notFoundMessage = `Can't find clip "${this.id}"`
    }, 2000)
  },

  components: {
    Comment
  }

}
</script>

<style scoped lang="sass">
.clip
  margin-left: 120px  

h5
  margin-left: 30px
</style>
