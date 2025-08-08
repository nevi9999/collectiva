import { NextResponse } from 'next/server';

// Mock user portfolio data - in production this would come from database
const userPortfolios = {
  "user123": {
    userId: "user123",
    monthlyBudget: 150,
    organizations: [
      {
        organizationId: 1,
        allocation: 45,
        percentage: 30,
        dateAdded: "2024-01-15",
        customNote: "Love their transparency in water projects"
      },
      {
        organizationId: 2,
        allocation: 37.5,
        percentage: 25,
        dateAdded: "2024-02-01",
        customNote: "Education is crucial for breaking poverty cycles"
      },
      {
        organizationId: 3,
        allocation: 45,
        percentage: 30,
        dateAdded: "2024-02-15",
        customNote: "Sustainable agriculture approach is innovative"
      },
      {
        organizationId: 4,
        allocation: 22.5,
        percentage: 15,
        dateAdded: "2024-03-01",
        customNote: "Mobile healthcare solutions for remote areas"
      }
    ],
    preferences: {
      autoRebalance: true,
      impactReports: true,
      emailUpdates: true,
      categories: ["Water & Sanitation", "Education", "Healthcare", "Food & Agriculture"]
    },
    donationHistory: [
      {
        id: 1,
        amount: 150,
        date: "2024-07-01",
        status: "completed",
        organizations: [
          { id: 1, amount: 45 },
          { id: 2, amount: 37.5 },
          { id: 3, amount: 45 },
          { id: 4, amount: 22.5 }
        ]
      },
      {
        id: 2,
        amount: 150,
        date: "2024-08-01",
        status: "completed",
        organizations: [
          { id: 1, amount: 45 },
          { id: 2, amount: 37.5 },
          { id: 3, amount: 45 },
          { id: 4, amount: 22.5 }
        ]
      }
    ],
    totalDonated: 1800,
    impactScore: 92
  }
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId') || 'user123'; // In real app, get from auth

  const portfolio = userPortfolios[userId as keyof typeof userPortfolios];
  
  if (!portfolio) {
    return NextResponse.json(
      { error: "Portfolio not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    portfolio,
    recommendations: await getAIRecommendations(portfolio)
  });
}

export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId') || 'user123';
    const body = await request.json();

    if (!userPortfolios[userId as keyof typeof userPortfolios]) {
      return NextResponse.json(
        { error: "Portfolio not found" },
        { status: 404 }
      );
    }

    // Update portfolio
    const updatedPortfolio = {
      ...userPortfolios[userId as keyof typeof userPortfolios],
      ...body,
      lastUpdated: new Date().toISOString()
    };

    userPortfolios[userId as keyof typeof userPortfolios] = updatedPortfolio;

    return NextResponse.json({
      message: "Portfolio updated successfully",
      portfolio: updatedPortfolio
    });

  } catch (error) {
    return NextResponse.json(
      { error: "Invalid JSON format" },
      { status: 400 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId') || 'user123';
    const body = await request.json();
    const { action, organizationId, allocation, percentage } = body;

    const portfolio = userPortfolios[userId as keyof typeof userPortfolios];
    
    if (!portfolio) {
      return NextResponse.json(
        { error: "Portfolio not found" },
        { status: 404 }
      );
    }

    switch (action) {
      case 'add_organization':
        // Check if organization already exists in portfolio
        if (portfolio.organizations.find(org => org.organizationId === organizationId)) {
          return NextResponse.json(
            { error: "Organization already in portfolio" },
            { status: 400 }
          );
        }

        portfolio.organizations.push({
          organizationId,
          allocation: allocation || 0,
          percentage: percentage || 0,
          dateAdded: new Date().toISOString(),
          customNote: ""
        });
        break;

      case 'remove_organization':
        portfolio.organizations = portfolio.organizations.filter(
          org => org.organizationId !== organizationId
        );
        break;

      case 'rebalance':
        // AI-powered rebalancing logic would go here
        await rebalancePortfolio(portfolio);
        break;

      default:
        return NextResponse.json(
          { error: "Invalid action" },
          { status: 400 }
        );
    }

    return NextResponse.json({
      message: `Portfolio ${action} completed successfully`,
      portfolio
    });

  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request format" },
      { status: 400 }
    );
  }
}

// AI recommendation simulation
async function getAIRecommendations(portfolio: any) {
  return [
    {
      type: "rebalance",
      title: "Optimize Portfolio Balance",
      description: "Consider increasing allocation to Healthcare Heroes (96% efficiency)",
      impact: "Could increase overall impact by 3.2%",
      action: "rebalance_suggestion"
    },
    {
      type: "new_organization",
      title: "New Organization Match",
      description: "Climate Action Now matches your interests and has 94% efficiency",
      impact: "Aligns with your environmental preferences",
      organizationId: 5,
      action: "add_organization"
    },
    {
      type: "efficiency_alert",
      title: "Efficiency Update",
      description: "Food Security Network improved efficiency to 90%",
      impact: "Your existing allocation is now more effective",
      action: "acknowledge"
    }
  ];
}

// Portfolio rebalancing simulation
async function rebalancePortfolio(portfolio: any) {
  // Simulate AI-driven rebalancing based on efficiency scores
  const totalBudget = portfolio.monthlyBudget;
  
  // Simple efficiency-based rebalancing
  portfolio.organizations.forEach((org: any, index: number) => {
    const efficiencyWeights = [0.94, 0.91, 0.88, 0.96]; // Mock efficiency scores
    const weight = efficiencyWeights[index] || 0.85;
    org.percentage = Math.round((weight / efficiencyWeights.reduce((a, b) => a + b, 0)) * 100);
    org.allocation = (totalBudget * org.percentage) / 100;
  });
  
  return portfolio;
}
