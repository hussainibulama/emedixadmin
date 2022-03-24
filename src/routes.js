import React from "react";
import $ from "jquery";

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import("./Demo/Dashboard/Default"));

const UIBasicButton = React.lazy(() => import("./Demo/Order/Default"));

const UIBasicBreadcrumbPagination = React.lazy(() =>
  import("./Demo/Product/Default")
);
const AddProduct = React.lazy(() => import("./Demo/Product/Add"));
const PreOrder = React.lazy(() => import("./Demo/Preorder/Default"));
const Customer = React.lazy(() => import("./Demo/Customer/Default"));
const Marketing = React.lazy(() => import("./Demo/Marketing/Default"));
const Discount = React.lazy(() => import("./Demo/Discount/Default"));
const Wallet = React.lazy(() => import("./Demo/Wallet/Default"));
const Bank = React.lazy(() => import("./Demo/Bank/Default"));
const History = React.lazy(() => import("./Demo/History/Default"));
const Users = React.lazy(() => import("./Demo/Users/Default"));
const Profile = React.lazy(() => import("./Demo/Profile/Default"));
const Category = React.lazy(() => import("./Demo/Category/Default"));
const Domain = React.lazy(() => import("./Demo/Domain/Default"));
const Template = React.lazy(() => import("./Demo/Template/Default"));

const OtherDocs = React.lazy(() => import("./Demo/Other/Docs"));

const routes = [
  {
    path: "/dashboard",
    exact: true,
    name: "Default",
    title: "Dashboard Home",
    component: DashboardDefault,
  },
  {
    path: "/order",
    exact: true,
    type: "item",
    title: "Order Summary",
    name: "Basic Button",
    component: UIBasicButton,
  },
  {
    path: "/preorder",
    exact: true,
    name: "Basic Badges",
    component: PreOrder,
  },
  {
    path: "/category",
    exact: true,
    name: "Basic Breadcrumb Pagination",
    component: Category,
  },
  {
    path: "/product",
    exact: true,
    name: "Basic Breadcrumb Pagination",
    component: UIBasicBreadcrumbPagination,
  },
  {
    path: "/addproduct",
    exact: true,
    name: "Basic Breadcrumb Pagination",
    component: AddProduct,
  },
  {
    path: "/customer",
    exact: true,
    name: "Basic Collapse",
    component: Customer,
  },
  {
    path: "/marketing",
    exact: true,
    name: "Basic Tabs & Pills",
    component: Marketing,
  },
  {
    path: "/discounts",
    exact: true,
    name: "Basic Typography",
    component: Discount,
  },
  {
    path: "/wallet",
    exact: true,
    name: "Forms Elements",
    component: Wallet,
  },
  {
    path: "/bank",
    exact: true,
    name: "Bootstrap Table",
    component: Bank,
  },
  {
    path: "/payhistory",
    exact: true,
    name: "Nvd3 Chart",
    component: History,
  },
  {
    path: "/storeprofile",
    exact: true,
    name: "Google Map",
    component: Profile,
  },
  {
    path: "/users",
    exact: true,
    name: "Sample Page",
    component: Users,
  },
  {
    path: "/domain",
    exact: true,
    name: "Google Map",
    component: Domain,
  },
  {
    path: "/storetemplate",
    exact: true,
    name: "Google Map",
    component: Template,
  },
  { path: "/docs", exact: true, name: "Documentation", component: OtherDocs },
];

export default routes;
