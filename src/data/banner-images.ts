// Shopping 頻道 banner images (1920×1080)
import shop01 from '@/assets/7e580cb1e472c24050e68d9494dd5af8d1144ef6.png'
import shop02 from '@/assets/9d0d2fd488f398ba6f8dce4941c2bfc13e1ea40f.png'
import shop03 from '@/assets/e6dd2198b7bd028ce27d8ba397d5e07504344562.png'
import shop04 from '@/assets/7a9569936f101135f79fac546c95e049959f1bc9.png'
import shop05 from '@/assets/9ac32cab67c394a7d871095ca80c1e800b7f1979.png'
import shop06 from '@/assets/9b5c0adda86eacd02d5d2e6b163e3e61f62c31f2.png'
import shop07 from '@/assets/f1bf9630fbeffe59270895470254c689b67fbcfc.png'
import shop09 from '@/assets/a6ba94694afa175f2623d0b61b664eb4cdf439da.png'
import shop10 from '@/assets/66d69e664656bd9a3af759a5ed20dfe2b527cada.png'
import shop11 from '@/assets/8772ccb2728a16f0e5461b4c22e207b52a459418.png'
import shopNew1 from '@/assets/5fb2255ce3a9187526439ea2a61328d996c38abc.png'
import shopNew2 from '@/assets/dc51dcfb09718a8dd35c963aeb34064fd882b7c3.png'

// 風格學院 banner images (1200×675)
import style01 from '@/assets/2dc8dc55e5c34248a1c8af4c93bba20207b6e2aa.png'
import style02 from '@/assets/d2f9a495a2258655fd9ab3a41c6ad770efedb6e6.png'
import style03 from '@/assets/ee5fb48bda7ebc389549c22bc0f3d39d5bb8f132.png'
import style04 from '@/assets/a323cb99928e089046a145c4108f66c9b29c3d5d.png'
import style05 from '@/assets/0c8244cfa36ae7c59e0d1cf01d0c5808ec677247.png'
import style06 from '@/assets/3fbf65408dd489af3eafe59bfc2eababd5c3bbcb.png'
import style07 from '@/assets/467437e3d2d8c90f0c18ca3da154087bce184be4.png'
import style08 from '@/assets/b6dfbadf3dc18ac3ab99061be3dc4841772b7c82.png'
import style09 from '@/assets/b641bb46ace731d0d6ab0a680457581bed54789f.png'
import style10 from '@/assets/d9d8697b1d752903e66843bf7660ffe6cd577bbb.png'
import style11 from '@/assets/63995e82152cf28cfd5fccd7609307ce430a0e1b.png'
import style12 from '@/assets/ddcb1512a5cb21e7bac3ca72a22aeb3d96700601.png'

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
