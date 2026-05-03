# Button Unification Design

**Date:** 2026-05-03  
**Status:** Approved  

## Problem

Button usage across the project is inconsistent:

- `ProjectDetailView` uses a raw `<a>` tag with manually duplicated CSS for the "View Live" button
- `ProjectCard` passes external URLs to AppButton's `:to` prop, which routes through `RouterLink` — incorrect for external links
- `HeroSection` uses `:deep()` to override AppButton's padding, height, and hover color — effectively defining a hidden second variant inline
- secondary hover behavior differs across three locations (subtle blue tint in AppButton, solid blue fill in Hero and live-btn)

## Approach

Extend `AppButton.vue` in place (single component, single source of truth). No new components.

## AppButton API Changes

### New / modified props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `href` | `string` | — | External link; renders `<a>` element |
| `target` | `string` | `'_blank'` | Passed to `<a>` when `href` is set |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | `lg` is new |

### Render priority

```
href set  →  <a :href target rel="noopener noreferrer">
to set    →  <RouterLink :to>
default   →  <button :type>
```

### Size tokens

| Size | padding | font-size | Target height |
|---|---|---|---|
| `sm` | `4px 24px` | `0.875rem` | ~22px |
| `md` | `12px 24px` | `0.9375rem` | ~39px |
| `lg` | `14px 32px` | `1rem` | ~48px |

### secondary variant hover (unified)

```css
.app-btn--secondary:hover {
  background: var(--lake-blue-600);
  border-color: var(--lake-blue-600);
  color: var(--neutral-0);
}
.app-btn--secondary:active {
  background: var(--lake-blue-700);
  border-color: var(--lake-blue-700);
  color: var(--neutral-0);
}
```

## File-by-file changes

### `src/components/atoms/AppButton.vue`
- Add `href` and `target` props
- Update render logic to three-way: `href` → `<a>`, `to` → RouterLink, default → `<button>`
- Add `lg` size CSS rule
- Update `.app-btn--secondary:hover` and `:active` to solid fill

### `src/components/organisms/HeroSection.vue`
- Keep `<AppButton variant="secondary">` at default `size="md"` (no size prop needed)
- Delete the entire `:deep(.app-btn--secondary)` override block (lines 96–114)

### `src/components/molecules/ProjectCard.vue`
- Change `:to="project.liveUrl"` → `:href="project.liveUrl"` on the View Live AppButton
- Change `size="sm"` → `size="md"`
- Remove manually passed `target` and `rel` attrs (now handled by AppButton internally)

### `src/views/ProjectDetailView.vue`
- Replace the raw `<a class="project-detail__live-btn">` with `<AppButton variant="secondary" size="lg" :href="project.liveUrl">`
- Delete the `.project-detail__live-btn` CSS class entirely

## Out of scope

- Loading state, disabled styling, icon slots — no current requirement
- NavBar hamburger `<button>` and Resume `<a>` — functional/nav elements, not design buttons
