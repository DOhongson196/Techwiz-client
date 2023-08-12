//Category
export const API_CATEGORY = 'http://localhost:8080/api/v1/categories';

//Manufacturer
export const API_MANUFACTURER = 'http://localhost:8080/api/v1/manufacturers';
export const getManufacturerLogoUrl = (filename) => {
  return API_MANUFACTURER + '/logo/' + filename;
};

//Product
export const API_PRODUCT = 'http://localhost:8080/api/v1/products';
export const getProductImageUrl = (filename) => {
  return API_PRODUCT + '/images/' + filename;
};

//auth
export const API_AUTH = 'http://localhost:8080/api/v1/auth';

//cart
export const API_CART = 'http://localhost:8080/api/v1/cart';

//order
export const API_ORDER = 'http://localhost:8080/api/v1/order';

//new
export const API_NEWS = 'http://localhost:8080/api/v1/news';
