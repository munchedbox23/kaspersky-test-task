import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  combineSlices,
} from "@reduxjs/toolkit";
import { IUser, TDisplayMode } from "../../../types/userTypes";
import { request } from "../../../utils/requests";

type TUsersState = {
  users: Array<IUser>;
  isUsersRequestLoading: boolean;
  isUsersRequestFailed: boolean;
  displayMode: TDisplayMode;
  filteredUsers: Array<IUser>;
};

const initialState: TUsersState = {
  users: [],
  filteredUsers: [],
  isUsersRequestLoading: false,
  isUsersRequestFailed: false,
  displayMode: "cards",
};

export const getUsers = createAsyncThunk<IUser[], undefined>(
  "users/getUsers",
  async () => {
    const response = request<IUser[]>("http://localhost:3000/users");
    return response;
  }
);

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

export const { setDisplayMode, filterUsersByName } = usersSlice.actions;
export default usersSlice.reducer;
