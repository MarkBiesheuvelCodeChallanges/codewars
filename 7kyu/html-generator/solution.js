/* eslint-disable no-unused-vars */
class HTMLGen {
  comment (content) {
    return `<!--${content}-->`
  }
}

['div', 'b', 'a', 'p', 'body', 'span', 'title'].forEach((tag) => {
  HTMLGen.prototype[tag] = (content) => {
    return `<${tag}>${content}</${tag}>`
  }
})
