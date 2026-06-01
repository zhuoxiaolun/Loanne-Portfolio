<template>
  <article class="pc-article">

    <!-- 專案概述 -->
    <section class="pc-section">
      <p class="section-label">專案概述</p>
      <div class="pc-overview-grid">
        <div class="pc-overview-item">
          <p class="overview-num">01</p>
          <h3 class="overview-title">Objective</h3>
          <p class="section-body">讓拼貼趣不僅僅是一個照片拼貼工具，在提升使用者黏著度與使用頻率的同時，為使用者帶來更多價值。並且跳脫拼貼趣現有的框架與商業模式，產出一個具有創新及未來感的解決方案。</p>
        </div>
        <div class="pc-overview-item">
          <p class="overview-num">02</p>
          <h3 class="overview-title">Role &amp; Deliverables</h3>
          <p class="section-body">在這個專案中，我和其他來自不同背景的 5 位組員密切合作。我參與 UXR 和 UI 設計流程與產出。</p>
        </div>
        <div class="pc-overview-item">
          <p class="overview-num">03</p>
          <h3 class="overview-title">Challenges</h3>
          <p class="section-body">這個專案必須在短時間內瞭解公司內部相關數據並做出決策，同時需要處理許多任務優先級，確保能夠精準達成「如何讓拼貼趣不僅僅是一個照片拼貼工具，並在提升使用者黏著度與使用頻率的同時，為使用者帶來更多價值？」的目標。</p>
        </div>
      </div>
      <div class="pc-image">
        <img :src="img01" alt="專案概述" />
      </div>
    </section>

    <!-- 專案背景 -->
    <section class="pc-section">
      <p class="section-label">專案背景</p>
      <h2 class="section-subtitle">2% 訂閱用戶撐起 95% 營收——如何在提升使用頻率與黏著度的同時，強化市場競爭力</h2>
      <p class="section-body">PicCollage 是影像編輯工具，具備多元素材、個性化工具與 AI 功能，累積 10 年歷史、3 億下載。目前月活躍用戶 1500 萬（70-80% 為女性，主要分布歐美），用戶在生日、畢業、記錄寵物與孩子成長等重要時刻使用，並透過 WhatsApp 和 Instagram Stories 分享。用戶可分為 5% 高黏著度創作者與 95% 關係連結者。</p>
      <p class="section-body">產品採訂閱制，雖訂閱用戶僅占 2%，卻貢獻 95% 營收。核心挑戰：如何在提升使用頻率與黏著度的同時，強化市場競爭力，讓 PicCollage 成為超越照片拼貼的核心工具。</p>
      <div class="pc-image">
        <img :src="img02" alt="專案背景" />
      </div>
    </section>

    <!-- 使用者研究 -->
    <section class="pc-section">
      <p class="section-label">使用者研究</p>
      <h2 class="section-subtitle">面對問卷困難與樣本稀缺，透過 App 評論、桌面研究與親和圖多角定義核心用戶問題</h2>
      <p class="section-body">在專案的前期，我們進行了用戶研究來定義核心的用戶問題，以及更了解用戶如何去理解我們的產品。研究過程包含了歐美問卷發放困難外，台灣地區亦難以找到目標用戶。為了補足研究數據，我們進一步參考了桌面研究和 App Store 的評論，並進行洞察分析。</p>
      <div class="pc-image">
        <img :src="img03" alt="使用者研究" />
      </div>

      <div class="pc-insights">
        <p class="section-label">使用者洞察</p>
        <div class="pc-insight">
          <span class="insight-num">1</span>
          <div>
            <strong class="insight-title">產品「侷限」阻礙使用者持續探索</strong>
            <p class="section-body">用戶認為 PicCollage 在功能吸引力不足、使用體驗受限、使用情境單一等方面存在侷限，難以滿足他們的創作需求，進而影響了他們的使用頻率與黏著度。</p>
          </div>
        </div>
        <div class="pc-insight">
          <span class="insight-num">2</span>
          <div>
            <strong class="insight-title">貼紙和模板是核心吸引力，卻侷限於節日一次性訂閱</strong>
            <p class="section-body">研究發現貼紙和模板功能最吸引用戶，但使用場景集中在生日、畢業等特定節日，導致訂閱具季節性而非全年持續性。</p>
          </div>
        </div>
        <div class="pc-insight">
          <span class="insight-num">3</span>
          <div>
            <strong class="insight-title">免費與付費貼紙混亂，用戶渴望快速篩選機制</strong>
            <p class="section-body">用戶反映免費和 VIP 貼紙混在一起造成困擾，期望有篩選功能讓用戶清楚區別並快速找到需要的貼紙。</p>
          </div>
        </div>
        <div class="pc-insight">
          <span class="insight-num">4</span>
          <div>
            <strong class="insight-title">功能層級過深，複雜操作流程降低易用性</strong>
            <p class="section-body">用戶指出功能結構層級過多，導致操作路徑冗長，反而增加使用不便與學習成本。</p>
          </div>
        </div>
        <blockquote class="pc-finding">
          <strong>Key Finding：</strong>用戶面臨用戶引導不足、工具定位侷限、廣告干擾與操作效率低下等挑戰，影響使用體驗及用戶黏性。
        </blockquote>
      </div>
      <div class="pc-image">
        <img :src="img04" alt="使用者洞察分析" />
      </div>
    </section>

    <!-- 核心問題 -->
    <section class="pc-section">
      <p class="section-label">核心問題</p>
      <div class="pc-problem-grid">
        <div class="pc-problem-item">
          <span class="problem-num">01</span>
          <h3 class="problem-title">功能與層級分類不順暢</h3>
          <p class="section-body">用戶在尋找素材和工具時容易迷失，影響操作效率與體驗流暢度。</p>
        </div>
        <div class="pc-problem-item">
          <span class="problem-num">02</span>
          <h3 class="problem-title">缺乏日常使用與長期訂閱動機</h3>
          <p class="section-body">PicCollage 主要被認為是特定用途工具，難以融入日常生活或吸引長期使用。</p>
        </div>
        <div class="pc-problem-item">
          <span class="problem-num">03</span>
          <h3 class="problem-title">訂閱廣告呈現訂閱動機低</h3>
          <p class="section-body">廣告未充分展現 VIP 的核心價值與用戶能獲得的實際利益，導致吸引力不足。</p>
        </div>
      </div>
      <div class="pc-image">
        <img :src="img05" alt="核心問題" />
      </div>
    </section>

    <!-- 設計目標 -->
    <section class="pc-section">
      <p class="section-label">設計目標</p>
      <h2 class="section-subtitle">從新用戶到訂閱用戶，透過漸進式體驗與價值發現驅動轉化</h2>
      <p class="section-body">以新增活躍用戶與 Weekly Retention 為核心指標，建立新用戶 → 復活用戶 → 現有用戶 → 訂閱用戶的動機價值循環。策略上提升免費用戶體驗，並創造試用 VIP 功能的機會，讓用戶感受會員價值、逐步形成依賴，進而提高付費轉化率與商業增長。</p>
      <div class="pc-image">
        <img :src="img06" alt="設計目標" />
      </div>
    </section>

    <!-- 設計方向 -->
    <section class="pc-section">
      <p class="section-label">設計方向</p>
      <div class="pc-directions">
        <div class="pc-direction">
          <span class="direction-num">01</span>
          <div>
            <h3 class="direction-title">更清晰的分類功能與頁面的層級</h3>
            <p class="section-body">商店與首頁頁面過多影響了創作效率，變成將各頁面關鍵功能拉出呈現，提升用戶的操作效率，從而提高創作效率，使用戶能夠更快找到所需內容。</p>
          </div>
        </div>
        <div class="pc-direction">
          <span class="direction-num">02</span>
          <div>
            <h3 class="direction-title">更豐富的主題挑戰與日常使用情境</h3>
            <p class="section-body">為提升使用者的參與意願與創作動力，推出每週不同主題的挑戰，鼓勵使用者嘗試多樣化的拼貼風格與內容以獲得免費素材，激發更多創作靈感。透過定期更新的挑戰，逐步培養使用者的日常創作習慣，營造持續互動的使用情境，進一步提升平台的黏著度與使用頻率。</p>
          </div>
        </div>
        <div class="pc-direction">
          <span class="direction-num">03</span>
          <div>
            <h3 class="direction-title">更加準確的廣告資訊</h3>
            <p class="section-body">原本 VIP 訂閱功能和權益展示隱藏不明，提示不夠明顯，對免費用戶吸引力不足，變成清晰標示定價差異、加入更多訂閱功能介紹和用戶好評等等，提高了透明度和信任感。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 設計原則 -->
    <section class="pc-section">
      <p class="section-label">設計原則</p>
      <div class="pc-image">
        <img :src="img08" alt="設計原則" />
      </div>
      <p class="section-body">根據 PicCollage 原有的設計基礎，進行品牌用色的優化，考量用戶使用時的視覺呈現原則與功能優先級排序，重新調整品牌用色與一致性。</p>
      <div class="pc-principles">
        <div class="pc-principle">
          <strong class="principle-title">Magic</strong>
          <p class="section-body">我們將 Magic Feature 定位為核心亮點，基於原有的配色基礎，讓使用者在操作過程中一眼識別相關功能，提升整體的使用體驗和品牌一致性。</p>
        </div>
        <div class="pc-principle">
          <strong class="principle-title">VIP</strong>
          <p class="section-body">原本的 VIP 色彩帶有「金沙」質感，在手機螢幕上細節容易流失，導致整體視覺效果凌亂且缺乏精緻感。我們仍以金色傳達尊貴感，採用漸層黃色搭配適度的光影效果，讓顏色更平面化且簡潔，同時保留金色的高級與辨識度，提升在介面中的視覺表現。</p>
        </div>
      </div>
      <div class="pc-image">
        <img :src="img09" alt="VIP 設計原則" />
      </div>
    </section>

    <!-- 設計產出 -->
    <section class="pc-section">
      <p class="section-label">設計產出</p>

      <!-- 01 首頁 -->
      <div class="pc-output">
        <div class="pc-output__header">
          <span class="output-num">01</span>
          <div>
            <h3 class="output-title">將隱藏功能拉出首頁，減少層級、加速內容發現</h3>
            <p class="section-body">原本首頁設計以簡潔俐落為主，將各功能隱藏在層級結構中，雖然視覺上更簡單，但對部分使用者來說操作更為複雜，影響了效率。因此，在此次改版中，將首頁的關鍵功能直接拉出呈現，並新增以下內容：</p>
            <ol class="output-list">
              <li><strong>任務挑戰</strong>：提升用戶參與度與創作動力。</li>
              <li><strong>新功能介紹</strong>：幫助用戶快速掌握最新更新內容。</li>
              <li><strong>Blog</strong>：提供更多靈感與技巧分享。</li>
            </ol>
          </div>
        </div>
        <div class="pc-video-pair">
          <div class="pc-video-item">
            <span class="video-label">Before</span>
            <video autoplay loop muted playsinline :style="mixedVideoStyle">
              <source :src="vid1" type="video/mp4" />
            </video>
          </div>
          <div class="pc-video-item">
            <span class="video-label">After</span>
            <video autoplay loop muted playsinline :style="mixedVideoStyle">
              <source :src="vid2" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <!-- 01-2 分類呈現 -->
      <div class="pc-output">
        <div class="pc-output__header">
          <span class="output-num">01-2</span>
          <div>
            <h3 class="output-title">強化分類呈現與內容管理，加速用戶內容發現效率</h3>
            <p class="section-body">原有的分類方式步驟繁瑣，且需要不停向下滑動瀏覽，對用戶造成負擔。通過此次優化，用戶可更快速定位所需內容，提升瀏覽效率與使用體驗。具體優化措施包括：</p>
            <ol class="output-list">
              <li><strong>強化分類呈現方式</strong>：透過 Tabs 切換不同主題分類，減少繁瑣的瀏覽步驟。</li>
              <li><strong>免費素材與模板</strong>：提高其可見性，讓用戶更快找到免費資源。</li>
              <li><strong>已下載內容集中管理</strong>：將已下載的素材統一歸納，方便用戶檢視與重複使用。</li>
            </ol>
          </div>
        </div>
        <div class="pc-image">
          <img :src="img10" alt="強化分類呈現" />
        </div>
      </div>

      <!-- 01-3 編輯器 -->
      <div class="pc-output">
        <div class="pc-output__header">
          <span class="output-num">01-3</span>
          <div>
            <h3 class="output-title">編輯器功能直接展示，消除滑動負擔，提升編輯流暢度</h3>
            <p class="section-body">將編輯器功能從隱藏滑動改為全面展示，讓用戶在直觀介面中快速找到所需工具，消除繁瑣操作步驟，提升操作流暢度、效率與整體使用體驗。</p>
          </div>
        </div>
        <div class="pc-video-pair">
          <div class="pc-video-item">
            <span class="video-label">Before</span>
            <video autoplay loop muted playsinline :style="mixedVideoStyle">
              <source :src="vid03" type="video/mp4" />
            </video>
          </div>
          <div class="pc-video-item">
            <span class="video-label">After</span>
            <video autoplay loop muted playsinline :style="mixedVideoStyle">
              <source :src="vid04" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <!-- 02 主題挑戰 -->
      <div class="pc-output">
        <div class="pc-output__header">
          <span class="output-num">02</span>
          <div>
            <h3 class="output-title">以定期主題挑戰激發創作靈感，用獎勵機制培養日常創作習慣</h3>
            <p class="section-body">推出每週主題挑戰，鼓勵用戶嘗試多樣化創作風格並獲得免費素材，激發創作靈感。透過定期更新的挑戰，逐步培養日常創作習慣，營造持續互動情境，提升平台黏著度與使用頻率。</p>
          </div>
        </div>
        <div class="pc-video-pair">
          <div class="pc-video-item">
            <video autoplay loop muted playsinline :style="mixedVideoStyle">
              <source :src="vid05" type="video/mp4" />
            </video>
          </div>
          <div class="pc-image-item">
            <img ref="mixedImg" :src="img11" alt="主題挑戰介面" @load="syncMixedHeight" />
          </div>
        </div>
      </div>

      <!-- 03 VIP -->
      <div class="pc-output">
        <div class="pc-output__header">
          <span class="output-num">03</span>
          <div>
            <h3 class="output-title">VIP 透明化訂閱功能展示，降低信息不對稱、提高轉化吸引力</h3>
            <p class="section-body">我們重新設計了 VIP 訂閱廣告頁面，針對用戶體驗進行了以下優化：</p>
            <ol class="output-list">
              <li><strong>定價差異化標識</strong>：明確透明地展示不同資費方案，幫助用戶快速理解各方案的權益差異。</li>
              <li><strong>新增訂閱功能詳細說明</strong>：通過圖文並茂的方式，讓用戶更清楚了解訂閱後的功能與權益，提升感知價值。</li>
              <li><strong>用戶好評引用</strong>：引入已付費用戶的真實評價，用實際案例建立信任，增強普通用戶的訂閱信心。</li>
            </ol>
          </div>
        </div>
        <div class="pc-video-pair">
          <div class="pc-video-item">
            <span class="video-label">Before</span>
            <video autoplay loop muted playsinline :style="mixedVideoStyle">
              <source :src="vid06" type="video/mp4" />
            </video>
          </div>
          <div class="pc-video-item">
            <span class="video-label">After</span>
            <video autoplay loop muted playsinline :style="mixedVideoStyle">
              <source :src="vid07" type="video/mp4" />
            </video>
          </div>
        </div>
        <p class="section-body">改善原有 VIP 功能隱藏於上滑動作、缺乏明確提示的設計，讓用戶快速掌握訂閱價值點，進而提升訂閱轉化率與整體體驗。</p>
      </div>
    </section>

    <!-- 挑戰與限制 -->
    <section class="pc-section">
      <p class="section-label">挑戰與限制</p>
      <div class="pc-challenges">
        <div class="pc-challenge">
          <strong class="challenge-title">用戶研究的挑戰</strong>
          <p class="section-body">由於目標用戶主要分布在歐美地區，且對於問卷調查的參與度較低，我們在用戶研究階段面臨了樣本稀缺的問題。為了彌補這一不足，我們採用了多種方法，包括分析 App Store 評論、進行桌面研究以及使用親和圖來深入挖掘用戶的需求和痛點，從而確保我們的設計決策能夠真正反映用戶的需求。</p>
        </div>
        <div class="pc-challenge">
          <strong class="challenge-title">技術上的限制</strong>
          <p class="section-body">我們必須充分考量技術層面與產品超過 10 年的發展歷史，在設計 UI 與制定解決方案時，需進行全面評估，以確保不會產生排擠效應，影響功能或使用體驗的平衡與整體性。</p>
        </div>
      </div>
      <div class="pc-image">
        <img :src="img12" alt="挑戰與限制" />
      </div>
    </section>

    <!-- 學習與心得 -->
    <section class="pc-section">
      <p class="section-label">學習與心得</p>
      <p class="section-body">這是我第一次與志同道合的設計師聚集、互相學習的機會。雖然我們互不認識也不成熟，但團隊中的每位成員都全力以赴，共同面對七週內的挑戰。</p>
      <p class="section-body">在用戶研究階段，我們面臨時差與地域限制，主動克服這些障礙與歐美用戶交流，並透過桌面研究、App Store 評論與親和圖分析補足數據。設計過程中，我們先是陷入「想法過多、方向模糊」的困境，透過優先級分析與助教指導，最終聚焦目標，專注於最有價值的設計策略。</p>
      <p class="section-body">這段不斷解決問題、克服限制的過程讓我深深著迷。我對設計方法有了更全面的理解——從多源數據蒐集、優先級決策，到跨域協同的力量。這些學習讓我更能應對未來類似的挑戰。</p>
    </section>

  </article>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
  picCollageImg01 as img01,
  picCollageImg02 as img02,
  picCollageImg03 as img03,
  picCollageImg04 as img04,
  picCollageImg05 as img05,
  picCollageImg06 as img06,
  picCollageImg08 as img08,
  picCollageImg09 as img09,
  picCollageImg10 as img10,
  picCollageImg11 as img11,
  picCollageImg12 as img12,
  picCollageVid1 as vid1,
  picCollageVid2 as vid2,
  picCollageVid03 as vid03,
  picCollageVid04 as vid04,
  picCollageVid05 as vid05,
  picCollageVid06 as vid06,
  picCollageVid07 as vid07,
} from '@/data/piccollage-images'

