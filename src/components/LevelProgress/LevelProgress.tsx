import { Button } from "../UI/Button";
import { Card } from "../UI/Card";

export default function LevelProgress() {
  return (
    <Card className="mt-8">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold">Level Progress</h3>
            <p className="text-gray-400">Keep chatting to level up!</p>
          </div>
          <Button variant="primary">View Rewards</Button>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Level 24</span>
            <span className="text-blue-400">500/1000 XP</span>
            <span>Level 25</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
              style={{ width: "50%" }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
