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
import { COLLABORATION_QUERY } from '../constants/graphql'
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
      query: COLLABORATION_QUERY,
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