const mixedImg = ref<HTMLImageElement | null>(null)
const mixedHeight = ref<number | null>(null)

function syncMixedHeight() {
  if (mixedImg.value) mixedHeight.value = mixedImg.value.offsetHeight
}

const mixedVideoStyle = computed(() =>
  mixedHeight.value ? { height: `${mixedHeight.value}px`, width: 'auto' } : {}
)

onMounted(() => window.addEventListener('resize', syncMixedHeight))
onUnmounted(() => window.removeEventListener('resize', syncMixedHeight))
</script>

<style scoped>
.pc-article {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-5xl);
}

.pc-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
}

.section-label {
  font-family: var(--font-sans-zh);
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--neutral-600);
  margin: 0;
  line-height: 1.5;
}

.section-subtitle {
  font-family: var(--font-sans-zh);
  font-size: clamp(1.375rem, 2.5vw, 2rem);
  font-weight: 700;
  color: var(--neutral-900);
  line-height: 1.3;
  margin: 0;
}

.section-body {
  font-family: var(--font-sans-zh);
  font-size: 1rem;
  font-weight: 400;
  color: var(--neutral-700);
  line-height: 1.85;
  margin: 0;
}

/* ─── Overview ─────────────────────────────────── */
.pc-overview-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-l);
}

.pc-overview-item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.overview-num {
  font-family: var(--font-serif-en);
  font-size: 2rem;
  font-weight: 700;
  color: var(--cherry-700);
  margin: 0;
}

