import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Target, Clock, Users, MapPin, TrendingUp } from "lucide-react";

// Mock challenges data
const challenges = [
  {
    id: 1,
    title: "Clean Water for 1,000 Families",
    organization: "Global Clean Water Initiative",
    description: "Help us build water wells and distribution systems in rural Kenya to provide clean, safe drinking water to 1,000 families.",
    category: "Water & Sanitation",
    location: "Rural Kenya",
    goal: 50000,
    raised: 34500,
    daysLeft: 23,
    supporters: 342,
    efficiency: 94,
    image: "/api/placeholder/400/200",
    urgent: false
  },
  {
    id: 2,
    title: "Emergency School Supplies",
    organization: "Education for All Foundation",
    description: "Provide essential school supplies including books, computers, and desks for 500 students affected by recent flooding.",
    category: "Education",
    location: "Philippines",
    goal: 25000,
    raised: 18750,
    daysLeft: 8,
    supporters: 156,
    efficiency: 91,
    image: "/api/placeholder/400/200",
    urgent: true
  },
  {
    id: 3,
    title: "Sustainable Farming Program",
    organization: "Food Security Network",
    description: "Train 200 farmers in sustainable agriculture techniques and provide seeds and tools for drought-resistant crops.",
    category: "Food & Agriculture",
    location: "Ethiopia",
    goal: 75000,
    raised: 28500,
    daysLeft: 45,
    supporters: 289,
    efficiency: 88,
    image: "/api/placeholder/400/200",
    urgent: false
  },
  {
    id: 4,
    title: "Mobile Health Clinic",
    organization: "Healthcare Heroes",
    description: "Fund a mobile health clinic to serve remote villages with basic medical care, vaccinations, and health education.",
    category: "Healthcare",
    location: "Democratic Republic of Congo",
    goal: 100000,
    raised: 82000,
    daysLeft: 12,
    supporters: 521,
    efficiency: 96,
    image: "/api/placeholder/400/200",
    urgent: true
  }
];

export default function ChallengesPage() {
  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.min((raised / goal) * 100, 100);
  };

  const getUrgencyColor = (daysLeft: number, urgent: boolean) => {
    if (urgent || daysLeft <= 10) return "text-red-600";
    if (daysLeft <= 30) return "text-yellow-600";
    return "text-green-600";
  };

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
              <Link href="/organizations" className="text-gray-500 hover:text-gray-900">
                Organizations
              </Link>
              <Link href="/challenges" className="text-blue-600 font-medium">
                Challenges
              </Link>
              <Link href="/about" className="text-gray-500 hover:text-gray-900">
                About
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/sign-in">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/sign-up">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Active Challenges
          </h1>
          <p className="text-lg text-gray-600">
            Support time-sensitive fundraising goals from verified organizations
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8 w-fit">
          <button className="px-4 py-2 rounded-md bg-white text-blue-600 font-medium shadow-sm">
            All Challenges
          </button>
          <button className="px-4 py-2 rounded-md text-gray-600 hover:text-gray-900">
            Urgent
          </button>
          <button className="px-4 py-2 rounded-md text-gray-600 hover:text-gray-900">
            Education
          </button>
          <button className="px-4 py-2 rounded-md text-gray-600 hover:text-gray-900">
            Healthcare
          </button>
          <button className="px-4 py-2 rounded-md text-gray-600 hover:text-gray-900">
            Water
          </button>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {challenges.map((challenge) => (
            <Card key={challenge.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              {/* Challenge Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center relative">
                <Target className="h-16 w-16 text-blue-600" />
                {challenge.urgent && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    URGENT
                  </div>
                )}
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <CardTitle className="text-xl mb-1">{challenge.title}</CardTitle>
                    <p className="text-sm text-blue-600 font-medium">{challenge.organization}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-green-600 font-semibold text-sm">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {challenge.efficiency}%
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  {challenge.location}
                </div>
                
                <CardDescription>{challenge.description}</CardDescription>
              </CardHeader>

              <CardContent>
                {/* Progress Section */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      ${challenge.raised.toLocaleString()} raised
                    </span>
                    <span className="text-sm text-gray-500">
                      of ${challenge.goal.toLocaleString()} goal
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${getProgressPercentage(challenge.raised, challenge.goal)}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-1" />
                      {challenge.supporters} supporters
                    </div>
                    <div className={`flex items-center font-medium ${getUrgencyColor(challenge.daysLeft, challenge.urgent)}`}>
                      <Clock className="h-4 w-4 mr-1" />
                      {challenge.daysLeft} days left
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button className="flex-1">Support Challenge</Button>
                  <Button variant="outline">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Challenges
          </Button>
        </div>

        {/* Create Challenge CTA */}
        <div className="bg-blue-600 rounded-lg p-8 mt-12 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Are you an organization?</h2>
          <p className="text-blue-100 mb-4">
            Create your own fundraising challenge and connect with passionate supporters
          </p>
          <Button variant="secondary" size="lg">
            Create a Challenge
          </Button>
        </div>
      </div>
    </div>
  );
}
