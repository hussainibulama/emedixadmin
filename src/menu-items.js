import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faGlobeAfrica,
  faHome,
  faIdBadge,
  faPersonBooth,
  faTags,
  faUserFriends,
  faUsers,
  faSwatchbook,
  faMoneyCheckAlt,
  faHistory,
  faEllipsisV,
  faWallet,
  faSortAmountDownAlt,
  faFileArchive,
} from "@fortawesome/free-solid-svg-icons";
import Counter from "./counter";
import CounterPre from "./counterpre";
export default {
  items: [
    {
      id: "navigation",
      title: "Dashboard",
      type: "group",
      icon: "icon-navigation",
      children: [
        {
          id: "dashboard",
          title: "Home",
          type: "item",
          url: "/dashboard",
          icon: <FontAwesomeIcon icon={faHome} />,
        },
        {
          id: "orders",
          title: "Orders",
          type: "item",
          url: "/order",
          icon: <FontAwesomeIcon icon={faSortAmountDownAlt} />,
          badge: {
            title: <Counter />,
            type: "label-danger",
          },
        },
        {
          id: "orders",
          title: "Pre Order",
          type: "item",
          url: "/preorder",
          icon: <FontAwesomeIcon icon={faEllipsisV} />,
          badge: {
            title: <CounterPre />,
            type: "label-danger",
          },
        },
        {
          id: "category",
          title: "Category",
          type: "item",
          url: "/Category",
          icon: <FontAwesomeIcon icon={faFileArchive} />,
        },
        {
          id: "products",
          title: "Products",
          type: "item",
          url: "/product",
          icon: <FontAwesomeIcon icon={faTags} />,
        },
        {
          id: "customers",
          title: "Customers",
          type: "item",
          url: "/customer",
          icon: <FontAwesomeIcon icon={faUserFriends} />,
        },
        {
          id: "marketing",
          title: "Marketing",
          type: "item",
          url: "/marketing",
          icon: <FontAwesomeIcon icon={faBullhorn} />,
        },
        {
          id: "discounts",
          title: "Discounts",
          type: "item",
          url: "/discounts",
          icon: <FontAwesomeIcon icon={faPersonBooth} />,
        },
      ],
    },
    {
      id: "payment",
      title: "Payment Info",
      type: "group",
      icon: "icon-navigation",
      children: [
        {
          id: "wallet",
          title: "Wallet",
          type: "item",
          url: "/wallet",
          icon: <FontAwesomeIcon icon={faWallet} />,
        },
        {
          id: "orders",
          title: "Bank Info",
          type: "item",
          url: "/bank",
          icon: <FontAwesomeIcon icon={faMoneyCheckAlt} />,
        },
        {
          id: "products",
          title: "Payment History",
          type: "item",
          url: "/payhistory",
          icon: <FontAwesomeIcon icon={faHistory} />,
        },
      ],
    },

    {
      id: "storesettings",
      title: "Store Settings",
      type: "group",
      icon: "icon-pages",
      children: [
        {
          id: "domain",
          title: "Domain Name",
          type: "item",
          url: "/domain",
          icon: <FontAwesomeIcon icon={faGlobeAfrica} />,
          badge: {
            title: "New",
            type: "label-danger",
          },
        },

        {
          id: "sample-page",
          title: "Store Profile",
          type: "item",
          url: "/storeprofile",
          classes: "nav-item",
          icon: <FontAwesomeIcon icon={faIdBadge} />,
        },
        {
          id: "docs",
          title: "Users",
          type: "item",
          url: "/users",
          classes: "nav-item",
          icon: <FontAwesomeIcon icon={faUsers} />,
        },
        {
          id: "docs",
          title: "Store Template",
          type: "item",
          url: "/storetemplate",
          classes: "nav-item",
          icon: <FontAwesomeIcon icon={faSwatchbook} />,
        },

        /*{
                    id: 'buy-now',
                    title: 'Buy Now',
                    type: 'item',
                    icon: 'feather icon-user',
                    classes: 'nav-item',
                    url: 'https://codedthemes.com',
                    target: true,
                    external: true,
                    badge: {
                        title: 'v1.0',
                        type: 'label-primary'
                    }
                }*/
      ],
    },
  ],
};
