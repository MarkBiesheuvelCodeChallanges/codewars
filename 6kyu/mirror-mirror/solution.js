/* eslint-disable no-unused-vars */
const evilTwin = (obj) => {
  let twin = Object.create(obj)
  twin.hasGoatee = true
  return twin
}
