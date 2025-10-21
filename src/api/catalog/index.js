import axiosInstance from "..";

const BASE_URL = "/catalog-type-service";

export const apiTypeService = {
  getAll: function () {
    return axiosInstance.get(`${BASE_URL}/all`);
  },
};

export default apiTypeService;
