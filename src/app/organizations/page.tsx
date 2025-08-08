import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, MapPin, Users, Star, TrendingUp } from "lucide-react";

// Mock data for organizations - in real app this would come from database
const organizations = [
  {
    id: 1,
    name: "Global Clean Water Initiative",
    description: "Providing clean water access to communities in need across Africa and Asia",
    category: "Water & Sanitation",
    location: "Kenya, Uganda, Bangladesh",
    efficiency: 94,
    monthlyDonors: 1247,
    totalRaised: 284500,
    image: "/api/placeholder/400/200",
    verified: true
  },
  {
    id: 2,
    name: "Education for All Foundation",
    description: "Building schools and providing educational resources in underserved communities",
    category: "Education",
    location: "Guatemala, Peru, Philippines",
    efficiency: 91,
    monthlyDonors: 892,
    totalRaised: 156800,
    image: "/api/placeholder/400/200",
    verified: true
  },
  {
    id: 3,
    name: "Food Security Network",
    description: "Combating hunger through sustainable agriculture and food distribution programs",
    category: "Food & Agriculture",
    location: "Ethiopia, Haiti, Madagascar",
    efficiency: 88,
    monthlyDonors: 1534,
    totalRaised: 342100,
    image: "/api/placeholder/400/200",
    verified: true
  },
  {
    id: 4,
    name: "Healthcare Heroes",
    description: "Providing medical care and training healthcare workers in remote areas",
    category: "Healthcare",
    location: "Democratic Republic of Congo, Myanmar",
    efficiency: 96,
    monthlyDonors: 673,
    totalRaised: 198700,
    image: "/api/placeholder/400/200",
    verified: true
  }
];

export default function OrganizationsPage() {
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
              <Link href="/organizations" className="text-blue-600 font-medium">
                Organizations
              </Link>
              <Link href="/challenges" className="text-gray-500 hover:text-gray-900">
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
            Verified Organizations
          </h1>
          <p className="text-lg text-gray-600">
            Browse our curated list of verified charitable organizations and add them to your portfolio
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-wrap gap-4">
            <select className="border border-gray-300 rounded-md px-4 py-2">
              <option value="">All Categories</option>
              <option value="education">Education</option>
              <option value="healthcare">Healthcare</option>
              <option value="water">Water & Sanitation</option>
              <option value="food">Food & Agriculture</option>
              <option value="environment">Environment</option>
            </select>
            
            <select className="border border-gray-300 rounded-md px-4 py-2">
              <option value="">All Locations</option>
              <option value="africa">Africa</option>
              <option value="asia">Asia</option>
              <option value="latin-america">Latin America</option>
            </select>
            
            <select className="border border-gray-300 rounded-md px-4 py-2">
              <option value="efficiency">Sort by Efficiency</option>
              <option value="donors">Most Donors</option>
              <option value="raised">Most Raised</option>
            </select>
          </div>
        </div>

        {/* Organizations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {organizations.map((org) => (
            <Card key={org.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              {/* Organization Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <Heart className="h-16 w-16 text-blue-600" />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{org.name}</CardTitle>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {org.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-green-600 font-semibold">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {org.efficiency}% efficient
                    </div>
                  </div>
                </div>
                <CardDescription>{org.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm">
                    <div className="flex items-center text-gray-600 mb-1">
                      <Users className="h-4 w-4 mr-1" />
                      {org.monthlyDonors.toLocaleString()} monthly donors
                    </div>
                    <div className="font-semibold text-gray-900">
                      ${org.totalRaised.toLocaleString()} total raised
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">Verified</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1">Add to Portfolio</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Organizations
          </Button>
        </div>
      </div>
    </div>
  );
}
