# Backend Operations

## Overview
The backend is powered by Supabase (PostgreSQL, Auth, Edge Functions) and Next.js API routes. It manages authentication, farm/crop data, recommendations, weather integration, and admin analytics.

## API Endpoints

### Authentication (/api/auth/*)
- POST /api/auth/signup: Create user (email/phone, password)
- POST /api/auth/login: Authenticate and return JWT
- GET /api/auth/profile: Fetch user profile (protected)

### Farm Management (/api/farms/*)
- POST /api/farms: Create farm (location, size)
- GET /api/farms: List user's farms
- PUT /api/farms/:id: Update farm details
- DELETE /api/farms/:id: Delete farm

### Crop Management (/api/crops/*)
- POST /api/crops: Add crop (type, planting date)
- GET /api/crops: List crops for a farm
- PUT /api/crops/:id: Update crop progress

### Recommendations (/api/recommendations/*)
- GET /api/recommendations: Fetch tasks and tips for a crop
- POST /api/recommendations/complete: Mark task as done

### Weather (/api/weather/*)
- GET /api/weather: Fetch weather for user's location (cached)

### Admin (/api/admin/*, protected)
- GET /api/admin/users: List users and engagement metrics
- POST /api/admin/datasets: Upload new agricultural data

## Data Flow
- User interacts with Next.js frontend
- API routes handle requests, validate with Zod, and interact with Supabase
- Supabase Edge Functions run AI inference and data processing
- Weather data fetched from OpenWeatherMap, cached in Supabase
- Recommendations generated and stored in Supabase

## Backend Logic
- Authentication via Supabase Auth (JWT, OAuth)
- Role-based access control (user/admin)
- Data validation and error handling
- Logging and analytics via Supabase
- Offline sync and caching for PWA support 