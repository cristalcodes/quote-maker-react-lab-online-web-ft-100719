export default (state = [], action) => {
  let index;
  let quote;
  switch(action.type){
    case "ADD_QUOTE":
      return [...state, action.quote];

    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);

    case "UPVOTE_QUOTE":
    index = state.findIndex(quote => quote.id === action.quoteId);//find index of quote
    quote = state[index]; //get the quote from state
    return [
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(index + 1)
      ];

    case "DOWNVOTE_QUOTE":
    index = state.findIndex(quote => quote.id === action.quoteId)
    quote = state[index]; //get the quote from state
    if (quote.votes > 0){
      return [
          ...state.slice(0, index),
          Object.assign({}, quote, {votes: quote.votes -= 1 }),
          ...state.slice(index + 1)
        ];
    } else {
      return state;
    }

    default:
      return state;
  }

}


// export const addQuote = quote => {
//   return {
//     type: "ADD_QUOTE",
//     quote: {...quote, votes:0}
//   }
// }
//
// export const removeQuote = quoteId => {
//   return {
//     type: "REMOVE_QUOTE",
//     quoteId
//   }
// }
//
// export const upvoteQuote = quoteId => {
//   return {
//     type: "UPVOTE_QUOTE",
//     quoteId
//   }
// }
//
// export const downvoteQuote = quoteId => {
//   return {
//     type: "DOWNVOTE_QUOTE",
//     quoteId
//   }
// }
