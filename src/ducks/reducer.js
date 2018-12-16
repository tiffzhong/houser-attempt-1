const INITIAL_STATE = {
  name: "",
  address: "",
  city: "",
  stateAbbr: "",
  zip: "",
  image_url: "",
  mortgage: "",
  rent: ""
};

const UPDATE_WIZARD1 = "UPDATE_WIZARD1";
const UPDATE_WIZARD2 = "UPDATE_WIZARD2";
const UPDATE_WIZARD3 = "UPDATE_WIZARD3";

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_WIZARD1:
      return Object.assign({}, state, action.payload);
    case UPDATE_WIZARD2:
      return Object.assign({}, state, action.payload);
    case UPDATE_WIZARD3:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export function updateWizard1(name, address, city, stateAbbr, zip) {
  return {
    type: UPDATE_WIZARD1,
    payload: { name, address, city, stateAbbr, zip }
  };
}

export function updateWizard2(image_url) {
  return {
    type: UPDATE_WIZARD2,
    payload: { image_url }
  };
}
export function updateWizard3(mortgage, rent) {
  return {
    type: UPDATE_WIZARD3,
    payload: { mortgage, rent }
  };
}
