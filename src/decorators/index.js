import { CompositeDecorator } from 'draft-js'
import Hashtag from './Hashtag'
import HeadingOne from './HeadingOne'

const findWithRegex = (regex, contentBlock, callback) => {
  const text = contentBlock.getText()
  let matchArr, start
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index
    callback(start, start + matchArr[0].length)
  }
}

const decorators = new CompositeDecorator([
  {
    strategy: (contentBlock, callback, contentState) => {
      // Matches a # with any non-whitespace character directly succeeding it
      findWithRegex(/#[\w\u0590-\u05ff]+/g, contentBlock, callback)
    },
    component: Hashtag
  },
  {
    strategy: (contentBlock, callback, contentState) => {
      // Matches a # and a space with any character directly succeeding it
      // except a newline
      findWithRegex(/# [^\n]+/g, contentBlock, callback)
    },
    component: HeadingOne
  }
])

export default decorators
