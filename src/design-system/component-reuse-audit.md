# Component Reuse Audit — Button Consistency
Generated: 2026-05-03

目標：確保所有互動按鈕都使用 `AppButton`，hover/active 行為一致，視覺語言統一。

---

## 🔴 高嚴重度

### `.project-card__live-btn` — ProjectCard.vue

**位置:** `src/components/molecules/ProjectCard.vue` (line 19–33, style line 79–103)
**Element:** `<a>` 被手寫成 button 樣式
**問題:** 完全獨立實作，hover 行為與 `AppButton` 不同

| 項目 | 手寫版 | AppButton secondary |
|------|--------|---------------------|
| hover 背景 | `var(--lake-blue-600)` 填滿 | `var(--lake-blue-50)` 淺色 |
| hover 文字色 | `var(--neutral-0)` 白色 | `var(--lake-blue-700)` 深藍 |
| active 狀態 | 無 | `var(--lake-blue-100)` |
| padding | `6px 20px`（hardcode） | `var(--spacing-s) var(--spacing-l)` |
| font-size | `0.8125rem`（hardcode） | `0.9375rem` |

**✅ 已修復：** 改用 `<AppButton variant="secondary" size="sm">` — 見下方說明

---

## 🟡 中嚴重度

### `.navbar__link` — AppNavBar.vue

**位置:** `src/components/molecules/AppNavBar.vue`
**Element:** `<RouterLink>` 和 `<a>` 作為 nav link
**問題:** hover 視覺語言是 lake-blue tinted background，與 AppButton 不同
**判斷:** ✅ 可接受 — 這是導覽連結，不是 CTA 按鈕，不需統一成 AppButton

---

## 🟢 低嚴重度 / 可接受

### `<button class="navbar__hamburger">` — AppNavBar.vue

**問題:** 原生 button，無 AppButton
**判斷:** ✅ 可接受 — hamburger 是 UI 控制元件，有自己的幾何與動畫，不應套用 AppButton

### `<a class="footer__email">` — AppFooter.vue

**問題:** email 連結，有自己的 hover 顏色
**判斷:** ✅ 可接受 — 內文連結，非 CTA 按鈕

---

## 修復說明 — AppButton 加上 size="sm"

為了讓 `.project-card__live-btn` 可以改用 `AppButton`，在 AppButton 新增 `size` prop：

| Size | padding | font-size |
|------|---------|-----------|
| `md`（預設）| `var(--spacing-s) var(--spacing-l)` = 12px 24px | `0.9375rem` |
| `sm` | `var(--spacing-xxs) var(--spacing-l)` = 4px 24px | `0.875rem` |

**使用方式（ProjectCard 內）：**
```vue
<AppButton
  variant="secondary"
  size="sm"
  :to="project.liveUrl"
  target="_blank"
  rel="noopener noreferrer"
>
  View Live
  <svg .../>
</AppButton>
```

---

## 規則：未來新增按鈕時

1. **任何觸發行動的按鈕** → 使用 `<AppButton>`，選擇對應 variant
2. **導覽連結**（nav, footer）→ 直接用 `<RouterLink>` 或 `<a>`，套用該 component 的 link class
3. **特殊 UI 控制**（hamburger、toggle、close）→ 原生 `<button>`，自行定義 style，不用 AppButton
4. **不要在 organism 或 molecule 內手寫 button 樣式** — 一律用 AppButton 組合

這樣能確保：primary / secondary / ghost 三種 CTA 行為在整個網站保持一致的 hover、active、focus 狀態。
