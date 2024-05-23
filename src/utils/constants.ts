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
  userList: "users-list",
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

export const points: { text: string; count: number; descr: string }[] = [
  {
    text: "Защищают ваши устройства блокируя несанкционированные попытки доступа к вашей веб-камере или слежки за вашими действиями онлайн.",
    count: 437,
    descr: "кибератак остановлено",
  },
  {
    text: "Запускают Защищенный браузер, который охраняет ваши финансы от мошенников во время онлайн-транзакций и покупок в интернете.",
    count: 106,
    descr: "уникальных вредоносных ссылок заблокировано",
  },
  {
    text: "Не подпускают злоумышленников к вашей сети и проверяют безопасность веб-сайтов и электронных писем, прежде чем вы их откроете.",
    count: 112,
    descr: "уникальных вредоносных объектов нейтрализовано",
  },
];