.overview-title {
  font-family: var(--font-serif-en);
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--neutral-900);
  margin: 0;
}

/* ─── Image ─────────────────────────────────────── */
.pc-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-m);
}

/* ─── Insights ──────────────────────────────────── */
.pc-insights {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
}

.pc-insight {
  display: flex;
  gap: var(--spacing-m);
  align-items: flex-start;
}

.insight-num {
  font-family: var(--font-serif-en);
  font-size: 2rem;
  font-weight: 700;
  color: var(--cherry-700);
  line-height: 1;
  flex-shrink: 0;
  min-width: 2rem;
}

.insight-title {
  display: block;
  font-family: var(--font-sans-zh);
  font-size: 1rem;
  font-weight: 700;
  color: var(--neutral-900);
  margin-bottom: var(--spacing-xs);
}

.pc-finding {
  background: var(--cherry-50);
  border-left: 3px solid var(--cherry-500);
  border-radius: 0 var(--radius-m) var(--radius-m) 0;
  padding: var(--spacing-m) var(--spacing-l);
  font-family: var(--font-sans-zh);
  font-size: 1rem;
  color: var(--neutral-800);
  line-height: 1.8;
  margin: 0;
}

/* ─── Core Problems ─────────────────────────────── */
.pc-problem-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-m);
}

