import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook, faBuilding } from "@fortawesome/free-regular-svg-icons";

interface INavLink {
  id: number;
  name: string;
  route: string;
  icon: IconDefinition;
}

export const ROUTE: Record<string, string> = {
  home: "/",
  userList: "user-list",
};

export const navLinks: Array<INavLink> = [
  {
    id: 1,
    name: " Home",
    route: ROUTE.home,
    icon: faBuilding,
  },
  {
    id: 2,
    name: "UserList",
    route: `/${ROUTE.userList}`,
    icon: faAddressBook,
  },
];
