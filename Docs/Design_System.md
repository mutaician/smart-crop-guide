# Smart Crop Guide – Design System

## 🎨 Color Palette
- **Primary:** #219653 (Green)
- **Accent:** #F9A825 (Sun Yellow)
- **Background:** #F5F9F5 (Light), #FFFDE4 (Sunrise Gradient)
- **Text:** #222, #444, #1565C0 (Blue for actions)
- **Neutrals:** #A1887F (Soil), #795548 (Seed), #E0E0E0 (Borders)

All colors are defined in `tailwind.config.js` and used via Tailwind utility classes.

## 🅰️ Typography
- **Headings:** Lora (serif, display)
- **Body:** Roboto (sans-serif)
- **Font weights:** 400 (regular), 600 (semibold), 700 (bold)
- **Usage:**
  - Headings: `font-display` (Tailwind custom font family)
  - Body: `font-sans`

## 📏 Spacing & Layout
- **Spacing scale:** Tailwind's default (`px-2`, `py-4`, `mb-8`, etc.)
- **Container:** Responsive, max-width for content (`max-w-4xl`, `mx-auto`)
- **Cards:** Rounded corners (`rounded-xl`), subtle shadow, padding (`p-6`)

## 🧩 Components
### Button
- Uses Shadcn UI base, customized with Tailwind classes
- States: default, hover, focus, disabled
- Micro-interactions: ripple/growth effect on click

### Card
- Used for feature highlights, testimonials
- `rounded-xl`, `shadow-md`, `bg-white/80`, padding

### Input
- Shadcn UI Input, accessible labels, focus ring

## 🖼️ Iconography & SVGs
- Custom SVGs for sunrise, acacia trees, crop stages
- All icons are inline SVG for performance and theming

## 🟣 Backgrounds & Patterns
- Kitenge/shuka-inspired SVG patterns for section backgrounds
- Layered with organic shapes and gradients
- Acacia tree SVGs for local identity

## ♿ Accessibility
- Color contrast meets WCAG 2.1 AA
- All interactive elements are keyboard accessible
- ARIA labels for icons and buttons
- Language toggle for English/Kiswahili

## 🛠️ Usage Examples
```jsx
// Button
<Button className="bg-primary text-white hover:bg-primary/90 focus:ring-4">Get Started</Button>

// Card
<div className="rounded-xl shadow-md bg-white/80 p-6">...</div>

// Heading
<h1 className="font-display text-4xl font-bold">Welcome</h1>
```

---

For more, see the Tailwind config and Shadcn UI documentation. Update this file as the design system evolves. 