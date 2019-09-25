export const printToConsole = fields => {
  let str = '';
  for (const f of fields) {
    {
      const formattedString = `${convertKey(f.name)}: "${f.value}", \n`;
      f.name && (str += formattedString);
    }
  }
  str === '' ? null : console.log(str);
};

const convertKey = key => {
  return key.replace(/([A-Z])/, '_$1').toLowerCase();
};

// TODO
// output to be with firstName, not first_name

// IMPLEMENTATION
// to provide an array of keys (names) in given order see e.g. below
// iterate over and for each key to format first_name key from fields state => firstName output

// e.g.
// const fieldsOrder = [
//   'firstName',
//   'lastName',
//   'country',
//   'email',
//   'phoneNumber',
//   'postCode',
//   'streetAddress'
// ];
