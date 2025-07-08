# API Documentation

## Authentication
### POST /api/auth/signup
- Create a new user (email/phone, password)
- Returns: JWT token, user profile

### POST /api/auth/login
- Authenticate user
- Returns: JWT token, user profile

### GET /api/auth/profile
- Fetch authenticated user profile
- Requires: JWT token

## Farm Management
### POST /api/farms
- Create a new farm (location, size)
- Requires: Auth

### GET /api/farms
- List all farms for the authenticated user
- Requires: Auth

### PUT /api/farms/:id
- Update farm details
- Requires: Auth

### DELETE /api/farms/:id
- Delete a farm
- Requires: Auth

## Crop Management
### POST /api/crops
- Add a crop (type, planting date)
- Requires: Auth

### GET /api/crops
- List crops for a farm
- Requires: Auth

### PUT /api/crops/:id
- Update crop progress
- Requires: Auth

## Recommendations
### GET /api/recommendations
- Fetch tasks and tips for a crop
- Requires: Auth

### POST /api/recommendations/complete
- Mark a recommendation/task as complete
- Requires: Auth

## Weather
### GET /api/weather
- Fetch weather for user's location (cached)
- Requires: Auth

## Admin (Protected)
### GET /api/admin/users
- List users and engagement metrics
- Requires: Admin Auth

### POST /api/admin/datasets
- Upload new agricultural data
- Requires: Admin Auth 