"use client";
import { Avatar, Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";
import { signOut, useSession } from "next-auth/react";
import { FC, HTMLAttributes } from "react";

export const ProfileAvatar: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const session = useSession();
  const imageURL = session.data?.user?.image;
  return (
    <div {...props}>
      <Dropdown>
        <MenuButton>
          <Avatar src={imageURL}></Avatar>
        </MenuButton>
        <Menu>
          <MenuItem onClick={async()=>(await signOut())}>SignOut</MenuItem>
        </Menu>
      </Dropdown>
    </div>
  );
};
