import gql from 'graphql-tag'

export const ALL_COLLABORATIONS_QUERY = gql`
  query AllCollaborationsQuery {
    allCollaborations {
      id
    }
  }
`

export const COLLABORATION_QUERY = gql`
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
`

export const CLIP_QUERY = gql`
  query ClipQuery ($id: ID) {
    Clip (id: $id) {
      id,
      name,
      comments {
        id
      }
    }
  }
`

export const COMMENT_QUERY = gql`
  query CommentQuery ($id: ID) {
    Comment (id: $id) {
      id,
      comment
    }
  }
`

export const TRACK_QUERY = gql`
  query TrackQuery ($id: ID) {
    Track (id: $id) {
      id,
      name,
      clips {
        id
      },
      comments {
        id
      }
    }
  }
`
