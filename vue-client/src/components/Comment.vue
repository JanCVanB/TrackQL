<template lang="pug">
  .comment
    h2 Comment
    template(v-if='Comment')
      div id: {{ Comment.id }}
      div comment: {{ Comment.comment }}
</template>

<script>
import { COMMENT_QUERY } from '../constants/graphql'

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
      query: COMMENT_QUERY,
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
