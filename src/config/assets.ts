// Public base URL for static assets hosted on Cloudflare R2 (bucket: loanne-blog).
// Override at build time with VITE_ASSET_BASE_URL (e.g. a custom CDN domain).
const DEFAULT_BASE = 'https://pub-6f5f4452e2d94766b4cca2fadcb7c62a.r2.dev'

const envBase = import.meta.env.VITE_ASSET_BASE_URL as string | undefined

export const ASSET_BASE_URL = (envBase && envBase.length > 0 ? envBase : DEFAULT_BASE).replace(/\/+$/, '')

/** Resolve an asset filename to its full public R2 URL. */
export const asset = (name: string): string => `${ASSET_BASE_URL}/${name}`
