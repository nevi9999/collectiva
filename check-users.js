const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function checkUsers() {
  try {
    console.log('Checking database connection...')
    
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        password: true, // Check if password is stored
        createdAt: true
      }
    })
    
    console.log('Found users:', users.length)
    
    users.forEach((user, index) => {
      console.log(`\nUser ${index + 1}:`)
      console.log(`  ID: ${user.id}`)
      console.log(`  Email: ${user.email}`)
      console.log(`  Name: ${user.name}`)
      console.log(`  Role: ${user.role}`)
      console.log(`  Has Password: ${user.password ? 'Yes' : 'No'}`)
      console.log(`  Password Length: ${user.password ? user.password.length : 'N/A'}`)
      console.log(`  Created: ${user.createdAt}`)
    })
    
  } catch (error) {
    console.error('Database error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

checkUsers()
