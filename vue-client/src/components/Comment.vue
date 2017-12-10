<template lang="pug">
  .comment
    h2 Comment
    template(v-if='Comment')
      div id: {{ Comment.id }}
      div comment: {{ Comment.comment }}
</template>

<script>
import gql from 'graphql-tag'

export default {

  name: 'Comment',

  props: {

    id: {
      type: String,
      required: true
    }

  },

  apollo: {

    Comment: {
      query: gql`
        query CommentQuery ($id: ID) {
          Comment (id: $id) {
            id,
            comment
          }
        }
      `,
      variables () {
        return {
          id: this.id
        }
      }
    }

  }

}
</script>

<style scoped lang="sass">
.comment
  margin-left: 60px  
</style>
