import { Card } from "../UI/Card";
import { FiUsers } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <Card className="p-5">
        <div className="flex items-center">
          <div className="p-3 rounded-xl bg-blue-500/10">
            <TiMessages className="w-6 h-6 text-blue-400" />
          </div>
          <div className="ml-4">
            <div className="text-2xl font-bold">1,247</div>
            <div className="text-gray-400 text-sm">Total Messages</div>
          </div>
          <div className="ml-auto flex items-center text-green-400">
            <FaArrowUp className="w-4 h-4 mr-1" />
            <span className="text-sm">+12%</span>
          </div>
        </div>
      </Card>

      <Card className="p-5">
        <div className="flex items-center">
          <div className="p-3 rounded-xl bg-green-500/10">
            <FiUsers className="w-6 h-6 text-green-400" />
          </div>
          <div className="ml-4">
            <div className="text-2xl font-bold">42</div>
            <div className="text-gray-400 text-sm">Active Friends</div>
          </div>
          <div className="ml-auto flex items-center text-green-400">
            <FaArrowUp className="w-4 h-4 mr-1" />
            <span className="text-sm">+5%</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
