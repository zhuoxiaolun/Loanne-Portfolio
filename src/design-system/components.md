# Component API Reference
Generated: 2026-05-03

---

## Atoms

### AppButton

**Path:** `src/components/atoms/AppButton.vue`
**Purpose:** 主要互動按鈕，支援 RouterLink 或原生 button，三種視覺樣式、兩種尺寸。

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'ghost'` | `'primary'` | 視覺樣式 |
| `size` | `'md' \| 'sm'` | `'md'` | 尺寸。`sm` 用於卡片內嵌或行內連結 |
| `to` | `string` | — | 若提供，渲染為 `<RouterLink>` |
| `type` | `'button' \| 'submit'` | `'button'` | 原生 button type（`to` 存在時忽略）|
| `full` | `boolean` | `false` | 撐滿父容器寬度 |

#### Slots

| Slot | Description |
|------|-------------|
| default | 按鈕文字或內容（可含 icon） |

#### Variants

| Variant | 背景 | 用途 |
|---------|------|------|
| `primary` | cherry-500 | 主要 CTA |
| `secondary` | 透明 + lake-blue 邊框 | 次要行動、連結 |
| `ghost` | 透明，無邊框 | 低強調行動 |

#### Token usage
`--cherry-500/600/700`, `--lake-blue-50/100/500/600/700`, `--neutral-0/50/600/900`, `--spacing-tiny/xxs/xs/s/l`, `--radius-round`, `--font-sans-zh`, `--transition-base`

#### Usage example
```vue
<AppButton variant="primary">送出</AppButton>
<AppButton variant="secondary" to="/projects">查看作品</AppButton>
<AppButton variant="secondary" size="sm" :to="project.liveUrl" target="_blank">
  View Live
</AppButton>
<AppButton variant="ghost">取消</AppButton>
```

---

### AppTag

**Path:** `src/components/atoms/AppTag.vue`
**Purpose:** 標籤標記，用於顯示類別、技能、狀態等標籤文字。

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `'cherry' \| 'lake' \| 'burgundy' \| 'lapis' \| 'neutral'` | `'cherry'` | 色彩主題 |

#### Slots

| Slot | Description |
|------|-------------|
| default | 標籤文字 |

#### Token usage
`--cherry-100/700`, `--lake-blue-100/700`, `--burgundy-50/500`, `--lapis-50/500`, `--neutral-50/700`, `--spacing-tiny/xs`, `--radius-xxs`, `--font-sans-zh`

#### Usage example
```vue
<AppTag color="cherry">UX Research</AppTag>
<AppTag color="lake">Vue.js</AppTag>
<AppTag color="neutral">2024</AppTag>
```

---

### AppDivider

**Path:** `src/components/atoms/AppDivider.vue`
**Purpose:** 水平分隔線，兩種粗細。

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `weight` | `'thin' \| 'base'` | `'thin'` | `thin` 用 neutral-50，`base` 用 neutral-100 |

#### Usage example
```vue
<AppDivider />
<AppDivider weight="base" />
```

---

### AppImage

**Path:** `src/components/atoms/AppImage.vue`
**Purpose:** 帶圖說的圖片，預設 lazy load 與圓角，載入失敗時顯示佔位背景。

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | — | 圖片路徑（必填） |
| `alt` | `string` | — | 替代文字（必填） |
| `caption` | `string` | — | 圖說文字（選填） |
| `rounded` | `boolean` | `true` | 是否套用 `--radius-l` 圓角 |
| `lazy` | `boolean` | `true` | 是否 lazy load |

#### Token usage
`--neutral-50/600`, `--radius-l`, `--spacing-xs`

#### Usage example
```vue
<AppImage src="/img/hero.jpg" alt="Hero image" caption="2024 作品集封面" />
<AppImage src="/img/diagram.png" alt="流程圖" :rounded="false" />
```

---

## Molecules

### SectionTitle

**Path:** `src/components/molecules/SectionTitle.vue`
**Purpose:** 段落標題區塊，含 eyebrow 小標、主標題、sub 說明文字，支援語意 heading level 與對齊方式。

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `eyebrow` | `string` | — | 主標題上方的小標（serif italic）|
| `sub` | `string` | — | 主標題下方的說明文字 |
| `level` | `'h1' \| 'h2' \| 'h3'` | `'h2'` | 語意 heading 標籤 |
| `size` | `'display' \| 'h1' \| 'h2' \| 'h3'` | `'h2'` | 視覺字級（可與 `level` 獨立設定）|
| `align` | `'left' \| 'center'` | `'left'` | 對齊方式 |

#### Slots

| Slot | Description |
|------|-------------|
| default | 主標題文字 |

#### Token usage
`--font-serif-en`, `--cherry-600`, `--neutral-600/900`, `--spacing-xs/xxs`

#### Usage example
```vue
<SectionTitle eyebrow="Selected Work" sub="涵蓋 UX 研究、介面設計與前端實作">
  作品集
