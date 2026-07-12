# Design System Inspired by Mohamed Gado

## 1. Visual Theme & Atmosphere

Mohamed Gado's portfolio embodies a sophisticated, engineer-first aesthetic grounded in dark minimalism and professional clarity. The design prioritizes content hierarchy and technical credibility through generous whitespace, restrained color usage, and deliberately understated interactions. Navigation feels intuitive and invisible—the interface dissolves into the background while the narrative and accomplishments take center stage. The visual language reflects both accessibility-first principles and a deep respect for user attention: every element serves a purpose, every interaction feels intentional, and every detail reinforces expertise and approachability.

**Key Characteristics**
- Deep navy (`#0F172A`) foundation with high-contrast light surfaces
- Minimal color palette with strategic accent use for interactivity
- Typography-driven layout emphasizing readability and hierarchy
- Accessibility-conscious design with strong contrast ratios
- Intentional whitespace creating visual breathing room
- Subtle shadows for depth without visual clutter
- Monospace and sans-serif harmonies reflecting technical discipline
- Dark-mode-first aesthetic promoting prolonged engagement

## 2. Color Palette & Roles

### Primary
- **Navy Base** (`#0F172A`): Primary surface color establishing dark, professional foundation; used throughout backgrounds, text, and structural elements

### Neutral Scale
- **Light Surface** (`#E2E8F0`): High-frequency neutral for body text, subtle backgrounds, and interface elements; provides readable contrast against dark surfaces
- **Pure White** (`#FFFFFF`): Reserved for highest-contrast text (headings, labels) and critical UI surfaces requiring maximum legibility
- **Soft Gray** (`#DDDDDD`): Secondary neutral for subtle borders, dividers, and tertiary text elements
- **Medium Gray** (`#D1D1D1`): Minimal-use neutral for edge cases and refinement layers

### Interactive
- **Transparent Accent** (`rgba(0, 0, 0, 0.5)` opacity variants): Button overlays and hover states maintaining visual hierarchy
- **Ghost Foreground** (`rgb(255, 255, 255)`): Interactive text on dark backgrounds, links, and call-to-action elements

### Surface & Borders
- **Border Neutral** (`rgb(226, 232, 240)`): Subtle line work for form fields, dividers, and structural boundaries
- **Overlay Dark** (`rgba(0, 0, 0, 0)` to `rgba(0, 0, 0, 0.7)`): Progressive darkening for modals, focus states, and depth layering

## 3. Typography Rules

### Font Family
- **Primary:** Inter (sans-serif)
  - Fallback stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", sans-serif`
- **Code/Technical:** Monospace stack for technical tags and framework labels
  - Fallback stack: `"SF Mono", "Monaco", "Inconsolata", monospace`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| **Display / H1** | Inter | 48px | 700 | 48px | 0px | Page titles, primary heading; navy on light |
| **Heading 2 / H2** | Inter | 20px | 500 | 28px | 0px | Section headers, card titles |
| **Heading 3 / H3** | Inter | 16px | 500 | 22px | 0px | Subsection labels, emphasis text |
| **Body / Paragraph** | Inter | 16px | 400 | 24px | 0px | Primary reading text; high contrast ratio |
| **Button / Label** | Inter | 12px | 400 | 16px | 0px | Action text, navigation items, tags |
| **Caption / Metadata** | Inter | 14px | 400 | 20px | 0px | Dates, secondary context, footers |
| **Code / Technical** | Monospace | 13px | 400 | 20px | 0px | Framework and technology tags |

### Principles
- Maintain minimum `16px` base for body text to ensure readability and accessibility
- Weight distribution uses 700 for critical hierarchy, 500 for secondary structure, 400 for all content
- Line height consistently set at 1.5× font size for comfortable reading rhythm
- Letter spacing remains `0px` across all roles for professional, modern appearance
- Emphasis through weight and size, not through color shifts (preserves dark-mode readability)
- Technical typography (code blocks, tags) steps down to `13px` while maintaining readability through monospace treatment

## 4. Component Stylings

### Buttons

**Primary Button (Small)**
- Background: `rgba(15, 23, 42, 0.5)` (transparent navy overlay)
- Text Color: `rgba(226, 232, 240, 0.75)` (muted light)
- Font Size: `12px`
- Font Weight: `400`
- Padding: `6px 12px`
- Border Radius: `6px`
- Border: `1px solid rgba(226, 232, 240, 0.1)`
- Box Shadow: `none`
- Line Height: `16px`
- Hover State: Background opacity increases to `rgba(15, 23, 42, 0.65)`

