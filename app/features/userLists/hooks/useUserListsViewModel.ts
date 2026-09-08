import { useState } from "react";
import type { ChangeEvent } from "react";
import type {
  UseUserListsViewModelReturn,
  UserListItem,
} from "../models/UserListsViewModel.interface";

const useUserListsViewModel = (): UseUserListsViewModelReturn => {
  const [inputValue, setInputValue] = useState<string>("");
  const [userList, setUserList] = useState<UserListItem[]>([]);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInputValue(event.target.value);
  };

  const handleAddUser = (): void => {
    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
      return;
    }

    setUserList((currentUserList) => [
      ...currentUserList,
      {
        id: globalThis.crypto.randomUUID(),
        name: trimmedValue,
      },
    ]);
    setInputValue("");
  };

  const handleDeleteUser = (userId: string): void => {
    setUserList((currentUserList) =>
      currentUserList.filter(({ id }) => id !== userId)
    );
  };

  return {
    inputValue,
    userList,
    handleInputChange,
    handleAddUser,
    handleDeleteUser,
  };
};

export default useUserListsViewModel;
