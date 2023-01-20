const redux = require("redux");

const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";

// //ACTION
// {
//     type: BUY_CAKE
//     info: "First redux action";
// }

//action creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

const initalState = {
  numOfCakes: 10,
};

//reducer
// (state, action) => newState

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

// console.log(reducer());

const store = createStore(reducer);
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
