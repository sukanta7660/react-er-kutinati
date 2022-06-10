const redux = require('redux')
const createStore = redux.createStore
const combineReducer = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: 'first redux action'
  }
}

const buyIceCream = () => {
  return {
    type: BUY_ICECREAM
  }
}

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCream: 20
// }

const initialCakeState = {
  numOfCakes: 10
}

const initialIceCreamState = {
  numOfIceCream: 20
}

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE : return {
//       ...state,
//       numOfCakes: state.numOfCakes - 1
//     }
//
//     case BUY_ICECREAM : return {
//       ...state,
//       numOfIceCream: state.numOfIceCream - 1
//     }
//
//     default: return state
//   }
// }

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE : return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }

    default: return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM : return {
      ...state,
      numOfIceCream: state.numOfIceCream - 1
    }

    default: return state
  }
}

const rootReducer = combineReducer({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

const store = createStore(rootReducer)

console.log('Initial state', store.getState())

const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()
