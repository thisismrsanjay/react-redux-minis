const initialState = {
  age: 21
};

//reducer takes initaal state and action and returns the altered state
//on basis of action provided

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "AGE_UP") newState.age++;
  if (action.type === "AGE_DOWN") newState.age--;

  return newState;
};

export default reducer;
