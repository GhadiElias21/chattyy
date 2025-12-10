import { Button } from "../UI/Button";
import { TiMessages } from "react-icons/ti";
import { CiBellOn } from "react-icons/ci";
export default function Header() {
  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">
          Welcome back,{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Alex
          </span>
        </h1>
        <p className="text-gray-400 mt-2">
          Here&apos;s what&apos;s happening in your chats
        </p>
      </div>
      <div className="flex items-center space-x-3">
        <Button variant="ghost" className="hidden md:inline-flex">
          <CiBellOn className="w-5 h-5" />
        </Button>
        <Button variant="primary">
          <TiMessages className="w-5 h-5 mr-2" />
          New Message
        </Button>
      </div>
    </header>
  );
}
