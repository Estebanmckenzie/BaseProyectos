import type { ReactNode } from "react";
import UserLists from "@/app/feature/userLists";

const Home = (): ReactNode => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 p-6 font-sans dark:bg-black">
      <UserLists />
    </main>
  );
};

export default Home;
