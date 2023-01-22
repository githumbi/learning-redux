const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfIcecreams: 10,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, actions)=>{
        state.numOfIcecreams += actions.payload
    }
  },
});

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions
