const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function fixUserPassword() {
  try {
    const email = 'vidalakis.nek@gmail.com'
    const newPassword = 'test123456' // Change this to your desired password
    
    console.log('Updating password for user:', email)
    
    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 12)
    
    // Update the user with the new password
    const updatedUser = await prisma.user.update({
      where: { email },
      data: { password: hashedPassword }
    })
    
    console.log('Password updated successfully!')
    console.log('You can now sign in with:')
    console.log('Email:', email)
    console.log('Password:', newPassword)
    
  } catch (error) {
    console.error('Error updating password:', error)
  } finally {
    await prisma.$disconnect()
  }
}

async function deleteUser() {
  try {
    const email = 'vidalakis.nek@gmail.com'
    
    console.log('Deleting user:', email)
    
    // Delete user (this will cascade delete profile and portfolio)
    await prisma.user.delete({
      where: { email }
    })
    
    console.log('User deleted successfully!')
    console.log('You can now create a new account with the sign-up form.')
    
  } catch (error) {
    console.error('Error deleting user:', error)
  } finally {
    await prisma.$disconnect()
  }
}

// Get the action from command line argument
const action = process.argv[2]

if (action === 'fix-password') {
  fixUserPassword()
} else if (action === 'delete-user') {
  deleteUser()
} else {
  console.log('Usage:')
  console.log('  node fix-auth.js fix-password   - Add password to existing user')
  console.log('  node fix-auth.js delete-user    - Delete user (so you can create new one)')
}