**Secondary Button (Medium)**
- Background: `rgba(0, 0, 0, 0)` (transparent)
- Text Color: `rgba(255, 255, 255, 1)` (pure white)
- Font Size: `16px`
- Font Weight: `400`
- Padding: `12px 16px`
- Border Radius: `12px`
- Border: `none`
- Box Shadow: `none`
- Line Height: `24px`
- Hover State: Text color fades to `rgba(226, 232, 240, 0.8)`, background develops subtle hover lift

**Ghost Button (Navigation)**
- Background: `rgba(0, 0, 0, 0)` (fully transparent)
- Text Color: `rgb(15, 23, 42)` (navy)
- Font Size: `16px`
- Font Weight: `400`
- Padding: `12px 0px`
- Border Radius: `0px`
- Border: `none`
- Box Shadow: `none`
- Line Height: `24px`
- Hover State: Underline appears or opacity shifts to `rgba(15, 23, 42, 0.6)`

**Icon Button (Circular)**
- Background: `rgba(0, 0, 0, 0)` (transparent)
- Text Color: `rgb(255, 255, 255)` (white)
- Font Size: `16px`
- Font Weight: `400`
- Padding: `0px`
- Border Radius: `16px`
- Border: `none`
- Box Shadow: `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px`
- Width / Height: `56px`
- Line Height: `24px`
- Hover State: Shadow increases to `rgba(0, 0, 0, 0.15) 0px 10px 20px -5px`

### Cards & Containers

**Project Card**
- Background: `#0F172A` (navy base)
- Border: `1px solid rgba(226, 232, 240, 0.1)` (subtle light divider)
- Border Radius: `12px`
- Padding: `24px`
- Box Shadow: `rgba(0, 0, 0, 0.6) 0px 8px 30px -12px`
- Text Color: `#E2E8F0` (light surface)
- Hover State: Border opacity increases to `rgba(226, 232, 240, 0.2)`, shadow deepens to `rgba(0, 0, 0, 0.7) 0px 4px 20px -6px`

**Tag / Badge**
- Background: `rgba(15, 23, 42, 0.4)` (light navy tint)
- Text Color: `#E2E8F0` (light surface)
- Font Size: `12px` (button size)
- Padding: `4px 12px`
- Border Radius: `6px`
- Border: `1px solid rgba(226, 232, 240, 0.15)`
- Box Shadow: `none`

### Inputs & Forms

**Search Input**
- Background: `rgba(15, 23, 42, 0.3)` (semi-transparent navy)
- Text Color: `#E2E8F0` (light surface)
- Placeholder Color: `rgba(226, 232, 240, 0.5)` (muted light)
- Font Size: `16px`
- Padding: `12px 16px`
- Border Radius: `8px`
- Border: `1px solid rgba(226, 232, 240, 0.15)`
- Box Shadow: `none`
- Focus State: Border color becomes `rgba(226, 232, 240, 0.3)`, box shadow adds `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px`

**Keyboard Shortcut Label**
- Background: `rgba(226, 232, 240, 0.1)` (subtle light overlay)
- Text Color: `rgba(226, 232, 240, 0.7)` (muted light)
- Font Size: `12px`
- Padding: `4px 8px`
- Border Radius: `4px`
- Border: `1px solid rgba(226, 232, 240, 0.15)`
- Font Family: Monospace
- Box Shadow: `none`

### Navigation

**Navigation Menu**
- Background: `rgba(0, 0, 0, 0)` (transparent)
- Text Color: `rgb(15, 23, 42)` (navy)
- Font Size: `16px`
- Font Weight: `400`
- Padding: `0px` (links handle padding individually)
- Border Radius: `0px`
- Border: `none`
- Box Shadow: `none`
- Line Height: `24px`
- Link Spacing: `16px` gap between items
- Active Link Indicator: Underline bar at bottom, height `2px`, color `#E2E8F0`

**Social Icon Link**
- Background: `rgba(0, 0, 0, 0)` (transparent)
- Icon Color: `#E2E8F0` (light surface)
- Font Size: `24px` (icon size)
- Padding: `8px`
- Border Radius: `0px`
- Border: `none`
- Box Shadow: `none`
- Hover State: Icon color fades to `rgba(226, 232, 240, 0.6)`

## 5. Layout Principles

