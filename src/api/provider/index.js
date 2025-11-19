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
  saveUser: function (data) {
    return axiosInstance.post(`${BASE_URL}/save/user-sthetic-work`, data);
  },
  createCheckoutSession: function (data) {
    return axiosInstance.post(`${BASE_URL}/create-checkout-session`, data);
  },
  getSessionStripe: function (sessionId) {
    return axiosInstance.get(
      `${BASE_URL}/verify-payment-stripe?session-id=${sessionId}`
    );
  },
  findDuplicatedUser: function (email, phone) {
    return axiosInstance.get(
      `${BASE_URL}/find-duplicated-user?email=${email}&phone=${phone}`
    );
  },
  getSimpleDataByprovider: function (userId) {
    return axiosInstance.get(`${BASE_URL}/get-simple-data-provider/${userId}`);
  },
  getPlanByUser: function (userId) {
    return axiosInstance.get(`${BASE_URL}/get-my-current-plan/${userId}`);
  },
  savePayStripe: function (data) {
    return axiosInstance.post(`${BASE_URL}/save-pay-stripe`, data);
  },
};

export default apiProvider;
