export const fieldsReducer = (state = [], { type, payload }) => {
  const keys = state.fields.map(f => f.name);
  const collection = keys.includes(payload.name)
    ? [...state.fields.filter(f => f.name !== payload.name), payload]
    : [...state.fields, payload];

  // data source for output to the console
  console.log(collection);

  switch (type) {
    case 'ADD_DATA':
      return { fields: collection };
    default:
      return state;
  }
};
