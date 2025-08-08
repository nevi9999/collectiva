import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, role } = await req.json()

    // Validate required fields
    if (!name || !email || !password || !role) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Validate password strength
    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters long" },
        { status: 400 }
      )
    }

    // Check if we have database connection
    const hasDatabase = process.env.POSTGRES_PRISMA_URL || process.env.DATABASE_URL;
    
    if (hasDatabase) {
      // Production: Use real database
      try {
        const { prisma } = await import("@/lib/prisma")
        
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
          where: { email }
        })

        if (existingUser) {
          return NextResponse.json(
            { error: "User with this email already exists" },
            { status: 400 }
          )
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12)

        // Create user
        const user = await prisma.user.create({
          data: {
            name,
            email,
            password: hashedPassword,
            role: role.toUpperCase(),
          },
        })

        // Create user profile
        await prisma.userProfile.create({
          data: {
            userId: user.id,
          },
        })

        // If user is a donor, create a default portfolio
        if (role.toUpperCase() === "DONOR") {
          await prisma.portfolio.create({
            data: {
              userId: user.id,
              name: "My Portfolio",
              description: "My default portfolio of organizations",
              isDefault: true,
            },
          })
        }

        return NextResponse.json(
          { 
            message: "Account created successfully!", 
            user: { 
              id: user.id, 
              name: user.name, 
              email: user.email, 
              role: user.role 
            } 
          },
          { status: 201 }
        )
      } catch (dbError) {
        console.error("Database error:", dbError)
        return NextResponse.json(
          { error: "Database connection failed. Please try again." },
          { status: 500 }
        )
      }
    } else {
      // Development/Demo: Return success without database
      return NextResponse.json(
        { 
          message: "Account registration received! Database will be connected after Vercel Postgres setup.", 
          user: { 
            name, 
            email, 
            role 
          } 
        },
        { status: 201 }
      )
    }
  } catch (error) {
    console.error("Sign-up error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
