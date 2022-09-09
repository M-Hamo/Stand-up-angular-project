import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: "الأصناف",
    icon: "shopping_basket",
    link: "/board/products",
  },
  {
    id: 2,
    label: "الموردون",
    icon: "groups",
    link: "/board/under-working",
  },
  {
    id: 3,
    label: "الطلبات",
    icon: "add_shopping_cart",
    link: "/board/under-working",
  },
  {
    id: 4,
    label: "الصيدليات",
    icon: "storefront",
    link: "/board/under-working",
  },
];
