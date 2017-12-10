<template lang="pug">
  .home
    h1 TrackQL
    h3
      | A music collaboration studio, made with&nbsp;
      a(href='http://graphql.org/') GraphQL
      | ,&nbsp;
      a(href='https://www.apollographql.com/') Apollo
      | &nbsp;and&nbsp;
      a(href='https://vuejs.org/') Vue
    br
    h2 Collaborations
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

  name: 'Home',

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
