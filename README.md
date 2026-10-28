# LumaStage — Home Theatre & Audio Installation Website

## Pages
- `index.html` — Home 1
- `home-2.html` — Home 2 / premium signature landing page
- `about.html`
- `services.html`
- `service-details.html`
- `gallery.html`
- `case-studies.html`
- `contact.html`
- `booking.html`
- `404.html`
- `maintenance.html`
- `privacy-policy.html`
- `terms-and-conditions.html`

## CSS and JavaScript
Every page has its own stylesheet in `assets/`, with common design tokens, reusable components, header/footer, responsive utilities, and shared theme rules in `assets/global.css`. Page-specific rules are kept in the corresponding page stylesheet. `assets/site.js` powers shared interactions.

## Images
Content image URLs are unique across pages and use category-relevant search tags with fixed lock values. The shared LumaStage logo is intentionally reused in the header/footer on each page. Replace stock imagery with properly licensed project photography before publishing if desired.

## Run locally
Open `index.html` in a browser. For best results, run a local static server from the project folder, for example `python -m http.server 8000`, then visit `http://localhost:8000`.

## Design system
- Primary: `#173F4A` (deep ocean teal)
- Secondary: `#D4AF37` (gold)
- Responsive breakpoints include 1024px, 768px, and 360px.
- Lucide icons are used throughout the UI; Font Awesome is reserved for footer social icons.
- Dark mode and RTL controls are included in the header.

## Before publishing
1. Replace sample phone/email details and placeholder business information.
2. Connect consultation and booking forms to a production form backend.
3. Review legal pages against your actual business and data practices.
4. Verify all remote imagery loads in your deployment environment.
