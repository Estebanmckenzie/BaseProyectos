"use client";

import type { ReactNode } from "react";
import useUserListsViewModel from "./hooks/useUserListsViewModel";
import { USER_LISTS } from "./constants/UserLists.constants";

const UserLists = (): ReactNode => {
  const {
    inputValue,
    userList,
    handleInputChange,
    handleAddUser,
    handleDeleteUser,
  } = useUserListsViewModel();

  return (
    <section className="w-full max-w-xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
          {USER_LISTS.TITLE}
        </h2>
        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {USER_LISTS.DESCRIPTION}
        </p>
      </div>

      <div className="mb-5">
        <label
          htmlFor="username"
          className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-200"
        >
          {USER_LISTS.INPUT_LABEL}
        </label>
        <div className="flex gap-3">
          <input
            id="username"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder={USER_LISTS.INPUT_PLACEHOLDER}
            className="w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-zinc-50"
          />
          <button
            type="button"
            onClick={handleAddUser}
            className="rounded-2xl bg-zinc-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-100"
          >
            {USER_LISTS.ADD_BUTTON}
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {USER_LISTS.LIST_TITLE}
        </h3>

        {userList.length === 0 ? (
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            {USER_LISTS.EMPTY_MESSAGE}
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {userList.map(({ id, name }) => (
              <li
                key={id}
                className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
              >
                <span>{name}</span>
                <button
                  type="button"
                  onClick={() => handleDeleteUser(id)}
                  className="rounded-full bg-red-500 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-red-400"
                >
                  {USER_LISTS.DELETE_BUTTON}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default UserLists;
