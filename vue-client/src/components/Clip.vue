<template lang="pug">
  .clip
    template(v-if='Clip')
      h3 {{ Clip.name }}
    template(v-else)
      | {{ notFoundMessage }}
</template>

<script>
import gql from 'graphql-tag'

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
            name,
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

  methods: {

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
