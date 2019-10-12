import { CompositeDecorator } from 'draft-js'
import Hashtag from './hashtag'

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
      const HASHTAG_REGEX = /#[\w\u0590-\u05ff]+/g
      findWithRegex(HASHTAG_REGEX, contentBlock, callback)
    },
    component: Hashtag
  }
])

export default decorators
