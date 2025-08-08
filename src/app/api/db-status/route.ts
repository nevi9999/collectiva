import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Check if database environment variables exist
    const hasPostgres = process.env.POSTGRES_PRISMA_URL || process.env.DATABASE_URL;
    
    if (!hasPostgres) {
      return NextResponse.json({
        status: "no_database",
        message: "Database not configured. Please set up Vercel Postgres.",
        hasConnection: false
      })
    }

    // Try to connect to database
    try {
      const { prisma } = await import("@/lib/prisma")
      
      // Simple connection test
      await prisma.$queryRaw`SELECT 1 as test`
      
      // Get user count if possible
      const userCount = await prisma.user.count()
      
      return NextResponse.json({
        status: "connected",
        message: "Database connected successfully",
        hasConnection: true,
        userCount
      })
    } catch (dbError) {
      console.error("Database connection error:", dbError)
      return NextResponse.json({
        status: "connection_failed",
        message: "Database configured but connection failed",
        hasConnection: false,
        error: "Connection timeout or schema not migrated"
      })
    }
  } catch (error) {
    console.error("Database status error:", error)
    return NextResponse.json({
      status: "error",
      message: "Failed to check database status",
      hasConnection: false
    })
  }
}