### Spacing System
- **Base Unit:** `4px`
- **Scale:** `4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `32px`, `48px`, `64px`, `80px`, `84px`, `96px`
- **Margins:** Large sections use `64px`, `80px`, `96px` for visual separation; medium sections use `32px`, `48px`
- **Padding:** Interior container padding defaults to `24px` on cards, `12px` on compact elements, `96px` on full-width sections
- **Gaps:** Flex layouts use `16px` for list items, `20px` for section groups, `12px` for inline elements
- **Usage Context:**
  - `4px` / `8px`: Micro-spacing, button padding, icon gaps
  - `12px` / `16px`: Component padding, form field spacing
  - `20px` / `24px`: Card spacing, section padding
  - `32px` to `96px`: Major layout sections, page margins

### Grid & Container
- **Max Width:** `1280px` for main content container
- **Column Strategy:** Two-column layout with sidebar navigation on left (`280px` to `320px` fixed width) and main content on right (fluid, minimum `600px`)
- **Section Patterns:** Full-width hero section (`#0F172A` background), contained content sections with symmetric margins, footer spanning full width
- **Responsive Shift:** Sidebar collapses to hamburger menu below `768px` breakpoint; content becomes single column

### Whitespace Philosophy
The design embraces negative space as a design material, not mere absence. Large margins and generous line heights create visual rhythm, prioritizing reader comfort over content density. Whitespace acts as a visual hierarchy tool—elements surrounded by more space feel more important. The dark background makes whitespace feel like intentional contrast rather than emptiness. Consistent spacing rhythms create visual predictability and reduce cognitive load.

### Border Radius Scale
- **Sharp:** `0px` (navigation underlines, structural dividers)
- **Subtle:** `4px` (images, small badges)
- **Rounded:** `6px` (small buttons, compact inputs)
- **Medium:** `12px` (cards, medium buttons)
- **Full:** `16px` (icon buttons, circular elements)
- **Extra:** `20px` (large rounded containers, modal corners)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| **Flat (0)** | No shadow, transparent or navy backgrounds | Navigation, text, structural elements, links |
| **Raised (1)** | `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px` | Form focus states, subtle hover effects |
| **Floating (2)** | `rgba(0, 0, 0, 0.6) 0px 8px 30px -12px` | Cards, project containers, interactive panels |
| **Lifted (3)** | `rgba(0, 0, 0, 0.7) 0px 4px 20px -6px` | Hovered cards, expanded sections |
| **Prominent (4)** | `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px` | Icon buttons, special call-to-actions |
| **Modal (5)** | `rgba(0, 0, 0, 0.7) 0px 20px 40px -10px` | Overlays, modals, dropdown menus |

**Shadow Philosophy:** Shadows are deliberately subtle and directional, mimicking natural light falling at a 45° angle from top-left. The dark background means shadows primarily communicate depth change rather than create stark separation. Shadow opacity increases from 0.1 to 0.7 across elevation levels, with blur radius scaling proportionally. This restrained approach keeps the interface feeling elegant and prevents shadow fatigue on extended viewing.

## 7. Do's and Don'ts

### Do
- Use `#E2E8F0` for all body text to ensure WCAG AA compliance on navy backgrounds
- Maintain `16px` minimum font size for primary content and accessibility
- Apply consistent `12px` line height to button text; scale line height to `1.5× font size` for body text
- Reserve `#FFFFFF` for primary headings, highest-priority text, and critical UI labels
- Group related navigation items with `16px` gaps between items
- Apply `12px` border radius to all interactive components except navigation links
- Use ghost buttons (transparent background, dark text) for secondary navigation
- Implement `:hover` states by increasing shadow depth or adjusting text opacity
- Maintain `24px` padding on all cards and containers
- Use `rgba(0, 0, 0, 0.6)` shadow on floating elements for consistent depth cues

### Don't
- Mix weight ratios; use only 700, 500, and 400 to maintain hierarchy clarity
- Apply color shifts for emphasis—use size and weight instead
- Use border colors brighter than `rgba(226, 232, 240, 0.15)` for subtle structural lines
- Combine multiple shadow layers unless building modal/overlay hierarchies
- Set padding below `6px` on buttons or `12px` on containers
- Use line heights shorter than `1.4×` for body text or less than `1.25×` for headings
- Create borders thicker than `1px` except for special design moments
- Apply letter spacing adjustments across the system
- Deviate from the base spacing scale of multiples of `4px`
- Use more than two accent colors in interactive states

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| **Mobile** | `320px–479px` | Single column, full-width margins `16px`, font sizes reduce by 1–2 steps, navigation collapses to hamburger, padding compacts to `12px–16px` |
| **Tablet** | `480px–767px` | Two column possible, margins become `24px`, font sizes remain at desktop, compact spacing increases to `20px`, smaller icon buttons |
| **Desktop** | `768px–1024px` | Two column locked, sidebar navigation fixed at `280px`, main content min `480px`, standard margins `32px`, full spacing scale available |
| **Large** | `1024px+` | Two column expanded, sidebar `320px`, main content max `900px`, margins `48px–64px`, maximum component sizing activated |

