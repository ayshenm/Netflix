export const navigationData = [
  {
    link: "/movie",
    name: "Home",
  },
  
  {
    link: "/films",
    name: "Films",
  },
  {
    link: "/series",
    name: "Series",
  },
  {
    link: "/news",
    name: "New & Popular",
  },
  {
    link: "/mylist",
    name: "My List",
  },
  
];

export const getActiveItem = (pathname: string) => {
  return navigationData.find((item) => item.link === pathname);
};
