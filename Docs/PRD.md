Product Requirements Document (PRD): Smart Crop Guide (Enhanced)
1. Product Overview
1.1 Product Name
Smart Crop Guide
1.2 Product Description
Smart Crop Guide is a web-based, AI-driven platform designed to empower Kenyan smallholder farmers with real-time, data-backed cultivation support. By integrating machine learning models, weather APIs, and agricultural datasets, the platform delivers personalized recommendations to optimize crop yields, reduce resource waste, and mitigate losses due to unpredictable weather or poor practices. Built with Next.js, TailwindCSS, Shadcn, and Supabase, the application is mobile-friendly, accessible in low-bandwidth environments, and supports offline capabilities for rural use.
1.3 Problem Statement
Kenyan farmers often rely on traditional guesswork, leading to inefficiencies, wasted resources (water, fertilizer), and smaller harvests. Unpredictable weather exacerbates these challenges, while limited access to modern tools hinders informed decision-making. Smart Crop Guide replaces guesswork with actionable, AI-driven insights, enabling farmers to increase yields, reduce costs, and improve livelihoods.
1.4 Objectives

Maximize Yields with Minimal Resources: Optimize water, fertilizer, and labor to increase harvests while lowering costs.
Minimize Crop Losses: Use predictive analytics to detect issues (e.g., pests, nutrient deficiencies) early and provide mitigation strategies.
Deliver Actionable Guidance: Provide daily/weekly tasks (e.g., "Water maize today") tailored to each farmer’s crops and local conditions.
Enable Real-Time Insights: Offer dynamic recommendations based on live weather, soil, and crop data.
Ensure Accessibility: Create a scalable, cost-effective platform optimized for low-bandwidth and offline use, with a simple interface for non-tech-savvy users.

1.5 Target Audience

Primary: Smallholder farmers in Kenya, particularly those with limited access to modern agricultural tools.
Secondary: Agricultural cooperatives, extension officers, and NGOs supporting farmers.
Future Expansion: Farmers in other developing regions (e.g., Uganda, Tanzania) with similar challenges.

1.6 Value Proposition

Replaces guesswork with data-driven decisions, increasing crop yields by up to 20% (based on pilot goals).
Saves resources (water, fertilizer) by providing precise schedules, reducing costs.
Accessible on low-cost smartphones, even in areas with poor internet.
Scalable and adaptable to local crops, soils, and weather patterns.

2. Functional Requirements
2.1 User Interface Features
2.1.1 Dashboard

Overview: A personalized homepage displaying:
Crop calendar (timeline view) with milestones (planting, fertilizing, harvesting).
Daily/weekly action plan (e.g., "Water maize: 10L/acre today").
AI-generated tips (e.g., "Apply nitrogen fertilizer this week due to soil data").
Weather forecast for the next 7 days, with irrigation implications.


Interactivity: Clickable tasks with completion tracking (e.g., checkbox to mark "Watered").
Visualization: Progress bars for crop stages (e.g., germination, flowering).

2.1.2 Crop Management

Input Fields: Allow users to add:
Crop type (e.g., maize, beans, potatoes).
Planting date and expected harvest date.
Farm size (acres or hectares).
Soil type (optional, with dropdown based on Kenyan soil data).


Progress Tracking: Display crop stage (e.g., vegetative, reproductive) and historical data (e.g., past yields).
Edit/Delete: Enable users to update or remove crop entries.

2.1.3 Notifications

In-App Alerts: Display urgent tasks (e.g., "Pest risk detected: Inspect maize").
Push Notifications: Send reminders via browser push (if permitted) for critical tasks.
Email/SMS (Future): Optional notifications for users without smartphones.

2.1.4 Settings

Preferences:
Language: English, Swahili (with extensibility for other local languages).
Notification frequency: Daily, weekly, or urgent only.
Units: Metric (liters, hectares) or local (e.g., jerrycans, acres).


Account Management: Update email, phone, or password.
Offline Mode: Toggle to cache data for offline use.

2.1.5 Onboarding

Registration: Sign up via email, phone, or Google OAuth (via Supabase Auth).
Setup Wizard: Step-by-step form to input:
Farm location (GPS or region selection).
Crop details (type, planting date).
Optional: Soil test results (manual input or defaults).


Tutorial: Interactive walkthrough or short video (hosted on Supabase Storage) explaining key features.

2.2 AI-Driven Features
2.2.1 Crop Yield Prediction