.pc-problem-item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  padding: var(--spacing-l);
  background: var(--cherry-50);
  border-radius: var(--radius-m);
  border: 1px solid var(--neutral-100);
}

.problem-num {
  font-family: var(--font-serif-en);
  font-size: 2rem;
  font-weight: 700;
  color: var(--cherry-700);
  line-height: 1;
}

.problem-title {
  font-family: var(--font-sans-zh);
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--neutral-900);
  margin: 0;
  line-height: 1.5;
}

/* ─── Directions ────────────────────────────────── */
.pc-directions {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
}

.pc-direction {
  display: flex;
  gap: var(--spacing-m);
  align-items: flex-start;
}

.direction-num {
  font-family: var(--font-serif-en);
  font-size: 2rem;
  font-weight: 700;
  color: var(--cherry-700);
  line-height: 1;
  flex-shrink: 0;
  min-width: 2.5rem;
}

.direction-title {
  font-family: var(--font-sans-zh);
  font-size: 1rem;
  font-weight: 700;
  color: var(--neutral-900);
  margin: 0 0 var(--spacing-xs);
}

/* ─── Principles ────────────────────────────────── */
.pc-principles {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
}

.pc-principle {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.principle-title {
  font-family: var(--font-sans-zh);
  font-size: 1rem;
  font-weight: 700;
  color: var(--neutral-900);
}

/* ─── Outputs ───────────────────────────────────── */
.pc-output {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
  padding-top: var(--spacing-xl);
  border-top: 1px solid var(--neutral-50);
}

.pc-output:first-child {
  border-top: none;
  padding-top: 0;
}

.pc-output__header {
  display: flex;
  gap: var(--spacing-m);
  align-items: flex-start;
}

.output-num {
  font-family: var(--font-serif-en);
  font-size: 2rem;
  font-weight: 700;
  color: var(--cherry-700);
  line-height: 1.2;
  flex-shrink: 0;
  min-width: 3rem;
}

.output-title {
  font-family: var(--font-sans-zh);
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--neutral-900);
  margin: 0 0 var(--spacing-s);
  line-height: 1.4;
}

