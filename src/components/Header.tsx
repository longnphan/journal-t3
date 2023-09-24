import { signIn, signOut, useSession } from "next-auth/react";
import { PencilSquareIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex justify-between navbar bg-primary text-primary-content">
      <div className="gap-2 pl-2">
        <PencilSquareIcon className="h-8 w-8" />
        <h1 className="text-2xl">Journal</h1>
      </div>

      <div className="flex-none gap-2">
        <div className="cursor-pointer">
          {sessionData?.user ? (
            <div
              className="flex gap-2 pr-2"
              onClick={() => void signOut()}
            >

                <UserCircleIcon className="h-8 w-8" />

              <h1 className="text-xl">{sessionData?.user?.name}</h1>
            </div>
          ) : (
            <button
              className="btn btn-ghost rounded-btn"
              onClick={() => void signIn()}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
