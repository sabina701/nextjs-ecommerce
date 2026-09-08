import {
  FaChartPie,
  FaShoppingBag,
  FaShoppingCart,
  FaUserCog,
} from "react-icons/fa";
import {
  DASHBOARD_ROUTE,
  ORDER_MANAGEMENT_ROUTE,
  PRODUCT_MANAGEMENT_ROUTE,
  USER_MANAGEMENT_ROUTE,
} from "./routes";

const sidebarLinks = [
  {
    Icon: FaChartPie,
    label: "Dashboard",
    route: DASHBOARD_ROUTE,
  },
  {
    Icon: FaShoppingBag,
    label: "Product Management",
    route: PRODUCT_MANAGEMENT_ROUTE,
  },
  {
    Icon: FaShoppingCart,
    label: "Order Management",
    route: ORDER_MANAGEMENT_ROUTE,
  },
  {
    Icon: FaUserCog,
    label: "User Management",
    route: USER_MANAGEMENT_ROUTE,
  },
];
export default sidebarLinks;
