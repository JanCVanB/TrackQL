<template lang="pug">
  .collaborations
    h1 Collaborations
    collaboration(
      v-for='collaboration in allCollaborations'
      v-bind:id='collaboration.id'
      v-bind:key='collaboration.id'
    )
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
            id
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
