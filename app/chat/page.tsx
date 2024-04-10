import { Card } from "@/app/chat/Card";
import { FC } from "react";
import { ChatSection } from "./ChatComponent/ChatSection";
import { UserContextWrapper } from "./UserContextWrapper";
import { ProfileAvatar } from "@/components/ui/chat/ProfileAvatar";
interface PageProps {}

const Page: FC<PageProps> = (props) => {
  return (
    <UserContextWrapper>
      <ProfileAvatar className="fixed top-5 right-5" />
      <div className="flex">
        <Card width="250px" />
        <ChatSection width="250px" />
      </div>
    </UserContextWrapper>
  );
};
export default Page;
