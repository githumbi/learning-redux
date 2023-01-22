const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/iceCream/iceCreamSlice').icecreamActions

console.log('initial state', store.getState())

const unsubscribe = store.subscribe(() => { 
  console.log('updated state', store.getState())
 })

 store.dispatch(cakeActions.ordered())
 store.dispatch(cakeActions.ordered())
 store.dispatch(cakeActions.ordered())
 store.dispatch(cakeActions.restocked(3))
 store.dispatch(icecreamActions.ordered())
 store.dispatch(icecreamActions.ordered())
 store.dispatch(icecreamActions.ordered())
 store.dispatch(icecreamActions.restocked(4))

 unsubscribe()

 