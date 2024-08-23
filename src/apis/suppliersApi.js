import http from "../configs/http";

const suppliersApi = {
  getAllSuppliers: (page = 1, limit = 10) => {
    return http.get(`suppliers?page=${page}&limit=${limit}`);
  },

  getSupplierById: (id) => http.get(`suppliers/${id}`),
  createSupplier: (data) => http.post("suppliers", data),
  deleteSupplier: (id) => http.delete(`suppliers/delete/${id}`),
  updateSupplier: (id, data) => http.put(`suppliers/${id}`, data),
  searchSupplier: (name) => http.get(`suppliers/search?name=${name}`),
};

export default suppliersApi;
