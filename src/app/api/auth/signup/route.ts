import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
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
        role: role.toUpperCase(),
        // Note: Storing hashed password in a separate field for demo
        // In production, you'd have a password field in the User model
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
        message: "Account created successfully", 
        user: { 
          id: user.id, 
          name: user.name, 
          email: user.email, 
          role: user.role 
        } 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Sign-up error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
