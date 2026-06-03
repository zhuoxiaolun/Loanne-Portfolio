# Loanne Portfolio

UX Designer 作品集網站。純前端靜態站，使用 Vue 3 + Vite + vue-router 建置，部署於 Cloudflare Pages。

## 技術棧

- **Vue 3** (Composition API) + **TypeScript**
- **Vite** — 開發伺服器與打包
- **vue-router** — 採用 `createWebHistory`（HTML5 history 模式）
- 圖片等大型資產托管於 **Cloudflare R2**（見 `src/config/assets.ts`）

## 本地開發

```bash
npm install
npm run dev        # 啟動開發伺服器
npm run build      # 型別檢查 (vue-tsc) + 打包至 dist/
npm run preview    # 預覽 production build
```

## 部署（Cloudflare Pages）

網站以 **Wrangler Direct Upload** 部署，不經過 GitHub。

- 正式網址：https://loanne-portfolio.pages.dev
- Cloudflare Pages 專案名稱：`loanne-portfolio`（production branch: `main`）

### 更新與重新部署

```bash
npm run build
npx wrangler pages deploy dist --project-name=loanne-portfolio
```

### 首次設定（已完成，僅供參考）

```bash
npx wrangler pages project create loanne-portfolio --production-branch=main
npx wrangler pages deploy dist --project-name=loanne-portfolio
```

### SPA 路由

因使用 history 模式，`public/_redirects` 設定了 fallback，讓深層路由（如 `/about`、`/projects/:id`）直接訪問時不會 404：

```
/*    /index.html   200
```

此檔會在 build 時自動複製進 `dist/`。

## 環境變數

| 變數 | 說明 |
|------|------|
| `VITE_ASSET_BASE_URL` | 覆寫資產基底 URL（預設指向 Cloudflare R2 bucket）。可於 build 時設定為自訂 CDN 網域。 |
