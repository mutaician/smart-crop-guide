# Database Schemas

## Users
- id: UUID (PK)
- email: String (unique)
- phone: String (unique, nullable)
- name: String
- language: String (default: "en")
- role: Enum ("user", "admin")
- created_at: Timestamp

## Farms
- id: UUID (PK)
- user_id: UUID (FK, Users)
- location: JSON (GPS or region)
- size: Float (acres)
- soil_type: String (nullable)

## Crops
- id: UUID (PK)
- farm_id: UUID (FK, Farms)
- type: String (e.g., "maize")
- planting_date: Date
- stage: String (e.g., "germination")
- progress: JSON (tasks, metrics)

## Recommendations
- id: UUID (PK)
- crop_id: UUID (FK, Crops)
- type: String (e.g., "irrigation")
- details: JSON (task, schedule)
- status: String (e.g., "pending", "completed")
- created_at: Timestamp

## WeatherCache
- id: UUID (PK)
- location: JSON
- data: JSON (forecast)
- updated_at: Timestamp 