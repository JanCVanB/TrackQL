<template lang="pug">
  .collaboration
    template(v-if='Collaboration')
      h1 {{ Collaboration.name }}
      template(v-if='Collaboration.tracks.length')
        track_(
          v-for='track in Collaboration.tracks'
          v-bind:id='track.id'
          v-bind:key='track.id'
        )
      template(v-else)
        | This collaboration is empty
    template(v-else)
      | {{ notFoundMessage }}
</template>

<script>
import gql from 'graphql-tag'

import Track_ from './Track_.vue'

export default {

  name: 'Collaboration',

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

    Collaboration: {
      query: gql`
        query CollaborationQuery ($id: ID) {
          Collaboration (id: $id) {
            id,
            name,
            slug,
            tracks {
              id
            }
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
      this.notFoundMessage = `Can't find collaboration "${this.id}"`
    }, 2000)
  },

  components: {
    Track_
  }

}
</script>

<style scoped lang="sass">
</style>
