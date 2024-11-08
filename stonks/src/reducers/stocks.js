export default function stocks (state = [], action) {
  switch (action.type) {
    case 'ADD_STOCK':
      return [
        ...state,
        action.stock
      ]
    case 'REMOVE_STOCK':
      return state.filter(stock => stock.id !== action.id)
    default:
      return state
  }
}
