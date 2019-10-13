import { CompositeDecorator } from 'draft-js'
import Hashtag from './Hashtag'
import HeadingOne from './HeadingOne'
import HeadingTwo from './HeadingTwo'
import HeadingThree from './HeadingThree'
import List from './List'

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
      findWithRegex(/(^#{1} )[^\n]+/gm, contentBlock, callback)
    },
    component: HeadingOne
  },
  {
    strategy: (contentBlock, callback, contentState) => {
      // Matches a ## and a space with any character directly succeeding it
      // except a newline
      findWithRegex(/(^#{2} )[^\n]+/gm, contentBlock, callback)
    },
    component: HeadingTwo
  },
  {
    strategy: (contentBlock, callback, contentState) => {
      // Matches a ### and a space with any character directly succeeding it
      // except a newline
      findWithRegex(/(^#{3} )[^\n]+/gm, contentBlock, callback)
    },
    component: HeadingThree
  },
  {
    strategy: (contentBlock, callback, contentState) => {
      // Matches - [ ] any character succeeding it except a newline
      findWithRegex(/- \[ \] [^\n]+/g, contentBlock, callback)
    },
    component: List
  }
])

export default decorators
