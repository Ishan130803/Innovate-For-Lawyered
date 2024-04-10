"use client"
import UserContext from "@/components/chatPage/contexts/UserContext";
import { useSession } from "next-auth/react";
import { FC, HTMLAttributes } from "react";

export const UserContextWrapper: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const session = useSession();
  const user = session.data?.user;
  const status = session.status;
    return (
        <div>
          <UserContext.Provider value={{userData:user, status:status}} >
            {props.children}
          </UserContext.Provider>
            
        </div>
    );
}
