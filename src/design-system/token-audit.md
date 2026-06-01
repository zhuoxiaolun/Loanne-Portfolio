# Token Compliance Audit
Generated: 2026-05-03

## Summary
- Components scanned: 9
- Fully compliant: 3 (AppDivider, AppImage, AppFooter)
- Need attention: 6
- Recurring hardcoded value: `0.9375rem` 出現在 4 個 components → 建議新增 `--text-size-ui` token

---

## AppButton ✅ 大致合規，一個建議

**Path:** `src/components/atoms/AppButton.vue`

| Selector | Property | Value | 說明 |
|----------|----------|-------|------|
| `.app-btn` | `font-size` | `0.9375rem` | 跨 4 個 component 重複出現，建議新增 `--text-size-ui: 0.9375rem` |
| `.app-btn` | `border` | `1.5px solid` | border-width 可接受 hardcode |

---

## AppTag ⚠️

**Path:** `src/components/atoms/AppTag.vue`

| Selector | Property | Value | 建議 token |
|----------|----------|-------|-----------|
| `.app-tag` | `font-size` | `0.75rem` | `var(--text-size-caption)` 或直接套用 `.text-caption` class |

**Typography:** 定義自己的 `font-size: 0.75rem` — 可改用 global `.text-caption` class

---

## AppNavBar ⚠️⚠️

**Path:** `src/components/molecules/AppNavBar.vue`

| Selector | Property | Value | 建議 token |
|----------|----------|-------|-----------|
| `.navbar__logo` | `gap` | `6px` | `var(--spacing-xxs)`（4px，近似可接受）|
| `.navbar__logo-en` | `font-size` | `2rem` | 建議新增 `--text-size-logo` token |
| `.navbar__logo-en` | `letter-spacing` | `0.01em` | 建議新增 `--letter-spacing-logo` token |
| `.navbar__link` | `font-size` | `1.375rem` | 跨 NavBar/Footer 重複，建議新增 `--text-size-nav` token |
| `.navbar__hamburger` | `gap` | `5px` | `var(--spacing-tiny)` |
| `.navbar--scrolled` | `background` | `rgba(255,255,255,0.92)` | 建議新增 `--color-surface-glass` token |
| `.navbar__link:hover` | `background` | `rgba(204,217,239,0.5)` | 建議新增 `--lake-blue-hover-bg` token |
| `.navbar__drawer` | `background` | `#fff` | `var(--neutral-0)` |
| `.navbar__drawer` | `padding-top` | `80px` | `var(--spacing-5xl)` ← token 已存在！ |
| `.navbar__overlay` | `background` | `rgba(0,0,0,0.3)` | 建議新增 `--color-overlay` token |

**可接受的 hardcode:**
- Hamburger span 尺寸（`22px`, `2px`, `36px`）— UI 控制專用幾何，不 tokenize
- transition `0.25s`/`0.3s` — drawer/overlay 動畫，有別於 base transition 是刻意設計

---

## ProjectCard ⚠️⚠️

**Path:** `src/components/molecules/ProjectCard.vue`

| Selector | Property | Value | 建議 token |
|----------|----------|-------|-----------|
| `.project-card__live-btn` | `gap` | `5px` | `var(--spacing-tiny)` |
| `.project-card__live-btn` | `padding` | `6px 20px` | 6px 無對應 token → 已透過 AppButton `size="sm"` 解決 |
| `.project-card__live-btn` | `margin-top` | `8px` | `var(--spacing-xs)` |
| `.project-card__live-btn` | `font-size` | `0.8125rem` | 無對應 token，建議新增 `--text-size-xs: 0.8125rem` |
| `.project-card__image` | `transition` | `300ms ease` | transition duration 與 `--transition-base`（200ms）不一致 |

> **⚠️ 元件重用問題：** `.project-card__live-btn` 已透過 Output D 處理，改用 `<AppButton size="sm" variant="secondary">`

---

## SectionTitle ⚠️

**Path:** `src/components/molecules/SectionTitle.vue`

| Selector | Property | Value | 建議 token |
|----------|----------|-------|-----------|
| `.section-title__eyebrow` | `font-size` | `0.9375rem` | `var(--text-size-ui)` |
| `.section-title__eyebrow` | `letter-spacing` | `0.06em` | 建議新增 `--letter-spacing-eyebrow: 0.06em` |

---

## MetaItem ⚠️

**Path:** `src/components/molecules/MetaItem.vue`

| Selector | Property | Value | 建議 token |
|----------|----------|-------|-----------|
| `.meta-item__label` | `font-size` | `0.6875rem` | 無對應 token，比 `.text-caption`（0.75rem）更小，建議新增 `--text-size-2xs: 0.6875rem` |
| `.meta-item__label` | `letter-spacing` | `0.08em` | 建議新增 `--letter-spacing-label: 0.08em` |
| `.meta-item__value` | `font-size` | `0.9375rem` | `var(--text-size-ui)` |

---

## ContentBlock ⚠️

**Path:** `src/components/molecules/ContentBlock.vue`

| Selector | Property | Value | 建議 |
|----------|----------|-------|------|
| `.section-label` | `font-size` | `0.875rem` | 可套用 `.text-small` class |
| `.content-block__body` | `line-height` | `1.85` | 與 body line-height（1.8）略有差異，建議統一或新增 token |
| `.content-block__table` | `font-size` | `0.9375rem` | `var(--text-size-ui)` |
| `.strategy-body` | `font-size` | `0.9375rem` | `var(--text-size-ui)` |

**可接受的 hardcode:**
- `clamp()` 內的 responsive sizes — 刻意的 responsive 設計
- `padding-left: 1.5em` — relative unit，跟隨 font-size

---

## 建議新增的 Tokens

將以下值加入 `tokens.css` 可解決大部分殘餘問題：

```css
/* Typography sizes */
--text-size-ui:   0.9375rem;  /* buttons, eyebrows, table, strategy body */
--text-size-xs:   0.8125rem;  /* small button label */
--text-size-2xs:  0.6875rem;  /* meta label */

/* Letter spacing */
--letter-spacing-eyebrow: 0.06em;
--letter-spacing-label:   0.08em;
--letter-spacing-logo:    0.01em;

/* Navigation */
--text-size-nav:  1.375rem;   /* nav/footer links */
--text-size-logo: 2rem;       /* navbar logo */

/* Surface colors */
--color-surface-glass: rgba(255, 255, 255, 0.92);
--lake-blue-hover-bg:  rgba(204, 217, 239, 0.5);
--color-overlay:       rgba(0, 0, 0, 0.3);
```
