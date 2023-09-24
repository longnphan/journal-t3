import { signIn, signOut, useSession } from "next-auth/react";
import { BookOpenIcon, PencilIcon, PencilSquareIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="navbar flex justify-between bg-primary text-primary-content">
      <div className="gap-2 pl-2">
        <PencilSquareIcon className="h-8 w-8" />
        <h1 className="text-2xl">Journal</h1>
      </div>

      {sessionData?.user && (
        <div className="flex">
          

          <Link href="/" className="flex gap-1">
          <PencilIcon className="h-5 w-5" />
            <h1 className="cursor-pointer">Create Entry</h1>
          </Link>

          <Link href="/journal" className="flex gap-1 pl-6">
          <BookOpenIcon className="h-6 w-6" />
            <h1 className="cursor-pointer">Entries</h1>
          </Link>




        </div>
      )}

      <div className="flex-none gap-2">
        <div className="cursor-pointer">
          {sessionData?.user ? (
            <div className="flex gap-2 pr-2" onClick={() => void signOut()}>
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