### Touch Targets
- **Minimum Size:** `44px × 44px` for all interactive elements (buttons, links, icon buttons)
- **Minimum Padding:** `12px` on all sides for buttons and inputs
- **Spacing Between:** Minimum `12px` gap between adjacent interactive elements to prevent accidental misclicks
- **Icon Buttons:** Sized at `56px × 56px` on desktop, maintained or increased to `48px × 48px` on mobile for comfortable interaction
- **Form Fields:** Minimum height `44px` with `12px` vertical padding
- **Link Targets:** Navigation links minimum height `40px` with `12px` padding top/bottom

### Collapsing Strategy
- **Navigation:** Sidebar transforms to hamburger menu at `768px` breakpoint; menu items stack vertically with `8px` gaps instead of horizontal `16px` gaps
- **Layout:** Two-column grid becomes single-column stack with sidebar content moved above or within a collapsible drawer
- **Typography:** H1 reduces from `48px` to `36px` at tablet, `28px` at mobile; body text remains `16px` minimum for readability
- **Spacing:** Horizontal padding compacts from `32px–48px` to `20px–24px` to `16px` as viewport narrows; vertical spacing maintains scale but reduces margins proportionally
- **Cards:** Full-width on mobile with `16px` horizontal padding; grid layout at tablet/desktop with gaps of `16px`
- **Images:** Scale to fit container width with aspect ratio preservation

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA / Interactive:** Navy Base (`#0F172A`) with Light Surface text (`#E2E8F0`)
- **Background:** Navy Base (`#0F172A`)
- **Heading Text:** Pure White (`#FFFFFF`)
- **Body Text:** Light Surface (`#E2E8F0`)
- **Borders / Dividers:** Border Neutral (`rgb(226, 232, 240)`) at `0.1–0.15` opacity
- **Navigation Links:** Navy Base (`#0F172A`) text, transparent background, navy underline on active
- **Tags / Badges:** Light Navy tint background (`rgba(15, 23, 42, 0.4)`) with Light Surface text (`#E2E8F0`)
- **Icons / Social:** Light Surface (`#E2E8F0`), fade to `rgba(226, 232, 240, 0.6)` on hover

### Iteration Guide

1. **Base All Text on Inter Font:** Use Inter at `400` weight for body, `500` for subsections, `700` only for H1. Monospace for code blocks and technical tags.

2. **Maintain Navy (`#0F172A`) as Universal Background:** Apply this color as page background, card backgrounds, and overlay foundations. Never deviate to other dark colors.

3. **Reserve Pure White (`#FFFFFF`) for Critical Hierarchy:** Use exclusively for H1 headings, highest-priority labels, and call-to-action text where maximum contrast is required.

4. **Default Body Text to Light Surface (`#E2E8F0`):** Apply this to all paragraph text, navigation items, descriptions, and secondary content. Never use pure white for body text.

5. **Scale Typography by Multiples of 4px:** All font sizes (`12px`, `16px`, `20px`, `48px`) are base-4 multiples. Line heights are `1.25×–1.5×` font size.

6. **Implement Spacing Using the 4px Base Unit:** Padding, margin, and gap values are `4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `32px`, `48px`, `64px`, `80px`, or `96px`—never arbitrary values.

7. **Apply Border Radius Progressively:** Navigation and text links use `0px`; images and badges use `4px`; buttons use `6px–12px`; icon buttons use `16px`; containers use `12px`.

8. **Use Shadows to Signal Depth, Not Decoration:** Apply shadows only to floating elements (cards, dropdowns, modals). Intensity scales from `0.1` opacity (subtle) to `0.7` opacity (modal). Never use purely decorative shadows.

9. **Create Hover States Through Opacity or Shadow Shift:** For text, reduce opacity to `0.6–0.8`. For buttons and cards, increase shadow depth (from level 2 to level 3). Never introduce new colors on hover.

10. **Responsive Breakpoint Activation at 768px:** Below `768px`, convert two-column layouts to single-column stacks. Reduce H1 typography from `48px` to `36px` to `28px` as viewport shrinks. Maintain minimum `16px` font size for body text always.