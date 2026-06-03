import { asset } from '@/config/assets'

// Shopping 頻道 banner images (1920×1080)
const shop01 = asset('b-04-shop-01.png')
const shop02 = asset('b-04-shop-02.png')
const shop03 = asset('b-04-shop-03.png')
const shop04 = asset('b-04-shop-04.png')
const shop05 = asset('b-04-shop-05.png')
const shop06 = asset('b-04-shop-06.png')
const shop07 = asset('b-04-shop-07.png')
const shop09 = asset('b-04-shop-08.png')
const shop10 = asset('b-04-shop-09.png')
const shop11 = asset('b-04-shop-10.png')
const shopNew1 = asset('b-04-shop-11.png')
const shopNew2 = asset('b-04-shop-12.png')

// 風格學院 banner images (1200×675)
const style01 = asset('b-04-style-01.png')
const style02 = asset('b-04-style-02.png')
const style03 = asset('b-04-style-03.png')
const style04 = asset('b-04-style-04.png')
const style05 = asset('b-04-style-05.png')
const style06 = asset('b-04-style-06.png')
const style07 = asset('b-04-style-07.png')
const style08 = asset('b-04-style-08.png')
const style09 = asset('b-04-style-09.png')
const style10 = asset('b-04-style-10.png')
const style11 = asset('b-04-style-11.png')
const style12 = asset('b-04-style-12.png')

export const shoppingImages = [
  shop01,   // 7e580cb1e472...
  shop04,   // 7a9569936f10...
  shop02,   // 9d0d2fd488f3...
  shop06,   // 9b5c0adda86e...
  shopNew1, // 5fb2255ce3a9... (new)
  shop03,   // e6dd2198b7bd...
  shop05,   // 9ac32cab67c3...
  shop09,   // a6ba94694afa...
  shopNew2, // dc51dcfb0971... (new)
  shop11,   // 8772ccb2728a...
  shop10,   // 66d69e664656...
  shop07,   // f1bf9630fbef...
]

export const styleAcademyImages = [
  style01, style02, style03, style04,
  style05, style06, style07, style08,
  style09, style10, style11, style12,
]

// Combined pool for hero collage (interleaved for visual variety)
export const heroCollageImages = [
  shop01, style01, shop04, style02, shop02, style03, shop06, style04,
  shopNew1, style05, shop03, style06, shop05, style07, shop09, style08,
  shopNew2, style09, shop10, style10,
]
