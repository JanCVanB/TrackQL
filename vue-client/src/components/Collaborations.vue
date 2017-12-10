<template lang="pug">
  .collaborations
    h1 Collaborations
    ul
      li(
        v-for='collaboration in allCollaborations'
        v-bind:key='collaboration.id'
      )
        router-link(
          v-bind:to=`{
            name: 'collaboration',
            params: { id: collaboration.id }
          }`
        )
          | {{ collaboration.name }}
          | &nbsp;({{ collaboration.tracks.length }} tracks)
</template>

<script>
import gql from 'graphql-tag'

import Collaboration from './Collaboration.vue'

export default {

  name: 'Collaborations',

  apollo: {

    allCollaborations: {
      query: gql`
        query AllCollaborationsQuery {
          allCollaborations {
            id,
            name,
            tracks {
              id
            }
          }
        }
      `
    }

  },

  components: {
    Collaboration
  }

}
</script>

<style scoped lang="sass">
</style>