.output-list {
  font-family: var(--font-sans-zh);
  font-size: 1rem;
  color: var(--neutral-700);
  line-height: 1.85;
  margin: var(--spacing-s) 0 0;
  padding-left: var(--spacing-l);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

/* ─── Video pair ────────────────────────────────── */
.pc-video-pair {
  display: flex;
  gap: var(--spacing-m);
  flex-wrap: wrap;
  align-items: flex-start;
}

.pc-video-item {
  flex: 0 0 calc(50% - var(--spacing-m) / 2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
}

.video-label {
  font-family: var(--font-serif-en);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--neutral-800);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.pc-video-item video {
  width: auto;
  display: block;
  border-radius: var(--radius-m);
  background: var(--neutral-50);
}

/* ─── Image item (used inside pc-video-pair) ────── */
.pc-image-item {
  flex: 0 0 calc(50% - var(--spacing-m) / 2);
}

.pc-image-item img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-m);
}

/* ─── Challenges ────────────────────────────────── */
.pc-challenges {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
}

.pc-challenge {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.challenge-title {
  font-family: var(--font-sans-zh);
  font-size: 1rem;
  font-weight: 700;
  color: var(--neutral-900);
}

/* ─── Responsive ────────────────────────────────── */
@media (max-width: 768px) {
  .pc-overview-grid {
    grid-template-columns: 1fr;
  }

  .pc-problem-grid {
    grid-template-columns: 1fr;
  }

}

@media (max-width: 640px) {
  .pc-direction {
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  .pc-output__header {
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  .pc-insight {
    gap: var(--spacing-s);
  }

  .pc-video-item,
  .pc-image-item {
    flex: 0 0 100%;
  }

  .pc-video-item video {
    width: 100% !important;
    height: auto !important;
  }
}
</style>
