import * as yup from "yup";

export const createProductSchema = yup.object({
  name: yup
    .string()
    .required("Tên sản phẩm là bắt buộc")
    .min(3, "Tên sản phẩm phải lớn hơn 3 ký tự"),
  category_id: yup.string().required("Danh mục là bắt buộc"),
  sku: yup.string().required("Mã sku là bắt buộc"),
  // sizes: yup
  //   .array()
  //   .min(1, "Kích thước là bắt buộc")
  //   .required("Kích thước là bắt buộc"),
  // colors: yup
  //   .array()
  //   .min(1, "Màu sắc là bắt buộc")
  //   .required("Màu sắc là bắt buộc"),
});
