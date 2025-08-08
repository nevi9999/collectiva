// Database test script
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function testDatabase() {
  try {
    console.log('🔍 Testing database connection...')
    
    // Test basic connection
    await prisma.$connect()
    console.log('✅ Database connected successfully!')
    
    // Test query
    const result = await prisma.$queryRaw`SELECT 1 as test, NOW() as current_time`
    console.log('✅ Query successful:', result)
    
    // Check table counts
    const userCount = await prisma.user.count()
    const orgCount = await prisma.organization.count()
    
    console.log(`📊 Database stats:`)
    console.log(`   - Users: ${userCount}`)
    console.log(`   - Organizations: ${orgCount}`)
    
    // List all tables
    const tables = await prisma.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      ORDER BY table_name
    `
    console.log('📋 Tables in database:', tables)
    
  } catch (error) {
    console.error('❌ Database test failed:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testDatabase()
