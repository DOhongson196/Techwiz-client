//Category
export const API_CATEGORY = 'https://themeteorite.azurewebsites.net/api/v1/categories';

//Manufacturer
export const API_MANUFACTURER = 'https://themeteorite.azurewebsites.net/api/v1/manufacturers';
export const getManufacturerLogoUrl = (filename) => {
  return API_MANUFACTURER + '/logo/' + filename;
};

//Product
export const API_PRODUCT = 'https://themeteorite.azurewebsites.net/api/v1/products';
export const getProductImageUrl = (filename) => {
  return API_PRODUCT + '/images/' + filename;
};

//auth
export const API_AUTH = 'https://themeteorite.azurewebsites.net/api/v1/auth';

//cart
export const API_CART = 'https://themeteorite.azurewebsites.net/api/v1/cart';

//order
export const API_ORDER = 'https://themeteorite.azurewebsites.net/api/v1/order';

//new
export const API_NEWS = 'https://themeteorite.azurewebsites.net/api/v1/news';

//Players
export const API_PLAYER = 'https://themeteorite.azurewebsites.net/api/v1/player';
export const getPlayerImageUrl = (filename) => {
  return API_PLAYER + '/images/' + filename;
};
