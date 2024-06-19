import { IUser } from "../types/userTypes";

export const mockUser1: IUser = {
  _id: "4a3725f5-dab1-4191-9868-3b09402f3818",
  name: "Carisa Valentin",
  phone: "+599-0911-517-462",
  account: "companydomain/ZellaGreenfield",
  email: "lyla-mclain-goss@yahoo.com",
  group: "CDN/Designers",
  verified: true,
};

export const mockUser2: IUser = {
  _id: "064f9ae4-ad20-47cf-9634-4a6a4db94867",
  name: "Kesha Tran",
  phone: "+354-0634-567-264",
  account: "companydomain/MarciaMoten",
  email: "dariusmcgrew3836@connected.equipment.aero",
  group: "Unmanaged",
  verified: false,
};

export const mockUsers = [mockUser1, mockUser2];