</SectionTitle>

<SectionTitle level="h1" size="display" align="center">
  Hello, I'm Loanne
</SectionTitle>
```

---

### ProjectCard

**Path:** `src/components/molecules/ProjectCard.vue`
**Purpose:** 專案卡片，兩種版型：`banner`（首頁橫幅列表）和 `grid`（分類列表格狀）。

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `project` | `Project` | — | 專案資料物件（必填），型別見 `src/types` |
| `variant` | `'banner' \| 'grid'` | `'banner'` | 版型 |

#### Token usage
`--neutral-0/50/100/300/600/900`, `--rose-200`, `--lake-blue-50/500/600/700`, `--shadow-hover`, `--radius-m/l`, `--spacing-xs/s/l`, `--font-sans-zh`, `--transition-base`

#### Usage example
```vue
<ProjectCard :project="project" variant="banner" />
<ProjectCard :project="project" variant="grid" />
```

---

### MetaItem

**Path:** `src/components/molecules/MetaItem.vue`
**Purpose:** 專案 meta 資訊的 key-value 顯示，用於專案詳情頁的 `<dl>` 列表。

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | 欄位名稱（大寫 caption style）（必填） |
| `value` | `string` | — | 欄位值（必填） |

#### Token usage
`--neutral-500/900`, `--font-sans-zh`, `--spacing-tiny`

#### Usage example
```vue
<dl>
  <MetaItem label="Role" value="UX Designer" />
  <MetaItem label="Year" value="2024" />
  <MetaItem label="Duration" value="3 months" />
</dl>
```

---

### ContentBlock

**Path:** `src/components/molecules/ContentBlock.vue`
**Purpose:** 專案詳情頁的內容渲染器，根據 `block.type` 渲染不同結構：`text`、`image`、`gallery`、`table`、`strategy`。

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `block` | `ContentBlock` | — | 內容物件（必填），型別見 `src/types` |

#### Block types

| type | 描述 |
|------|------|
| `text` | 文字段落，支援 heading、subtitle、body（含 bullet/numbered list 解析）|
| `image` | 單張圖片，委派給 `AppImage` |
| `gallery` | 多張圖片直排 |
| `table` | columns + rows 表格 |
| `strategy` | 3 欄策略數字列表（numbered + title + body）|

**text block 的 `large` 屬性：** 設為 `true` 時套用較大 editorial 字級（主視覺段落用）

#### Token usage
`--neutral-50/100/500/600/700/800/900`, `--cherry-50/500`, `--font-sans-zh/serif-en`, `--spacing-xs/s/m/l/xl`, `--radius-m`

---

### AppNavBar

**Path:** `src/components/molecules/AppNavBar.vue`
**Purpose:** 全域頂部導覽列，含 desktop nav links、mobile hamburger + drawer。scroll 後觸發 glass blur 效果。

#### Slots
無（nav links 為 hardcoded，不接受 slot）

#### Behavior
- scroll > 20px → `.navbar--scrolled`：白色玻璃背景 + bottom border
- mobile (≤ 640px) → 隱藏 desktop nav，顯示 hamburger，點擊展開右側 drawer

---

### AppFooter

**Path:** `src/components/molecules/AppFooter.vue`
**Purpose:** 全域底部，顯示 email contact 與 nav links，背景透明（繼承頁面漸層）。

#### Slots
無

---

## Organisms（高層級說明）

### HeroSection
首頁 Hero 區塊，含大標、副標、CTA 按鈕與封面圖。

### ProjectGrid
專案列表網格，渲染多個 `ProjectCard`。

### BannerHeroCollage、BannerDesignDetail
專案詳情頁頂部 banner，collage 為多圖拼貼版，detail 為單圖版。

### ZeroToOneDetail、PinkrunDetail、SakeUnionDetail
個別專案的客製化詳情 organism，包含專屬 layout 與內容。

### SpecialSection
首頁特殊亮點區塊。
