import axiosInstance from "..";

const BASE_URL = "/catalog-type-service";
const BASE_URL_CATALOG = "/catalog";
const BASE_URL_LADA = "/catalog-lada-phone";
const BASE_URL_PLAN = "/catalog-plan";
const BASE_URL_COUPON = "/coupon";

export const apiTypeService = {
  getAll: function () {
    return axiosInstance.get(`${BASE_URL}/all`);
  },
  getAllState: function () {
    return axiosInstance.get(`${BASE_URL_CATALOG}/catalog-geo-state/get-all`);
  },
  getCatalogServicesByUserId: function (idUser) {
    return axiosInstance.get(`${BASE_URL}/get-services-by-user/${idUser}`);
  },
  getCatalogServiceDetailByIdPorject: function (id) {
    return axiosInstance.get(
      `${BASE_URL}/get-detail-service-by-id?id-project=${id}`
    );
  },
  getAllLada: function () {
    return axiosInstance.get(`${BASE_URL_LADA}`);
  },
  getAllPlan: function () {
    return axiosInstance.get(`${BASE_URL_PLAN}/filter/data`);
  },
  getCoupon: function (data) {
    return axiosInstance.get(
      `${BASE_URL_COUPON}/get-coupon?code=${data.code}${
        data.idUser !== null ? "&id-user=" + data.idUser : ""
      }`
    );
  },
};

export default apiTypeService;
