import { Card } from "@/app/chat/Card";
import { FC } from "react";
import { ChatSection } from "./ChatComponent/ChatSection";
interface PageProps {};

const Page: FC<PageProps> = (props) => {
    return (
        <div className="flex">
            <Card width="250px"/>
            <ChatSection width="250px"/>
        </div>
    );
}
export default Page;