Functionality: Predict potential yields based on:
Crop type, planting date, and farm size.
Historical weather and yield data.
Soil characteristics (from public datasets or user input).


Output: Display estimated yield (e.g., "2.5 tons/acre") with confidence intervals.

2.2.2 Irrigation and Fertilization Schedules

Functionality: Generate schedules based on:
Weather forecasts (e.g., rainfall probability).
Crop water requirements by growth stage.
Soil moisture retention (derived from datasets).


Output: Tasks like "Irrigate 10L/acre on July 10" or "Apply 50kg/ha of NPK fertilizer on July 15."

2.2.3 Early Problem Detection

Functionality: Identify risks using:
Weather patterns (e.g., prolonged drought, heavy rain).
Crop data (e.g., growth anomalies).
Historical pest/disease data.


Output: Alerts like "High risk of aphid infestation: Apply neem oil."

2.2.4 Personalized Recommendations

Functionality: Tailor advice to:
User’s crop portfolio and farm size.
Local weather and soil conditions.
Resource availability (e.g., limited water).


Output: Tips like "Switch to drip irrigation for beans to save 30% water."

2.3 Data Integration
2.3.1 Weather API

Provider: OpenWeatherMap (free tier for MVP, upgrade for scale).
Data: Temperature, rainfall, humidity, wind speed (daily and 7-day forecast).
Usage: Feed weather data into AI models for irrigation and risk predictions.

2.3.2 Agricultural Datasets

Sources: Public Kenyan datasets (e.g., KALRO soil data, Ministry of Agriculture crop yields).
Data Types: Soil properties (pH, nutrients), crop requirements, historical yields.
Usage: Train AI models and provide default soil data for users without tests.

2.3.3 User Data

Storage: Supabase PostgreSQL database.
Data Types: Farmer profiles, crop details, task completion history.
Usage: Personalize recommendations and track progress.

2.4 Reporting and Analytics
2.4.1 Crop Performance Reports

Content:
Yield estimates vs. actual yields (user-reported).
Resource usage (water, fertilizer) over time.
Task completion rates.


Format: Downloadable PDF or in-app charts (using Chart.js).

2.4.2 Admin Analytics

Content:
User engagement (e.g., logins, tasks completed).
Feature usage (e.g., most popular crops, recommendations viewed).
Error logs (e.g., API failures).


Access: Admin dashboard (protected by RBAC).

3. Non-Functional Requirements
3.1 Performance

Page Load: <3 seconds on 3G connections (optimized with Next.js SSR and image compression).
AI Inference: <1 second for recommendation generation.
Concurrency: Support 10,000 concurrent users during peak times.

3.2 Scalability

Infrastructure: Use Vercel for frontend and Supabase for backend to auto-scale.
Database: Optimize queries with indexes and caching (Supabase Edge Functions).
AI Models: Deploy lightweight models for inference, with offline training.

3.3 Security

Authentication: Supabase Auth with JWT tokens and OAuth.
Data Encryption: HTTPS for transit, Supabase encryption at rest.
RBAC: Admin vs. user roles with restricted endpoints.
Compliance: Adhere to GDPR and Kenya Data Protection Act.

3.4 Usability

Accessibility: WCAG 2.1 compliance (e.g., high-contrast mode, screen reader support).
Intuitiveness: Minimal clicks to complete tasks (e.g., one-tap task completion).
Localization: Support English and Swahili, with extensible i18n framework.

3.5 Reliability

Uptime: 99.9% for web app and APIs (monitored via Vercel and Supabase).
Error Handling: Graceful fallbacks for API failures (e.g., cached weather data).
Logging: Centralized logs in Supabase for debugging.

3.6 Offline Capabilities

Caching: Store crop calendar, tasks, and recommendations in browser cache (Next.js PWA).
Sync: Queue updates (e.g., task completions) and sync when online.
Fallback: Use default recommendations if weather API fails.

4. Technical Requirements
4.1 Technology Stack
4.1.1 Frontend

Next.js (v14): For SSR, SSG, and PWA features to optimize performance and offline use.
TailwindCSS (v3): For responsive, utility-first styling.
Shadcn: For accessible UI components (e.g., buttons, modals, forms).
React Query: For data fetching and caching (e.g., weather, recommendations).
i18n: Next-intl for multilingual support.
Chart.js: For crop performance visualizations.

4.1.2 Backend

Supabase:
Authentication: Email, phone, and Google OAuth with JWT.
Database: PostgreSQL for structured data (users, crops, recommendations).
Realtime: WebSocket for live notifications and data sync.
Storage: Store user-uploaded files (e.g., farm photos, future feature).
Edge Functions: Serverless functions for lightweight API logic.


