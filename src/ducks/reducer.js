const INITIAL_STATE = {
  name: "",
  address: "",
  city: "",
  stateabbr: "",
  zip: "",
  image_url: "",
  mortgage: "",
  rent: ""
};

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATEABBR = "UPDATE_STATEABBR";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_IMAGE_URL = "UPDATE_IMAGE_URL";
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
const UPDATE_RENT = "UPDATE_RENT";

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, name: action.payload };
    case UPDATE_ADDRESS:
      return { ...state, address: action.payload };
    case UPDATE_CITY:
      return { ...state, city: action.payload };
    case UPDATE_STATEABBR:
      return { ...state, stateabbr: action.payload };
    case UPDATE_ZIP:
      return { ...state, zip: action.payload };
    case UPDATE_IMAGE_URL:
      return { ...state, image_url: action.payload };
    case UPDATE_MORTGAGE:
      return { ...state, mortgage: action.payload };
    case UPDATE_RENT:
      return { ...state, rent: action.payload };
    default:
      return { ...state };
  }
}

export function updateName(name) {
  return {
    type: UPDATE_NAME,
    payload: name
  };
}
export function updateAddress(address) {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  };
}
export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}
export function updateStateAbbr(stateabbr) {
  return {
    type: UPDATE_STATEABBR,
    payload: stateabbr
  };
}
export function updateZip(zip) {
  return {
    type: UPDATE_ZIP,
    payload: zip
  };
}
export function updateImageURL(image_url) {
  return {
    type: UPDATE_IMAGE_URL,
    payload: image_url
  };
}
export function updateMortgage(mortgage) {
  return {
    type: UPDATE_MORTGAGE,
    payload: mortgage
  };
}
export function updateRent(rent) {
  return {
    type: UPDATE_RENT,
    payload: rent
  };
}
