# AAROH — Premium Editorial Design System Specification

## 1. Design Principles & Visual Rationale

AAROH is a unified ecosystem where students discover projects, showcase work, build multidisciplinary teams, and connect with mentors and opportunities.

Rather than resembling a generic SaaS dashboard with cookie-cutter cards and gratuitous neon glows, AAROH embraces a **premium editorial visual identity**:

* **Typographic Authority**: Poppins provides structured, bold display headlines; Inter provides clean, readable body text. Line lengths are restrained (< 75 characters) to preserve reading comfort.
* **Restrained Color Hierarchy**: Deep obsidian plum base in dark mode (`#0c0810`, `#140d18`) and tactile warm alabaster in light mode (`#fbf9f6`, `#f3efe9`). A single deliberate berry-crimson accent (`#c92f6d`) is reserved strictly for focal actions and key status moments.
* **Hairline Rules over Heavy Shadows**: Structural hierarchy is defined through crisp, deliberate borders (`1px solid var(--color-border-subtle)`) and subtle tonal surfaces rather than heavy elevation shadows.
* **Purposeful Motion & Accessibility**: Micro-transitions respond exclusively to user intent (hover, press, disclosure) at 150–200ms ease. Global resets enforce accessible focus rings (`:focus-visible`) and respect `prefers-reduced-motion: reduce`.

---

## 2. Design Tokens Reference

All design tokens are defined on `:root` (dark default) and `[data-theme="light"]`, and exposed to Tailwind CSS v4 via `@theme`.

### Color Tokens

| Token Name | Tailwind Utility | Dark Default | Light Theme | Usage |
| :--- | :--- | :--- | :--- | :--- |
| `--color-bg-base` | `bg-bg-base` | `#0c0810` | `#fbf9f6` | Page background |
| `--color-bg-subtle` | `bg-bg-subtle` | `#140d18` | `#f3efe9` | Sunken containers, page sections |
| `--color-surface-card` | `bg-surface-card` | `#191220` | `#ffffff` | Cards, panels, input fields |
| `--color-surface-raised` | `bg-surface-raised` | `#221a2c` | `#f7f4f0` | Hover states, elevated cards, pills |
| `--color-text-primary` | `text-text-primary` | `#f6eedf` | `#211923` | Headlines, titles, primary text |
| `--color-text-secondary` | `text-text-secondary` | `#ded6ca` | `#4d4452` | Body copy, subtitles |
| `--color-text-muted` | `text-text-muted` | `#9ba4b2` | `#6e6575` | Captions, placeholders, metadata |
| `--color-brand-primary` | `bg-brand-primary`, `text-brand-primary` | `#c92f6d` | `#c92f6d` | Primary CTAs, active indicators |
| `--color-brand-hover` | `hover:bg-brand-hover` | `#e14b87` | `#b3255e` | Hover state for primary buttons |
| `--color-brand-muted` | `bg-brand-muted` | `rgba(201, 47, 109, 0.14)` | `rgba(201, 47, 109, 0.10)` | Accent tag backgrounds, badges |
| `--color-border-subtle` | `border-border-subtle` | `rgba(246, 238, 223, 0.09)` | `rgba(33, 25, 35, 0.10)` | Standard container & divider borders |
| `--color-border-medium` | `border-border-medium` | `rgba(246, 238, 223, 0.16)` | `rgba(33, 25, 35, 0.18)` | Hover borders, active outlines |
| `--color-border-focus` | `border-border-focus` | `#c92f6d` | `#c92f6d` | Accessible focus rings & active inputs |
| `--color-success` | `text-success` | `#2ea879` | `#1d835c` | Success confirmation & approved state |
| `--color-warning` | `text-warning` | `#d98b2b` | `#b86e17` | Pending review & alerts |
| `--color-error` | `text-error` | `#e04b4b` | `#c93434` | Form errors & destructive actions |
| `--color-info` | `text-info` | `#4f8be8` | `#2a6ecb` | Informational notes & tips |

### Typography Tokens

| Token Name | Tailwind Utility | Font Family | Usage |
| :--- | :--- | :--- | :--- |
| `--font-display` | `font-display` | `"Poppins", sans-serif` | Editorial display titles, section headings |
| `--font-sans` | `font-sans` | `"Inter", sans-serif` | Body text, form controls, navigation, UI copy |

### Radii Tokens (Subtle & Disciplined)

| Token Name | Radius | Usage |
| :--- | :--- | :--- |
| `--radius-xs` | `4px` | Tags, status badges |
| `--radius-sm` | `6px` | Inputs, textareas, selects, small buttons |
| `--radius-md` | `10px` | Cards, surfaces, modal dialogs, standard buttons |
| `--radius-lg` | `14px` | Large hero cards, featured highlight containers |

---

## 3. Component Foundations (`src/components/common/`)

All common components are built with standard semantic HTML, full keyboard accessibility, zero unnecessary runtime dependencies, and strict prop contracts.

