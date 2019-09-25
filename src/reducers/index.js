export const fieldsReducer = (state, action) => {
  console.log(state.fields);
  switch (action.type) {
    case 'ADD_DATA':
      return { fields: state.fields.concat(action.payload) };
    default:
      return state;
  }
};
