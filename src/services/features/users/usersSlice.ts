import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IUser, TDisplayMode, TSortOption } from "../../../types/userTypes";
import { request } from "../../../utils/requests";

type TUsersState = {
  users: Array<IUser>;
  isUsersRequestLoading: boolean;
  isUsersRequestFailed: boolean;
  displayMode: TDisplayMode;
  filteredUsers: Array<IUser>;
  sortOption: TSortOption;
};

const initialState: TUsersState = {
  users: [],
  filteredUsers: [],
  isUsersRequestLoading: false,
  isUsersRequestFailed: false,
  displayMode: "cards",
  sortOption: "default",
};

export const getUsers = createAsyncThunk<IUser[], undefined>(
  "users/getUsers",
  async () => {
    const response = request<IUser[]>("http://localhost:3000/users");
    return response;
  }
);

const sortUsers = (users: IUser[], sortOption: TSortOption): IUser[] => {
  switch (sortOption) {
    case "name-asc":
      return [...users].sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return [...users].sort((a, b) => b.name.localeCompare(a.name));
    case "group-asc":
      return [...users].sort((a, b) => a.group.localeCompare(b.group));
    case "group-desc":
      return [...users].sort((a, b) => b.group.localeCompare(a.group));
    case "phone-asc":
      return [...users].sort((a, b) => a.phone.localeCompare(b.phone));
    case "phone-desc":
      return [...users].sort((a, b) => b.phone.localeCompare(a.phone));
    default:
      return users;
  }
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setDisplayMode: (state, action: PayloadAction<TDisplayMode>) => {
      state.displayMode = action.payload;
    },
    filterUsersByName: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase();
      state.users = state.filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(searchTerm)
      );
    },
    setSortOption: (state, action: PayloadAction<TSortOption>) => {
      state.sortOption = action.payload;
      state.users = sortUsers(state.filteredUsers, state.sortOption);
    },
    moveCard: (
      state,
      action: PayloadAction<{
        dragIndex: number;
        hoverIndex: number;
        sourceGroup: string;
      }>
    ) => {
      const { dragIndex, hoverIndex, sourceGroup } = action.payload;
      const temp = state.users[dragIndex];
      state.users = state.users.filter(
        (item, idx) => idx !== dragIndex && item.group == sourceGroup
      );
      state.users.splice(hoverIndex, 0, temp);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isUsersRequestLoading = true;
        state.isUsersRequestFailed = false;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isUsersRequestFailed = false;
        state.isUsersRequestLoading = false;
        state.users = action.payload;
        state.filteredUsers = action.payload;
      })
      .addCase(getUsers.rejected, (state) => {
        state.isUsersRequestFailed = true;
        state.isUsersRequestLoading = false;
      });
  },
});

export const { setDisplayMode, filterUsersByName, setSortOption, moveCard } =
  usersSlice.actions;
export default usersSlice.reducer;