### 1. `Button`
```jsx
import { Button } from "./components/common";
import { ArrowRight, Plus } from "lucide-react";

// Primary action
<Button variant="primary" size="md" iconRight={<ArrowRight size={16} />}>
  Explore Innovations
</Button>

// Secondary action
<Button variant="secondary" size="md" icon={<Plus size={16} />}>
  Create Team
</Button>

// Ghost action
<Button variant="ghost" size="sm">
  Dismiss
</Button>
```
* **Props**: `variant` (`'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'`), `size` (`'sm' | 'md' | 'lg'`), `isLoading` (boolean), `icon` (node), `iconRight` (node), `disabled` (boolean), `type` (`'button' | 'submit' | 'reset'`).

### 2. `Input`
```jsx
import { Input } from "./components/common";
import { Search } from "lucide-react";

<Input
  label="Search Projects"
  placeholder="Filter by keyword, tech, or creator..."
  icon={<Search size={16} />}
  helperText="Press Enter to filter projects"
/>

<Input
  label="Project Title"
  required
  error={errors.title}
/>
```
* **Props**: `label`, `id`, `name`, `type`, `error`, `helperText`, `icon`, `required`, `disabled`.

### 3. `Textarea`
```jsx
import { Textarea } from "./components/common";

<Textarea
  label="Innovation Summary"
  rows={5}
  placeholder="Describe the problem, solution, and current stage..."
  required
  error={errors.summary}
/>
```
* **Props**: `label`, `id`, `name`, `rows`, `error`, `helperText`, `required`, `disabled`.

### 4. `Select`
```jsx
import { Select } from "./components/common";

<Select
  label="Category"
  options={["AI", "Healthcare", "Sustainability", "Smart Campus"]}
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  required
/>
```
* **Props**: `label`, `id`, `name`, `options` (array of string or `{ label, value }`), `value`, `onChange`, `placeholder`, `error`, `helperText`, `required`, `disabled`.

### 5. `Badge`
```jsx
import { Badge } from "./components/common";

<Badge variant="primary">AI & ML</Badge>
<Badge variant="success">Active Prototype</Badge>
<Badge variant="default" size="sm">Mentored</Badge>
```
* **Props**: `variant` (`'default' | 'primary' | 'accent' | 'success' | 'warning' | 'error' | 'outline'`), `size` (`'sm' | 'md'`), `icon`.

### 6. `Card`
```jsx
import { Card } from "./components/common";

<Card variant="interactive" padding="md" as="article">
  <h3 className="font-display font-semibold text-lg">Smart Hydroponics</h3>
  <p className="text-sm text-[var(--color-text-muted)] mt-1">Autonomous nutrient tracking system.</p>
</Card>
```
* **Props**: `as` (`'div' | 'article' | 'section'`), `variant` (`'default' | 'interactive' | 'sunken'`), `padding` (`'none' | 'sm' | 'md' | 'lg'`).

### 7. `Divider`
```jsx
import { Divider } from "./components/common";

<Divider label="Or continue with" align="center" />
```
* **Props**: `label` (optional text/kicker), `align` (`'center' | 'left'`).

### 8. `EmptyState`
```jsx
import { EmptyState, Button } from "./components/common";
import { Lightbulb } from "lucide-react";

<EmptyState
  icon={<Lightbulb size={24} />}
  title="No innovations submitted yet"
  description="Be the first student to publish your concept and recruit collaborators."
  action={<Button variant="primary" size="sm">Submit an Idea</Button>}
/>
```
* **Props**: `icon`, `title`, `description`, `action`.

---

## 4. Accessibility Checklist

1. **Contrast Compliance**:
   * Text colors against `--color-bg-base` (`#0c0810` in dark, `#fbf9f6` in light) achieve WCAG AA contrast ratio (> 4.5:1 for body copy, > 7:1 for headings).
2. **Keyboard Navigation & Focus**:
   * Global `:focus-visible` ring provides a 2px offset border in `--color-border-focus` (`#c92f6d`).
   * Native form elements preserve standard tab order and keyboard triggering.
3. **Form Association**:
   * All form components use React's `useId()` to connect `<label htmlFor="...">` with `<input id="...">` and aria description IDs (`aria-describedby`, `aria-invalid`).
4. **Motion Preferences**:
   * `prefers-reduced-motion: reduce` resets transitions and animations to 0.01ms.

---

## 5. Token Usage: Correct vs. Incorrect

### ❌ Incorrect (Anti-patterns)
```jsx
// Avoid: Hardcoded arbitrary colors and excessive pill rounds
<div className="bg-[#121212] text-[#fff] rounded-full p-4 shadow-2xl">
  <button className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl animate-pulse">
    Click Here →
  </button>
</div>
```

### ✅ Correct (Design System Tokens)
```jsx
// Preferred: Semantic design tokens with clean editorial styling
<div className="bg-[var(--color-surface-card)] text-[var(--color-text-primary)] border border-[var(--color-border-subtle)] rounded-[var(--radius-md)] p-6">
  <Button variant="primary" size="md">
    Explore Innovations
  </Button>
</div>
```
