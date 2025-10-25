import axiosInstance from "..";

const BASE_URL = "/catalog-type-service";
const BASE_URL_CATALOG = "/catalog";

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
};

export default apiTypeService;
