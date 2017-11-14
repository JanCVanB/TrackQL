var ghPages = require('gh-pages')

var ghPagesUrl = 'https://jancvanb.github.io/TrackQL'

ghPages.publish(
  'dist',
  {
    message: `:rocket: Deploy vue-client to ${ghPagesUrl} (auto-generated commit)`
  },
  function (error) {
    if (error) {
      console.log(
        `Error deploying vue-client to ${ghPagesUrl}`,
        error
      )
    }
  }
)
