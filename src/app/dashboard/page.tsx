import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, DollarSign, TrendingUp, Users, Settings, Plus, Calendar } from "lucide-react";

// Mock user data - in real app this would come from authentication/database
const userData = {
  name: "Alex Johnson",
  email: "alex@example.com",
  monthlyBudget: 150,
  totalDonated: 1800,
  organizationsSupported: 4,
  impactScore: 92
};

// Mock portfolio data
const portfolioOrganizations = [
  {
    id: 1,
    name: "Global Clean Water Initiative",
    category: "Water & Sanitation",
    monthlyAllocation: 45,
    percentage: 30,
    efficiency: 94,
    lastUpdate: "2 days ago"
  },
  {
    id: 2,
    name: "Education for All Foundation",
    category: "Education", 
    monthlyAllocation: 37.5,
    percentage: 25,
    efficiency: 91,
    lastUpdate: "1 week ago"
  },
  {
    id: 3,
    name: "Food Security Network",
    category: "Food & Agriculture",
    monthlyAllocation: 45,
    percentage: 30,
    efficiency: 88,
    lastUpdate: "3 days ago"
  },
  {
    id: 4,
    name: "Healthcare Heroes",
    category: "Healthcare",
    monthlyAllocation: 22.5,
    percentage: 15,
    efficiency: 96,
    lastUpdate: "5 days ago"
  }
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center">
              <Heart className="h-8 w-8 text-blue-600 mr-3" />
              <span className="text-2xl font-bold text-gray-900">Collectiva</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/dashboard" className="text-blue-600 font-medium">
                Dashboard
              </Link>
              <Link href="/organizations" className="text-gray-500 hover:text-gray-900">
                Organizations
              </Link>
              <Link href="/challenges" className="text-gray-500 hover:text-gray-900">
                Challenges
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                {userData.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {userData.name.split(' ')[0]}!
          </h1>
          <p className="text-lg text-gray-600">
            Here's your impact summary and portfolio overview
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Monthly Budget</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">${userData.monthlyBudget}</div>
              <div className="flex items-center text-sm text-green-600 mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                Active
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Donated</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">${userData.totalDonated.toLocaleString()}</div>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <Calendar className="h-3 w-3 mr-1" />
                This year
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Organizations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{userData.organizationsSupported}</div>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <Users className="h-3 w-3 mr-1" />
                In portfolio
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Impact Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{userData.impactScore}%</div>
              <div className="flex items-center text-sm text-green-600 mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                Excellent
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Portfolio Management */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Your Portfolio</CardTitle>
                    <CardDescription>
                      Manage your monthly donations and allocations
                    </CardDescription>
                  </div>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Organization
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {portfolioOrganizations.map((org) => (
                    <div key={org.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{org.name}</h3>
                        <p className="text-sm text-gray-500">{org.category}</p>
                        <p className="text-xs text-gray-400">Last update: {org.lastUpdate}</p>
                      </div>
                      <div className="text-right mr-4">
                        <div className="font-semibold text-gray-900">${org.monthlyAllocation}/month</div>
                        <div className="text-sm text-gray-500">{org.percentage}% of budget</div>
                        <div className="text-xs text-green-600">{org.efficiency}% efficient</div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm" className="text-red-600">Remove</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Recommendations & Recent Activity */}
          <div className="space-y-6">
            {/* AI Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI Recommendations</CardTitle>
                <CardDescription>
                  Optimize your impact with these suggestions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900 text-sm">Rebalance Portfolio</h4>
                    <p className="text-xs text-blue-700 mt-1">
                      Consider increasing allocation to Healthcare Heroes (96% efficiency)
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-900 text-sm">New Organization</h4>
                    <p className="text-xs text-green-700 mt-1">
                      "Climate Action Now" matches your interests (94% efficiency)
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View All Recommendations
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Monthly donation processed</p>
                      <p className="text-xs text-gray-500">$150 distributed to 4 organizations</p>
                      <p className="text-xs text-gray-400">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Thank you letter received</p>
                      <p className="text-xs text-gray-500">From Global Clean Water Initiative</p>
                      <p className="text-xs text-gray-400">1 week ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Challenge completed</p>
                      <p className="text-xs text-gray-500">Education for All Foundation reached goal</p>
                      <p className="text-xs text-gray-400">2 weeks ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
