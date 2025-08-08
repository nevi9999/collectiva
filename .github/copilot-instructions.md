# Copilot Instructions for Collectiva

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
Collectiva is a solidarity fundraising platform that enables individuals to create portfolios of charitable organizations and support them through monthly subscriptions. The platform features AI-powered fund distribution, challenge tracking, and thank you management.

## Tech Stack
- **Frontend**: Next.js 15 with TypeScript, Tailwind CSS, React
- **Backend**: Next.js API routes
- **Database**: Consider PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js recommended
- **Payments**: Stripe integration
- **AI**: OpenAI API for fund distribution optimization

## Key Features to Implement
1. **User Management**: Registration, authentication, profile management
2. **Organization Management**: Registration, verification, profile management
3. **Portfolio System**: Users can create custom portfolios of organizations
4. **Subscription Management**: Monthly recurring payments
5. **AI Distribution**: Smart fund allocation based on efficiency metrics
6. **Challenge System**: Organizations can create funding challenges
7. **Thank You Management**: Automated thank you letters and photo sharing
8. **Analytics Dashboard**: Fund tracking and impact visualization

## Code Style Guidelines
- Use TypeScript for all new files
- Follow functional programming patterns with React hooks
- Use Tailwind CSS for styling
- Implement proper error handling and loading states
- Use Next.js App Router for routing
- Implement server-side rendering where appropriate
- Follow RESTful API design for backend endpoints

## Database Schema Considerations
- Users table with profiles and preferences
- Organizations table with verification status and efficiency metrics
- Portfolios table linking users to organizations
- Subscriptions table for recurring payments
- Challenges table for organization fundraising goals
- Donations table tracking all transactions
- Thank you messages and media management

## Security Best Practices
- Implement proper authentication and authorization
- Validate all input data
- Use environment variables for sensitive configuration
- Implement rate limiting for API endpoints
- Follow GDPR compliance for user data
