export type HeaderGroupsService = {
  name: string;
  link: string;
};

export type HeaderGroups = [
  {
    groupName: string;
    groupLink: string;
    services: HeaderGroupsService[];
  },
];
