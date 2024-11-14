
# Zero Budget Full-Stack Web Application

This is a full-stack web application built with **Next.js** for the frontend, **Tailwind CSS** for styling, **GraphQL** via Apollo Client for data management, and **Node.js** for the backend API. The goal of this project is to deliver a responsive, feature-rich web application while maintaining a zero-budget approach by leveraging free tools and services.

## Tech Stack

- **Frontend**: Next.js (React - TypeScript)
- **Styling**: Tailwind CSS with plugins for enhanced design capabilities
- **Backend**: Node.js (GraphQL API)
- **Authentication**: Auth0 and NextAuth for secure user authentication
- **State Management**: Apollo Client for managing GraphQL queries and mutations
- **Testing**: Jest and React Testing Library for unit and integration testing
- **Tooling**: ESLint, Prettier, Husky, and TypeScript for code quality and formatting
- **Hosting**: Free tier services (Netlify, Vercel, or similar)

## Features

- **Full-Stack Integration**: Built with Next.js on the frontend and a Node.js backend, with API integration for seamless data communication.
- **GraphQL API**: Utilizes GraphQL with Apollo Client for efficient data fetching and real-time updates.
- **Responsive Design**: Styled with Tailwind CSS for an optimized experience across mobile, tablet, and desktop devices.
- **Authentication**: Integrated with Auth0 and NextAuth to handle user authentication and authorization.
- **Zero-Budget Approach**: Utilizes free-tier cloud services and open-source libraries to achieve a cost-effective solution.
- **Testing**: Unit and integration tests with Jest and React Testing Library to ensure reliability.
- **Code Quality**: Enforced with ESLint, Prettier, and Husky for consistent code style and automated linting on commits.

## Directory Structure

```
my-project/
├── public/              # Public assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Next.js pages
│   ├── styles/          # Tailwind CSS configurations and global styles
│   ├── utils/           # Utility functions and helpers
│   ├── api/             # GraphQL API routes and functions
│   └── hooks/           # Custom React hooks
├── .eslintrc.json       # ESLint configuration
├── jest.config.ts       # Jest configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Installation and Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/zero-budget.git
   cd zero-budget
   ```

2. **Install dependencies**:

   ```bash
  yarn
   ```

3. **Set up environment variables**:

   Create a `.env.local` file and add the necessary environment variables for Auth0, NextAuth, and other services.
   An `env.local.example` file is provided as a template.

4. **Run the development server**:

   ```bash
   yarn dev
   ```

5. **Build for production**:

   ```bash
   yarn build
   ```

6. **Run tests**:

   ```bash
   yarn test
   ```

## Environment Variables

In the `.env.local` file, include the following variables:

```plaintext
AUTH0_DOMAIN=your-auth0-domain
AUTH0_CLIENT_ID=your-auth0-client-id
AUTH0_CLIENT_SECRET=your-auth0-client-secret
AUTH0_SECRET=your-nextauth-secret
NEXT_PUBLIC_GRAPHQL_API=your-graphql-api-endpoint
```

## Scripts

- **`yarn dev`**: Starts the development server on `localhost:3000`.
- **`yarnbuild`**: Builds the application for production.
- **`yarn start`**: Starts the production server.
- **`yarn lint`**: Lints the codebase using ESLint.
- **`yarn test`**: Runs the test suite with Jest.

## Dependencies

- **@apollo/client**: GraphQL client for React.
- **@auth0/auth0-react** and **@auth0/nextjs-auth0**: Libraries for integrating Auth0 authentication with Next.js.
- **@tailwindcss** plugins: Additional utilities for responsive design, form styling, typography, and line clamping.
- **react-toastify**: Library for displaying toast notifications.

## DevDependencies

- **Jest and Testing Library**: For unit and integration testing.
- **TypeScript**: Strongly typed JavaScript for better code reliability.
- **ESLint and Prettier**: Code quality and formatting tools.
- **Husky**: Git hooks for enforcing code standards on commit.

## Features in Progress

This project is still in development, and more features and optimizations will be added, including:

- Additional custom UI components
- Improved test coverage
- Enhanced responsive design with Tailwind utilities
- Documentation and contribution guidelines

---

Feel free to contribute by opening issues or submitting pull requests. All contributions and suggestions are welcome!
```
