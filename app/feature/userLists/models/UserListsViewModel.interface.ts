import type { ChangeEvent } from "react";

export interface UserListItem {
  id: string;
  name: string;
}

export interface UseUserListsViewModelReturn {
  inputValue: string;
  userList: UserListItem[];
  handleInputChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleAddUser: () => void;
  handleDeleteUser: (userId: string) => void;
}