Next.js API Routes: Handle serverless endpoints for non-Supabase logic.
OpenWeatherMap API: Fetch weather data via REST API.

4.1.3 AI/ML

Python: Scikit-learn for basic models, TensorFlow for complex models.
Training: Offline training on public datasets (e.g., Kenyan soil data).
Inference: Deploy models via Supabase Edge Functions or Vercel Serverless.
Data Pipeline: ETL scripts to clean and preprocess agricultural datasets.

4.1.4 Deployment

Vercel: Host Next.js app with auto-scaling and domain management.
Supabase: Host database, auth, and storage with built-in monitoring.
CI/CD: GitHub Actions for automated testing and deployment.

4.2 Backend Architecture
4.2.1 API Endpoints

Authentication (/api/auth/*):
POST /api/auth/signup: Create user (email/phone, password).
POST /api/auth/login: Authenticate and return JWT.
GET /api/auth/profile: Fetch user profile (protected).


Farm Management (/api/farms/*):
POST /api/farms: Create farm (location, size).
GET /api/farms: List user’s farms.
PUT /api/farms/:id: Update farm details.
DELETE /api/farms/:id: Delete farm.


Crop Management (/api/crops/*):
POST /api/crops: Add crop (type, planting date).
GET /api/crops: List crops for a farm.
PUT /api/crops/:id: Update crop progress.


Recommendations (/api/recommendations/*):
GET /api/recommendations: Fetch tasks and tips for a crop.
POST /api/recommendations/complete: Mark task as done.


Weather (/api/weather/*):
GET /api/weather: Fetch weather for user’s location (cached).


Admin (/api/admin/*, protected):
GET /api/admin/users: List users and engagement metrics.
POST /api/admin/datasets: Upload new agricultural data.



4.2.2 Database Schema

Users:
id: UUID (PK)
email: String (unique)
phone: String (unique, nullable)
name: String
language: String (default: "en")
role: Enum ("user", "admin")
created_at: Timestamp


Farms:
id: UUID (PK)
user_id: UUID (FK, Users)
location: JSON (GPS or region)
size: Float (acres)
soil_type: String (nullable)


Crops:
id: UUID (PK)
farm_id: UUID (FK, Farms)
type: String (e.g., "maize")
planting_date: Date
stage: String (e.g., "germination")
progress: JSON (tasks, metrics)


Recommendations:
id: UUID (PK)
crop_id: UUID (FK, Crops)
type: String (e.g., "irrigation")
details: JSON (task, schedule)
status: String (e.g., "pending", "completed")
created_at: Timestamp


WeatherCache:
id: UUID (PK)
location: JSON
data: JSON (forecast)
updated_at: Timestamp



4.2.3 AI Pipeline

Training:
Run Python scripts on a dedicated server (e.g., AWS EC2 for MVP).
Use Scikit-learn for regression models (yield prediction).
Use TensorFlow for neural networks (risk detection).
Inputs: Kenyan soil data, historical yields, weather patterns.


Inference:
Convert models to ONNX for lightweight deployment.
Host on Supabase Edge Functions or Vercel.
Inputs: User crop data, real-time weather, soil defaults.
Outputs: JSON with predictions and recommendations.


Scheduling:
Cron job (via Supabase) to refresh recommendations daily.
Cache results in database to reduce inference calls.



4.2.4 Error Handling

API Failures: Return fallback data (e.g., cached weather).
Validation: Validate inputs with Zod in Next.js API routes.
Logging: Use Supabase Logs for errors and Supabase Analytics for usage.

4.3 System Architecture Diagram
+-------------------+       +-------------------+       +-------------------+
|   Farmer Client   | <-----> |   Next.js App    | <-----> |   Supabase       |
| - Next.js (PWA)   |  HTTPS  | - SSR/SSG         |  REST/  | - Auth           |
| - TailwindCSS     |         | - API Routes      |  WebSocket  | - PostgreSQL |
| - Shadcn UI       |         | - React Query     |         | - Realtime       |
| - Offline Cache   |         +-------------------+         | - Edge Functions |
+-------------------+                                       | - Storage        |
                                                           +-------------------+
                            |                              |
                            v                              v
+-------------------+       |                              |
|  OpenWeatherMap  |       |                              |
| - Weather API      | <-----+                              |
+-------------------+                                       |
                                                           |
+-------------------+                                       |
|  AI Pipeline      |                                       |
| - Python (offline)| <------------------------------+     |
| - Scikit-learn    |                                 |     |
| - TensorFlow      |                                 |     |
+-------------------+                                 |     |
                                                     v     v
                                              +-------------------+
                                              |  Public Datasets |
                                              | - Kenyan Soil Data    |
                                              | - Crop Yields   |
                                              +-------------------+

5. Design System
5.1 Overview
The design system ensures a consistent, accessible, and farmer-friendly UI, built with TailwindCSS and Shadcn components. It prioritizes simplicity, readability, and performance for low-bandwidth environments.
5.2 Typography

Font Family: Roboto (via Google Fonts, fallback: sans-serif).
Reason: Open-source, legible, supports multiple languages.


Scales:
Heading 1: 24px, 700 (page titles, e.g., "Dashboard").
Heading 2: 20px, 600 (section titles, e.g., "Crop Tasks").
Body: 3**: 16px, 400 (default text).
Caption: 14px, 400 (secondary text, e.g., timestamps).


Line Height: 1.5 for body, 1.4 for headings.
Colors:
Text Primary: #2D2D2332 (dark gray for contrast).
Text Secondary: #6B6B6B66 (light gray for captions).



Colors
5.2.3 Color Palette

Primary: #219653 (green, farming, growth)
Hover: #1E8747
Accent: #F9A825 (yellow, alerts, harvest)
Hover: #E09120


Neutral:
Background: #FFFFFF (white, clean)
Card Background: #F5F9F5 (light gray, cards).
Border: #E0E7E0 (subtle borders).


Error: #EF4444 (red, errors).
Success: #34D058 (green, task completion).
Contrast Ratio: Ensure ≥4.5:1 for text (WCAG 2.1).

5.1 Spacing

Base Unit: 4px (Tailwind’s default).
Scale:
Small: 4px (tight gaps, e.g., between icon and text).
Medium: 8px (default padding in buttons).
Large: 16px (section gaps).
Extra Large: 32px (page margins).


Layout:
Container Width: Max 768px (mobile-first, fits smartphones).
Margins: 16px on sides for mobile, 32px on desktop.



Components (Shadcn)
5.4 Components

Buttons:
Primary: Green background, white text, rounded (4px), hover effect.
Secondary: Outline with green border, transparent background.
Sizes: Small (32px height), Medium (40px).
Example: btn btn-primary bg-green-600 text-white px-4 py-2 rounded-md.


Cards:
Structure: White background, subtle shadow, 8px padding, 4px border radius.
Use: Display crop tasks, recommendations.
Example: card bg-white shadow-sm p-4 rounded-md.


Forms:
Inputs: Bordered gray, 40px height, focus outline in green.
Labels: Above inputs, 14px, bold.
Validation: Red text below for errors.
Example: input border-gray-300 focus:ring-green-500.


Dropdowns:
Style: Match inputs, with chevron-down icon.
Use: Crop type, soil type selection.


Modals:
Structure: Centered, white background, overlay (rgba(0,0,0,0,0.5)).
Use: Onboarding steps, confirmations.


Progress Bars:
Style: Green fill, gray track, 8px height.
Use: Crop stage visualization.


Icons:
Source: Lucide-icons (lightweight, customizable).
Size: 16px (default), 24px (emphasis).
Use: Task types (e.g., water drop for irrigation).



5.1.5 Themes

Light Theme: Default, white background for readability in sunlight.
Dark Theme (Optional): Future feature, using Tailwind’s dark mode (e.g., dark:bg-gray-900).
High-Contrast Mode: Toggle for accessibility, using bolder colors and borders.

5.1.6 Responsive Design

Breakpoints:
Mobile: <768px (stacked layouts, touch-friendly buttons).
Tablet: 768px–1024px (grid layouts for dashboards).
Desktop: >1024px (optional, minimal changes).


Approach: Mobile-first with Tailwind’s responsive utilities (e.g., sm:grid-cols-2).

5.1.7 Accessibility

Keyboard Navigation: Tab focus for all interactive elements.
Screen Readers: ARIA labels (e.g., aria-label="Mark task complete").
Contrast: Ensure text meets WCAG 2.1 AA standards.
Testing: Use axe-core with Next.js for automated checks.

6. User Stories
6.1 Farmer

As a farmer, I want a daily task list, so I know what to do for my crops.
As a farmer, I want a crop calendar, so I can plan from planting to harvest.
As a farmer, I want offline access, so I can use the app without internet.
As a farmer, I want simple instructions, so I can follow them without tech skills.
As a farmer, I want weather-based tips, so I can adjust irrigation.

6.2 Admin

As an admin, I want user analytics, so I can track engagement and improve features.
As an admin, I want to upload datasets, so I can enhance AI models.
As an admin, I want error logs, so I can debug issues quickly.

7. Success Metrics

Adoption: 1,000 active users within 6 months.
Engagement: 70% daily task completion rate.
Impact: 20% yield increase (self-reported by users).
Retention: 80% monthly retention rate.
Performance: 95% of pages load in <3s on 3G.
Accessibility: 100% WCAG 2.1 compliance for core features.

8. Constraints

Limited internet in rural areas requires offline mode and lightweight assets.
Public datasets may lack granularity, necessitating defaults or manual inputs.
Farmers’ tech literacy may limit adoption, requiring intuitive UX.

9. Assumptions

Farmers have access to smartphones (personal or shared).
OpenWeatherMap API provides reliable data for Kenyan regions.
Users are willing to input basic farm details during onboarding.

10. Future Work

IoT Integration: Support soil moisture sensors for real-time data.
Chatbot: Add AI chatbot for interactive support.
Market Insights: Include crop prices and buyer connections.
Multi-Region: Expand to Uganda, Tanzania with localized datasets.
Gamification: Reward task completion with badges or points.

11. Timeline

Phase 1: MVP (3 Months):
Design system and UI components (TailwindCSS, Shadcn).
Setup Supabase (auth, database, storage).
Build core APIs (Next.js routes, weather integration).
Train and deploy basic AI models.


Phase 2: Testing (4-5 Months):
User testing with 50 farmers in Kenya.
Iterate based on feedback (UI, AI accuracy).


Phase 3: Launch (6 Months):
Deploy on Vercel and Supabase.
Onboard 1,000 users.


Phase 4: Post-Launch (Ongoing):
Monitor metrics via Supabase Analytics.
Plan future features (IoT, chatbot).



12. Stakeholders

Product Team: Wilkister Kibor, Cyprian Kiplangat, Brian Kathil (Kabarak University).
Users: Kenyan smallholder farmers, cooperatives.
Sponsors: Kabarak University, potential NGOs.
Development Team:
Frontend: Next.js, TailwindCSS, Shadcn.
Backend: Supabase, Next.js API routes.
AI/ML: Python, Scikit-learn, TensorFlow.



13. Risks and Mitigation

Risk: Poor connectivity limits access.
Mitigation: Implement PWA with offline caching.


Risk: AI inaccuracies reduce trust.
Mitigation: Validate models with farmer feedback and fallback defaults.


Risk: Low tech literacy hinders adoption.
Mitigation: Simplify UI, provide tutorials, and support Swahili.


Risk: Dataset gaps affect AI performance.
Mitigation: Use defaults and allow manual soil inputs.



14. Appendix
14.1 Sample AI Recommendation JSON
{
  "id": "uuid-123",
  "crop_id": "uuid-456",
  "type": "irrigation",
  "details": {
    "task": "Water maize",
    "amount": "10L/acre",
    "date": "2025-07-10",
    "reason": "No rainfall expected for 3 days"
  },
  "status": "pending",
  "created_at": "2025-07-08T15:00:00Z"
}

14.2 Sample TailwindCSS Component
// components/TaskCard.jsx
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function TaskCard({ task }) {
  return (
    <Card className="bg-white shadow-sm rounded-md p-4 mb-4">
      <CardHeader className="p-0 mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-sm text-gray-600">{task.details}</p>
        <button
          className="mt-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          onClick={() => markTaskComplete(task.id)}
        >
          Mark Complete
        </button>
      </CardContent>
    </Card>
  );
}

14.3 Sample Supabase Edge Function
// supabase/functions/recommendations/index.ts
import { serve } from "https://deno.land/std/http/server.ts";

serve(async (req) => {
  const { crop_id } = await req.json();
  // Fetch crop data from Supabase
  const { data: crop } = await supabase
    .from("crops")
    .select("*")
    .eq("id", crop_id)
    .single();
  
  // Call AI model (pseudo-code)
  const recommendation = await aiModel.predict(crop, weatherData);
  
  // Store recommendation
  await supabase.from("recommendations").insert({
    crop_id,
    type: recommendation.type,
    details: recommendation,
  });
  
  return new Response(JSON.stringify(recommendation), {
    headers: { "Content-Type": "application/json" },
  });
});
