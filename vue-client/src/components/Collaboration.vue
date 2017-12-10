<template lang="pug">
  .collaboration
    h2 Collaboration
    template(v-if='Collaboration')
      div id: {{ Collaboration.id }}
      div name: {{ Collaboration.name }}
      track_(
        v-for='track in Collaboration.tracks'
        v-bind:id='track.id'
        v-bind:key='track.id'
      )
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

  components: {
    Track_
  }

}
</script>

<style scoped lang="sass">
.collaboration
  margin-left: 60px  
</style>
