import { signIn, signOut, useSession } from "next-auth/react";
import {
  BookOpenIcon,
  PencilIcon,
  PencilSquareIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="navbar flex justify-between bg-primary text-primary-content">
      <div className="navbar-start">
        {sessionData?.user && (
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu-sm dropdown-content menu rounded-box z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <Link href="/" className="flex gap-1">
                  <PencilIcon className="h-5 w-5" />
                  <h1 className="cursor-pointer">Create Entry</h1>
                </Link>
              </li>
              <li>
                <Link href="/journal" className="flex gap-1">
                  <BookOpenIcon className="h-6 w-6" />
                  <h1 className="cursor-pointer">Entries</h1>
                </Link>
              </li>
            </ul>
          </div>
        )}

        <div className="flex gap-2 pl-2">
          <PencilSquareIcon className="h-7 w-7" />
          <h1 className="text-xl">Journal</h1>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          {sessionData?.user && (
            <div className="flex">
              <li>
                <Link href="/" className="flex gap-1">
                  <PencilIcon className="h-5 w-5" />
                  <h1 className="cursor-pointer">Create Entry</h1>
                </Link>
              </li>

              <li>
                <Link href="/journal" className="flex gap-1 pl-6">
                  <BookOpenIcon className="h-6 w-6" />
                  <h1 className="cursor-pointer">Entries</h1>
                </Link>
              </li>
            </div>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex-none cursor-pointer gap-2">
          {sessionData?.user ? (
            <div className="flex gap-2 pr-2" onClick={() => void signOut()}>
              <UserCircleIcon className="h-7 w-7" />

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

    // <div className="navbar flex justify-between bg-primary text-primary-content">
    //   <div className="gap-2 pl-2">
    //     <PencilSquareIcon className="h-8 w-8" />
    //     <h1 className="text-2xl">Journal</h1>
    //   </div>

    //   {sessionData?.user && (
    //     <div className="flex">

    //       <Link href="/" className="flex gap-1">
    //       <PencilIcon className="h-5 w-5" />
    //         <h1 className="cursor-pointer">Create Entry</h1>
    //       </Link>

    //       <Link href="/journal" className="flex gap-1 pl-6">
    //       <BookOpenIcon className="h-6 w-6" />
    //         <h1 className="cursor-pointer">Entries</h1>
    //       </Link>

    //     </div>
    //   )}

    //   <div className="flex-none gap-2">
    //     <div className="cursor-pointer">
    //       {sessionData?.user ? (
    //         <div className="flex gap-2 pr-2" onClick={() => void signOut()}>
    //           <UserCircleIcon className="h-8 w-8" />

    //           <h1 className="text-xl">{sessionData?.user?.name}</h1>
    //         </div>
    //       ) : (
    //         <button
    //           className="btn btn-ghost rounded-btn"
    //           onClick={() => void signIn()}
    //         >
    //           Sign in
    //         </button>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};
