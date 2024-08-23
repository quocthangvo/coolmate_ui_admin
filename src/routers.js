import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import CategoryList from "./pages/Category/CategoryList";
import CreateProduct from "./pages/Product/components/CreateProduct";
import SizeList from "./pages/Size/SizeList";
import ColorList from "./pages/Color/ColorList";
import ProductDetailList from "./pages/ProductDetail/ProductDetailList";
import CreateCategory from "./pages/Category/components/CreateCategory";
import CreateSize from "./pages/Size/components/CreateSize";
import CreateColor from "./pages/Color/components/CreateColor";
import ProductList from "./pages/Product/ProductList";
import UpdateCategory from "./pages/Category/components/UpdateCategory";
import UpdateColor from "./pages/Color/components/UpdateColor";
import UpdateSize from "./pages/Size/components/UpdateSize";
import UpdateProduct from "./pages/Product/components/UpdateProduct/UpdateProduct";
import Login from "./pages/Login";
import AuthLayout from "./layouts/AuthLayout";
import Account from "./pages/Login/Account";
import UserList from "./pages/User/UserList";
import CreateUser from "./pages/User/components/CreateUser";
import UpdateUser from "./pages/User/components/UpdateUser/UpdateUser";
import SupplierList from "./pages/Supplier/SupplierList";
import CreateSupplier from "./pages/Supplier/components/CreateSupplier";
import UpdateSupplier from "./pages/Supplier/components/UpdateSupplier";
import PurchaseOrderList from "./pages/PurchaseOrder/PurchaseOrderList";
import CreatePurchaseOrder from "./pages/PurchaseOrder/components/CreatePurchaseOrder";
import PurchaseOrderDetailList from "./pages/PurchaseOrderDetail/PurchaseOrderDetailList";
import InventoryList from "./pages/Inventory/InventoryList";
import OrderList from "./pages/Order/OrderList";
import OrderDetailList from "./pages/OrderDetail/OrderDetailList";
import PriceList from "./pages/Price/PriceList";
import CreatePrice from "./pages/Price/components/CreatePrice/CreatePrice";
import UpdatePrice from "./pages/Price/components/UpdatePrice";
import PriceAllList from "./pages/Price/PriceAlList";
import PropertiesList from "./pages/List/PropertiesList";

export default function useRouterElement() {
  return useRoutes([
    {
      path: "/",
      element: (
        <AuthLayout>
          <Login />
        </AuthLayout>
      ),
    },
    {
      path: "/mainLayout",
      element: <MainLayout />,
    },
    {
      path: "/products",
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      ),
    },
    {
      path: "/products/create",
      element: (
        <MainLayout>
          <CreateProduct />
        </MainLayout>
      ),
    },
    {
      path: "/products/:id",
      element: (
        <MainLayout>
          <UpdateProduct />
        </MainLayout>
      ),
    },

    {
      path: "/categories",
      element: (
        <MainLayout>
          <CategoryList />
        </MainLayout>
      ),
    },
    {
      path: "/categories/create",
      element: (
        <MainLayout>
          <CreateCategory />
        </MainLayout>
      ),
    },
    {
      path: "/categories/:id",
      element: (
        <MainLayout>
          <UpdateCategory />
        </MainLayout>
      ),
    },
    {
      path: "/sizes",
      element: (
        <MainLayout>
          <SizeList />
        </MainLayout>
      ),
    },
    {
      path: "/sizes/create",
      element: (
        <MainLayout>
          <CreateSize />
        </MainLayout>
      ),
    },
    {
      path: "/sizes/:id",
      element: (
        <MainLayout>
          <UpdateSize />
        </MainLayout>
      ),
    },
    {
      path: "/colors",
      element: (
        <MainLayout>
          <ColorList />
        </MainLayout>
      ),
    },
    {
      path: "/colors/create",
      element: (
        <MainLayout>
          <CreateColor />
        </MainLayout>
      ),
    },
    {
      path: "/colors/:id",
      element: (
        <MainLayout>
          <UpdateColor />
        </MainLayout>
      ),
    },
    {
      path: "/productDetails",
      element: (
        <MainLayout>
          <ProductDetailList />
        </MainLayout>
      ),
    },
    {
      path: "/productDetails/product/:id",
      element: (
        <MainLayout>
          <ProductDetailList />
        </MainLayout>
      ),
    },
    {
      path: "/suppliers",
      element: (
        <MainLayout>
          <SupplierList />
        </MainLayout>
      ),
    },
    {
      path: "/suppliers/create",
      element: (
        <MainLayout>
          <CreateSupplier />
        </MainLayout>
      ),
    },
    {
      path: "/suppliers/:id",
      element: (
        <MainLayout>
          <UpdateSupplier />
        </MainLayout>
      ),
    },
    {
      path: "/account",
      element: (
        <MainLayout>
          <Account />
        </MainLayout>
      ),
    },
    {
      path: "/users",
      element: (
        <MainLayout>
          <UserList />
        </MainLayout>
      ),
    },
    {
      path: "/users/create",
      element: (
        <MainLayout>
          <CreateUser />
        </MainLayout>
      ),
    },
    {
      path: "/users/:id",
      element: (
        <MainLayout>
          <UpdateUser />
        </MainLayout>
      ),
    },
    {
      path: "/purchaseOrders",
      element: (
        <MainLayout>
          <PurchaseOrderList />
        </MainLayout>
      ),
    },
    {
      path: "/purchaseOrders/create",
      element: (
        <MainLayout>
          <CreatePurchaseOrder />
        </MainLayout>
      ),
    },
    {
      path: "/purchaseOrderDetails/purchaseOrder/:id",
      element: (
        <MainLayout>
          <PurchaseOrderDetailList />
        </MainLayout>
      ),
    },

    {
      path: "/inventories",
      element: (
        <MainLayout>
          <InventoryList />
        </MainLayout>
      ),
    },

    {
      path: "/orders",
      element: (
        <MainLayout>
          <OrderList />
        </MainLayout>
      ),
    },

    {
      path: "/orders/orderDetail/:id",
      element: (
        <MainLayout>
          <OrderDetailList />
        </MainLayout>
      ),
    },
    {
      path: "/prices",
      element: (
        <MainLayout>
          <PriceList />
        </MainLayout>
      ),
    },
    {
      path: "/prices/create",
      element: (
        <MainLayout>
          <CreatePrice />
        </MainLayout>
      ),
    },
    {
      path: "/prices/update/:id",
      element: (
        <MainLayout>
          <UpdatePrice />
        </MainLayout>
      ),
    },
    {
      path: "/prices/allPrices",
      element: (
        <MainLayout>
          <PriceAllList />
        </MainLayout>
      ),
    },
    {
      path: "/properties",
      element: (
        <MainLayout>
          <PropertiesList />
        </MainLayout>
      ),
    },
  ]);
}
