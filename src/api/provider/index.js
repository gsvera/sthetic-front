import axiosInstance from "..";

const BASE_URL = "/user";
const BASE_URL_SCHEDULE = "/public-schedule-service";

export const apiProvider = {
  getProviders: function (data) {
    return axiosInstance.get(
      `${BASE_URL}/get-provider-available?page=${data.page}&size=${data.size}&typeService=${data.typeService}&defaultState=${data.defaultState}`
    );
  },
  getProviderById: function (idProvider) {
    return axiosInstance.get(`${BASE_URL}/get-provider-by-id/${idProvider}`);
  },
  getLocationByProvider: function (idUser) {
    return axiosInstance.get(
      `${BASE_URL}/get-location-by-provider?id-user=${idUser}`
    );
  },
  getRatingsByProvider: function (idProvider) {
    return axiosInstance.get(
      `${BASE_URL_SCHEDULE}/get-ratings-by-provider/${idProvider}`
    );
  },
};

export default apiProvider;
