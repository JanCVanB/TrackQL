<template lang="pug">
  .clip
    h2 Clip
    template(v-if='Clip')
      div id: {{ Clip.id }}
      div name: {{ Clip.name }}
      comment(
        v-for='comment in Clip.comments'
        v-bind:id='comment.id'
        v-bind:key='comment.id'
      )
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

  apollo: {

    Clip: {
      query: gql`
        query ClipQuery ($id: ID) {
          Clip (id: $id) {
            id,
            name,
            comments {
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
    Comment
  }

}
</script>

<style scoped lang="sass">
.clip
  margin-left: 60px  
</style>
