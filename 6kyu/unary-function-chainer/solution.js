/* eslint-disable no-unused-vars */
const chained = functions => input => functions.reduce((accum, func) => func(accum), input)
