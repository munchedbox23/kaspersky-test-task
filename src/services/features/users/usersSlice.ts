import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../../types/userTypes";
import { request } from "../../../utils/requests";

type TUsersState = {
  users: Array<IUser>;
  isUsersRequestLoading: boolean;
  isUsersRequestFailed: boolean;
};

const initialState: TUsersState = {
  users: [],
  isUsersRequestLoading: false,
  isUsersRequestFailed: false,
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
  reducers: {},
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
      })
      .addCase(getUsers.rejected, (state) => {
        state.isUsersRequestFailed = true;
        state.isUsersRequestLoading = false;
      });
  },
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;
