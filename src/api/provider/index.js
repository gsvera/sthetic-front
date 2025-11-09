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
  getInfoProvider: function (token) {
    return axiosInstance.get(
      `${BASE_URL_SCHEDULE}/share-url/get-info-provider/${token}`
    );
  },
  getTimesCalendarByProvider: function (data) {
    return axiosInstance.get(
      `${BASE_URL_SCHEDULE}/calendar/get-time-by-provider/${data.idProvider}?day=${data.day}&date=${data.date}`
    );
  },
  getServicesByProvider: function (idProvider) {
    return axiosInstance.get(
      `${BASE_URL_SCHEDULE}/get-services-by-provider/${idProvider}`
    );
  },
  saveScheduleService: function (data) {
    return axiosInstance.post(
      `${BASE_URL_SCHEDULE}/make-public-schedule-service`,
      data
    );
  },
};

export default apiProvider;
