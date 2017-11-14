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
import { ALL_COLLABORATIONS_QUERY } from '../constants/graphql'
import Collaboration from './Collaboration.vue'

export default {

  name: 'Collaborations',

  apollo: {

    allCollaborations: {
      query: ALL_COLLABORATIONS_QUERY
    }

  },

  components: {
    Collaboration
  }

}
</script>

<style scoped lang="sass">
</style>
