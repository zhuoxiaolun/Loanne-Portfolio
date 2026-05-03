# Button Unification Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extend `AppButton.vue` to handle external links and a new `lg` size, then replace all ad-hoc button implementations with it so every button in the project is controlled through one component.

**Architecture:** Single-atom approach — all changes flow outward from `AppButton.vue`. Three-branch template render (`href` → `<a>`, `to` → RouterLink, default → `<button>`) replaces the current two-branch logic. Four consumer files are updated after the atom is ready.

**Tech Stack:** Vue 3 (Composition API / `<script setup>`), TypeScript, scoped CSS with design tokens

---

## File Map

| File | Action | What changes |
|---|---|---|
| `src/components/atoms/AppButton.vue` | Modify | Add `href`/`target` props, three-way render, `lg` size, secondary hover |
| `src/components/organisms/HeroSection.vue` | Modify | Delete `:deep()` block; button stays `md` (no size prop needed) |
| `src/components/molecules/ProjectCard.vue` | Modify | `:to` → `:href`, `size="sm"` → `size="md"`, remove `target`/`rel` |
| `src/views/ProjectDetailView.vue` | Modify | Replace raw `<a>` with AppButton `size="lg"`; strip `.project-detail__live-btn` CSS to layout-only |

---

## Task 1: Extend AppButton.vue

**Files:**
- Modify: `src/components/atoms/AppButton.vue`

- [ ] **Step 1: Replace the template with three-branch render**

Replace the entire `<template>` block with:

```html
<template>
  <a
    v-if="href"
    :href="href"
    :target="target"
    rel="noopener noreferrer"
    :class="['app-btn', `app-btn--${variant}`, `app-btn--${size}`, { 'app-btn--full': full }]"
    v-bind="$attrs"
  ><slot /></a>
  <RouterLink
    v-else-if="to"
    :to="to"
    :class="['app-btn', `app-btn--${variant}`, `app-btn--${size}`, { 'app-btn--full': full }]"
    v-bind="$attrs"
  ><slot /></RouterLink>
  <button
    v-else
    :type="type"
    :class="['app-btn', `app-btn--${variant}`, `app-btn--${size}`, { 'app-btn--full': full }]"
    v-bind="$attrs"
  ><slot /></button>
</template>
```

- [ ] **Step 2: Update the script block**

Replace the entire `<script setup lang="ts">` block with:

```ts
<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineOptions({ inheritAttrs: false })

withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  href?: string
  target?: string
  type?: 'button' | 'submit'
  full?: boolean
}>(), {
  variant: 'primary',
  size: 'md',
  target: '_blank',
  type: 'button',
  full: false,
})
</script>
```

- [ ] **Step 3: Add `lg` size and update secondary hover in the `<style>` block**

After `.app-btn--sm { ... }`, add:

```css
/* Size: lg — for prominent CTAs */
.app-btn--lg {
  padding: 14px 32px;
  font-size: 1rem;
}
```

Replace `.app-btn--secondary:hover` and `.app-btn--secondary:active` with:

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

- [ ] **Step 4: Verify in browser**

Start dev server (`npm run dev`) and open any page with a secondary button. Hover over it — should turn solid lake-blue with white text.

- [ ] **Step 5: Commit**

```bash
git add src/components/atoms/AppButton.vue
git commit -m "feat: extend AppButton with href, lg size, and unified secondary hover"
```

---

## Task 2: Clean up HeroSection.vue

**Files:**
- Modify: `src/components/organisms/HeroSection.vue`

- [ ] **Step 1: Delete the `:deep()` override block**

Remove lines 96–114 entirely (the block starting with `/* Override AppButton padding for hero CTA */`):

```css
/* DELETE this entire block */
/* Override AppButton padding for hero CTA */
.hero__content :deep(.app-btn--secondary) {
  padding: 0 16px;
  height: 48px;
  font-size: 0.875rem;
  align-self: flex-start;
}

.hero__content :deep(.app-btn--secondary:hover) {
  background: var(--lake-blue-600);
  border-color: var(--lake-blue-600);
  color: var(--neutral-0);
}

.hero__content :deep(.app-btn--secondary:active) {
  background: var(--lake-blue-700);
  border-color: var(--lake-blue-700);
  color: var(--neutral-0);
}
```

The `<AppButton>` in the template needs no change — it already has no `size` prop (defaults to `md`).

- [ ] **Step 2: Verify in browser**

Open the home page. The Learn More button should render at `md` size (~39px height) with solid blue hover.

- [ ] **Step 3: Commit**

```bash
git add src/components/organisms/HeroSection.vue
git commit -m "refactor: remove :deep() AppButton override in HeroSection"
```

---

## Task 3: Fix ProjectCard.vue

**Files:**
- Modify: `src/components/molecules/ProjectCard.vue`

- [ ] **Step 1: Update the AppButton call**

Replace the current AppButton block:

```html
<AppButton
  v-if="project.liveUrl"
  variant="secondary"
  size="sm"
  :to="project.liveUrl"
  :aria-label="`查看 ${project.title} 真實專案`"
  target="_blank"
  rel="noopener noreferrer"
  class="project-card__live-btn"
>
```

With:

```html
<AppButton
  v-if="project.liveUrl"
  variant="secondary"
  size="md"
  :href="project.liveUrl"
  :aria-label="`查看 ${project.title} 真實專案`"
  class="project-card__live-btn"
>
```

- [ ] **Step 2: Verify in browser**

Open the projects page or home page. Project cards with a live URL should show a `md`-sized secondary button. Clicking should open the external URL in a new tab.

- [ ] **Step 3: Commit**

```bash
git add src/components/molecules/ProjectCard.vue
git commit -m "refactor: use AppButton href for external link in ProjectCard"
```

---

## Task 4: Fix ProjectDetailView.vue

**Files:**
- Modify: `src/views/ProjectDetailView.vue`

- [ ] **Step 1: Replace the raw `<a>` with AppButton**

Replace:

```html
<a
  v-if="project.liveUrl"
  :href="project.liveUrl"
  target="_blank"
  rel="noopener noreferrer"
  class="project-detail__live-btn"
  :aria-label="`查看 ${project.title} 真實專案`"
>
  View Live
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M15 3h6v6"/>
    <path d="M10 14 21 3"/>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
  </svg>
</a>
```

With:

```html
<AppButton
  v-if="project.liveUrl"
  variant="secondary"
  size="lg"
  :href="project.liveUrl"
  :aria-label="`查看 ${project.title} 真實專案`"
  class="project-detail__live-btn"
>
  View Live
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M15 3h6v6"/>
    <path d="M10 14 21 3"/>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
  </svg>
</AppButton>
```

- [ ] **Step 2: Strip `.project-detail__live-btn` CSS to layout-only**

Replace the entire `.project-detail__live-btn` and `.project-detail__live-btn:hover` blocks with a single layout-only rule:

```css
.project-detail__live-btn {
  margin-bottom: 6px;
}
```

(The `margin-bottom` preserves vertical alignment against the `h1` in the `flex-end` title row. All other styling now comes from AppButton.)

- [ ] **Step 3: Verify in browser**

Open a project detail page that has a `liveUrl`. The View Live button should appear as `lg` size, secondary style, with solid blue hover, and open the correct URL in a new tab.

- [ ] **Step 4: Commit**

```bash
git add src/views/ProjectDetailView.vue
git commit -m "refactor: replace raw <a> live button with AppButton in ProjectDetailView"
```
