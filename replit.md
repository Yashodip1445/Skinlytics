# replit.md

## Overview

SkinAI Care is an AI-powered skin analysis web application that allows users to upload photos of their skin and receive detailed analysis with personalized recommendations. The application combines modern web technologies with OpenAI's computer vision capabilities to provide instant skin condition assessments, confidence levels, and care recommendations. It features a responsive React frontend with shadcn/ui components, an Express.js backend with REST API endpoints, and includes an AI chatbot for additional skin-related questions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **State Management**: TanStack Query for server state management and API caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript with ESM modules for modern JavaScript features
- **API Structure**: RESTful endpoints for image analysis (`/api/analyze`) and chat functionality (`/api/chat`)
- **File Upload**: Multer middleware for handling multipart form data and image uploads
- **Error Handling**: Centralized error handling middleware with structured error responses

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema**: Defined in shared TypeScript files with Zod validation schemas
- **Storage Strategy**: In-memory storage fallback (MemStorage) for development, with database abstraction layer (IStorage interface)
- **Migration Management**: Drizzle Kit for database schema migrations and version control

### Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **User Management**: User registration and authentication system with hashed passwords
- **Authorization**: Role-based access control for protected endpoints

## External Dependencies

### Third-Party Services
- **OpenAI API**: GPT-5 model for skin analysis and chat responses
  - Image analysis using vision capabilities for skin condition detection
  - Chat completions for conversational AI assistant functionality
  - Structured JSON responses for consistent data handling

### Database Services
- **Neon Database**: PostgreSQL hosting service (@neondatabase/serverless)
- **Connection**: Serverless PostgreSQL driver for edge-compatible database access

### UI and Styling Libraries
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Type-safe variant styling system

### Development and Build Tools
- **Vite**: Fast build tool with hot module replacement
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer

### Additional Integrations
- **React Hook Form**: Form validation and state management with Zod resolvers
- **Date-fns**: Date manipulation and formatting utilities
- **CMDK**: Command palette component for enhanced user interactions