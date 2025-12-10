import OnlineUsers from "@/components/Sidebar/OnlineUsers";
import UserProfile from "@/components/Sidebar/UserProfile";
import LevelProgress from "@/components/LevelProgress/LevelProgress";
import RecentActivity from "@/components/Sidebar/RecentActivity";
import QuickActions from "@/components/QuickActions/QuickActions";
import StatCards from "@/components/StatsCard/StatsCards";
import Header from "@/components/Header/Header";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-950 to-blue-950 p-4 md:p-8">
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <UserProfile />
            <StatCards />
            <QuickActions />
          </div>
          <div>
            <OnlineUsers />
            <RecentActivity />
          </div>
        </div>
        <LevelProgress />
      </div>
    </div>
  );
}
