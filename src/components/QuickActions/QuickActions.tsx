import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import { FaFile } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { FaVideo } from "react-icons/fa";
export default function QuickActions() {
  return (
    <Card className="mt-6">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Button variant="secondary" className="flex-col h-24">
            <FaVideo className="w-6 h-6 mb-2 text-blue-400" />
            <span>Start Call</span>
          </Button>
          <Button variant="secondary" className="flex-col h-24">
            <HiUserGroup className="w-6 h-6 mb-2 text-cyan-400" />
            <span>New Group</span>
          </Button>
          <Button variant="secondary" className="flex-col h-24">
            <FaGamepad className="w-6 h-6 mb-2 text-purple-400" />
            <span>Play Game</span>
          </Button>
          <Button variant="secondary" className="flex-col h-24">
            <FaFile className="w-6 h-6 mb-2 text-green-400" />
            <span>Share Files</span>
          </Button>
        </div>
      </div>
    </Card>
  );
}
