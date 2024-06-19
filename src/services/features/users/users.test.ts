import reducer, {
  filterUsersByName,
  getUsers,
  initialState,
  setDisplayMode,
  setSortOption,
} from "./usersSlice";
import { mockUsers, mockUser1, mockUser2 } from "../../../utils/testing-mocks";

describe("testing users slice", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  it("should handle getUsers.pending", () => {
    expect(
      reducer(initialState, {
        type: getUsers.pending.type,
      })
    ).toEqual({
      ...initialState,
      isUsersRequestFailed: false,
      isUsersRequestLoading: true,
    });
  });

  it("should handle getUsers.fulfilled", () => {
    expect(
      reducer(initialState, {
        type: getUsers.fulfilled.type,
        payload: mockUsers,
      })
    ).toEqual({
      ...initialState,
      isUsersRequestFailed: false,
      isUsersRequestLoading: false,
      users: mockUsers,
      filteredUsers: mockUsers,
    });
  });

  it("should handle getUsers.rejected", () => {
    expect(
      reducer(initialState, {
        type: getUsers.rejected.type,
      })
    ).toEqual({
      ...initialState,
      isUsersRequestFailed: true,
      isUsersRequestLoading: false,
    });
  });

  it("testing changes to the display mode ", () => {
    expect(reducer(initialState, setDisplayMode("columns"))).toEqual({
      ...initialState,
      displayMode: "columns",
    });
  });

  it("should return a filtered list of users", () => {
    const stateWithUsers = {
      ...initialState,
      users: mockUsers,
      filteredUsers: mockUsers,
    };
    const expectedUsers = {
      ...initialState,
      filteredUsers: mockUsers,
      users: [mockUser1],
    };

    expect(
      reducer(stateWithUsers, filterUsersByName("Carisa Valentin"))
    ).toEqual(expectedUsers);
  });

  it("should return a sorted array of users", () => {
    const stateWithUsers = {
      ...initialState,
      users: mockUsers,
      filteredUsers: mockUsers,
    };

    const expectedUsers = {
      ...initialState,
      sortOption: "name-desc",
      users: [mockUser2, mockUser1],
      filteredUsers: mockUsers,
    };

    expect(reducer(stateWithUsers, setSortOption("name-desc"))).toEqual(
      expectedUsers
    );
  });
});
