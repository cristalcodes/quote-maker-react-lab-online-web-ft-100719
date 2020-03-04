// TODO: Create action creators as defined in tests
// Quotes Actions
//     addQuote(quote: {})
//       1) should return an Object with a type of "ADD_QUOTE" and a quote object
//     removeQuote(quoteId: Integer)
//       2) should return an Object with a type of "REMOVE_QUOTE" and a quoteId
//     upvoteQuote(quoteId: Integer)
//       3) should return an Object with a type of "UPVOTE_QUOTE" and a quoteId
//     downvoteQuote(quoteId: INteger)
//       4) should return an Object with a type of "DOWNVOTE_QUOTE" and a quoteId

export const addQuote = quote => {
  return {
    type: "ADD_QUOTE",
    quote: {...quote, votes:0}
  }
}

export const removeQuote = quoteId => {
  return {
    type: "REMOVE_QUOTE",
    quoteId
  }
}

export const upvoteQuote = quoteId => {
  return {
    type: "UPVOTE_QUOTE",
    quoteId
  }
}

export const downvoteQuote = quoteId => {
  return {
    type: "DOWNVOTE_QUOTE",
    quoteId
  }
}
