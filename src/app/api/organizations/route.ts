import { NextResponse } from 'next/server';

// Mock database - in production this would be replaced with actual database queries
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
    founded: "2018",
    website: "https://cleanwater.org",
    verified: true,
    taxId: "12-3456789",
    address: {
      street: "123 Water Street",
      city: "Nairobi",
      country: "Kenya"
    },
    projects: [
      {
        id: 1,
        title: "Clean Water for Rural Kenya",
        description: "Building wells and water distribution systems",
        goal: 50000,
        raised: 34500,
        status: "active"
      }
    ],
    impactMetrics: {
      peopleServed: 12450,
      projectsCompleted: 23,
      countriesActive: 3
    }
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
    founded: "2020",
    website: "https://educationforall.org",
    verified: true,
    taxId: "98-7654321",
    address: {
      street: "456 Education Ave",
      city: "Guatemala City",
      country: "Guatemala"
    },
    projects: [
      {
        id: 2,
        title: "Emergency School Supplies",
        description: "Providing supplies for flood-affected schools",
        goal: 25000,
        raised: 18750,
        status: "urgent"
      }
    ],
    impactMetrics: {
      studentsEducated: 5600,
      schoolsBuilt: 12,
      teachersTrained: 145
    }
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
    founded: "2017",
    website: "https://foodsecurity.org",
    verified: true,
    taxId: "55-4433221",
    address: {
      street: "789 Agriculture Blvd",
      city: "Addis Ababa",
      country: "Ethiopia"
    },
    projects: [
      {
        id: 3,
        title: "Sustainable Farming Program",
        description: "Training farmers in drought-resistant techniques",
        goal: 75000,
        raised: 28500,
        status: "active"
      }
    ],
    impactMetrics: {
      farmersSupported: 2300,
      acresCultivated: 1200,
      mealsProvided: 450000
    }
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const location = searchParams.get('location');
  const verified = searchParams.get('verified');
  const limit = parseInt(searchParams.get('limit') || '10');
  const offset = parseInt(searchParams.get('offset') || '0');

  // Filter organizations based on query parameters
  let filteredOrgs = organizations;

  if (category && category !== 'all') {
    filteredOrgs = filteredOrgs.filter(org => 
      org.category.toLowerCase().includes(category.toLowerCase())
    );
  }

  if (location && location !== 'all') {
    filteredOrgs = filteredOrgs.filter(org => 
      org.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  if (verified === 'true') {
    filteredOrgs = filteredOrgs.filter(org => org.verified);
  }

  // Pagination
  const paginatedOrgs = filteredOrgs.slice(offset, offset + limit);

  return NextResponse.json({
    organizations: paginatedOrgs,
    total: filteredOrgs.length,
    page: Math.floor(offset / limit) + 1,
    totalPages: Math.ceil(filteredOrgs.length / limit)
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields for new organization
    const requiredFields = ['name', 'description', 'category', 'location', 'website', 'taxId'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Create new organization (in real app, this would save to database)
    const newOrganization = {
      id: organizations.length + 1,
      ...body,
      verified: false, // New organizations start unverified
      monthlyDonors: 0,
      totalRaised: 0,
      efficiency: 0,
      founded: new Date().getFullYear().toString(),
      projects: [],
      impactMetrics: {
        peopleServed: 0,
        projectsCompleted: 0,
        countriesActive: 1
      }
    };

    // Add to mock database
    organizations.push(newOrganization);

    return NextResponse.json({
      message: "Organization created successfully",
      organization: newOrganization
    }, { status: 201 });

  } catch (error) {
    return NextResponse.json(
      { error: "Invalid JSON format" },
      { status: 400 }
    );
  }
}
