<template>
  <article class="hepta-article">

    <!-- 專案概述 -->
    <section class="hepta-section">
      <p class="section-label">專案概述</p>
      <div class="hepta-overview-items">
        <div class="hepta-overview-item">
          <p class="overview-num">01</p>
          <h3 class="overview-title">Objective</h3>
          <p class="section-body">整合串聯、分類、知識譜系、延伸與回顧等五大 AI 能力，協助使用者快速形成知識脈絡，並在 AI 輔助下保持思考主動性，讓 Heptabase 從知識整理工具演進為使用者的 AI 研究夥伴。</p>
        </div>
        <div class="hepta-overview-item">
          <p class="overview-num">02</p>
          <h3 class="overview-title">Role &amp; Deliverables</h3>
          <p class="section-body">在這個專案中，我參與 UXR 與 UI 設計流程，涵蓋探索性研究、問卷設計、深度訪談、HMW 拆解、功能篩選、Design System 延伸元件設計，以及五大 AI 功能的高保真原型製作。</p>
        </div>
        <div class="hepta-overview-item">
          <p class="overview-num">03</p>
          <h3 class="overview-title">Challenges</h3>
          <p class="section-body">這個專案最核心的設計張力在於：如何讓 AI Agent 真正輔助知識工作，而不是取代使用者的思考主動性。我們必須在「AI 自動化帶來的效率」與「使用者對知識形成的掌控感」之間，找到精準的設計平衡點。</p>
        </div>
      </div>
      <div class="hepta-image">
        <img :src="img01" alt="專案概述" />
      </div>
    </section>

    <!-- 專案背景 -->
    <section class="hepta-section">
      <p class="section-label">專案背景</p>
      <h2 class="section-subtitle">設計體驗流暢且符合情境的 Heptabase AI Agent，有效地幫助使用者完成學習及研究複雜主題的任務</h2>
      <p class="section-body">Heptabase 以「空間化思考」為核心，透過卡片與白板的結合，讓使用者以視覺化方式整理與連結複雜知識，目標是「幫助使用者看見自己的思考」。然而，文獻指出 AI Agent 發展已從單一對話介面工具演變為協作夥伴，結合長期記憶與即時回饋後能降低使用者「資訊處理負擔」並提升學習動機。競品分析顯示，Heptabase 現有 AI 功能主要集中在摘要與理解層面，在探索、收集、思考、創作等多個知識週期階段仍有深化空間，這也正是本專案的設計切入點。</p>
      <div class="hepta-image">
        <img :src="img02" alt="專案背景" />
      </div>
    </section>

    <!-- 使用者研究 -->
    <section class="hepta-section">
      <p class="section-label">使用者研究</p>
      <h2 class="section-subtitle">訪談 9 位高頻學習者、問卷 12 位使用者後，發現資訊碎片化與知識連結困難是阻礙知識產出的最大障礙</h2>
      <div class="hepta-image">
        <img :src="img03" alt="使用者研究" />
      </div>

      <div class="hepta-insights">
        <p class="section-label">使用者洞察</p>
        <div class="hepta-insight">
          <div class="hepta-insight__text">
            <span class="insight-num">1</span>
            <div>
              <strong class="insight-title">知識週期新增「回顧」階段</strong>
              <p class="section-body">使用者在建立新卡片時，常發現過往白板有相似內容，因此會主動回頭搜尋舊有知識脈絡。這個「回顧」行為是原有知識週期中缺失的一環，補入後讓知識建立更加通透。</p>
            </div>
          </div>
          <div class="hepta-image">
            <img :src="img04" alt="知識週期新增回顧階段" />
          </div>
        </div>

        <div class="hepta-insight">
          <div class="hepta-insight__text">
            <span class="insight-num">2</span>
            <div>
              <strong class="insight-title">學習型與研究型使用者高度重疊</strong>
              <p class="section-body">研究型是學習型的進階版本，前期的探索、收集、思考、回顧階段幾乎相同，選定「學習型」即可涵蓋大多數研究型需求。</p>
            </div>
          </div>
          <div class="hepta-image">
            <img :src="img05" alt="學習型與研究型使用者重疊" />
          </div>
        </div>

        <div class="hepta-insight">
          <div class="hepta-insight__text">
            <span class="insight-num">3</span>
            <div>
              <strong class="insight-title">資訊過量是最大痛點</strong>
              <p class="section-body">問卷顯示「資訊量太大難以消化理解」與「不知從何開始產出」以及「難以快速連結不同筆記」皆獲得高分，三者都高度集中，指向碎片化問題。</p>
            </div>
          </div>
          <div class="hepta-image">
            <img :src="img17alt" alt="資訊過量是最大痛點" />
          </div>
        </div>
      </div>
    </section>

    <!-- 核心問題 -->
    <section class="hepta-section">
      <p class="section-label">核心問題</p>
      <h2 class="section-subtitle">從競品分析、問卷與訪談結果中可以看到收集、思考、回顧三個階段，使用者的主要任務與痛點，都高度集中在這三個流程</h2>
      <div class="hepta-problem-grid">
        <div class="hepta-problem-item">
          <span class="problem-num">01</span>
          <h3 class="problem-title">收集：資訊過量難以消化</h3>
        </div>
        <div class="hepta-problem-item">
          <span class="problem-num">02</span>
          <h3 class="problem-title">思考：知識連結困難</h3>
        </div>
        <div class="hepta-problem-item">
          <span class="problem-num">03</span>
          <h3 class="problem-title">回顧：舊知識難以喚回</h3>
        </div>
      </div>
    </section>

    <!-- 設計解法 -->
    <section class="hepta-section">
      <p class="section-label">設計解法</p>
      <h2 class="section-subtitle">以知識週期六階段（探索→收集→思考→創作→分享→回顧）為框架，聚焦「收集→思考→回顧」三大關鍵節點設計 AI 介入時機</h2>
      <p class="section-body">使用者在進行「收集→思考→回顧」三個核心階段時，最需要 AI 輔助——從建立知識關聯、整理結構，到快速喚起過往知識記憶，並透過質化訪談聚焦在讓 AI 的「邏輯透明」，從只顯示結果到展示依據，大幅提升使用者對 AI 的信任感。</p>
      <div class="hepta-principles">
        <div class="hepta-principle">
          <span class="principle-num">01</span>
          <div class="principle-body">
            <strong class="principle-title">思考主動性優先</strong>
            <p class="section-body">AI 提供建議與關聯，但最終決策權保留給使用者；避免「全自動化」設計，讓使用者始終是知識組織的主導者</p>
          </div>
        </div>
        <div class="hepta-principle">
          <span class="principle-num">02</span>
          <div class="principle-body">
            <strong class="principle-title">邏輯透明，建立 AI 信任</strong>
            <p class="section-body">每項 AI 建議都應顯示依據，讓使用者能理解 AI 的思考邏輯，從而有信心採納或調整建議</p>
          </div>
        </div>
        <div class="hepta-principle">
          <span class="principle-num">03</span>
          <div class="principle-body">
            <strong class="principle-title">融入既有空間化操作</strong>
            <p class="section-body">所有新功能遵循 Heptabase 白板操作慣例，降低認知負擔，確保 AI 是工作流程的延伸而非中斷</p>
          </div>
        </div>
      </div>
      <div class="hepta-image">
        <img :src="img06" alt="設計解法" />
      </div>
    </section>

    <!-- 設計方向 -->
    <section class="hepta-section">
      <p class="section-label">設計方向</p>
      <h2 class="section-subtitle">以知識週期為框架，聚焦「收集→思考→回顧」三大關鍵節點，透過核心指標與產品願景選出有潛力的設計解法</h2>
      <p class="section-body">再透過以下指標篩選設計解法：<strong>影響力</strong>（痛點解決程度）× <strong>可行性</strong>（開發與技術難度）× <strong>商業價值</strong>（企業商業指標符合度）</p>
      <div class="hepta-image">
        <img :src="img07" alt="設計方向篩選矩陣" />
      </div>
    </section>

    <!-- 設計系統 -->
    <section class="hepta-section">
      <p class="section-label">設計系統</p>
      <div class="hepta-image">
        <img :src="img15" alt="設計系統" />
      </div>
    </section>

    <!-- 設計產出與迭代 -->
    <section class="hepta-section">
      <p class="section-label">設計產出與迭代</p>
      <h2 class="section-subtitle">透過四位既有 Heptabase 使用者（2 年以上）進行質化訪談來驗證產品使用體驗</h2>

      <div class="hepta-outputs">
        <div class="hepta-output">
          <div class="hepta-output__header">
            <span class="output-num">1-1</span>
            <div>
              <h3 class="output-title">
                <a href="https://youtu.be/ApHS2uyMMRo?si=LwP3wBD7FjfP2bc5" target="_blank" rel="noopener" class="output-yt-link">
                  AI 拆分知識卡片
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>
                </a>
              </h3>
              <p class="output-subtitle">將大量知識變成小型且有意義的知識點</p>
            </div>
          </div>
          <div class="hepta-image">
            <img :src="img08" alt="AI 拆分知識卡片" />
          </div>
        </div>

        <div class="hepta-output">
          <div class="hepta-output__header">
            <span class="output-num">1-2</span>
            <div>
              <h3 class="output-title">AI 關聯提示</h3>
              <p class="output-subtitle">幫助使用者更快速且深入理解主題結構</p>
            </div>
          </div>
          <div class="hepta-image">
            <img :src="img09" alt="AI 關聯提示" />
          </div>
        </div>

        <div class="hepta-output">
          <div class="hepta-output__header">
            <span class="output-num">1-3</span>
            <div>
              <h3 class="output-title">AI 建議群組標題</h3>
              <p class="output-subtitle">將複雜資訊分群並提供清晰的標題建議</p>
            </div>
          </div>
          <div class="hepta-image">
            <img :src="img10" alt="AI 建議群組標題" />
          </div>
        </div>

        <div class="hepta-output">
          <div class="hepta-output__header">
            <span class="output-num">2</span>
            <div>
              <h3 class="output-title">
                <a href="https://youtu.be/aUJnRNMzbeA?si=7bdAqdiNVwv9Fg_D" target="_blank" rel="noopener" class="output-yt-link">
                  AI 串聯知識譜系
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>
                </a>
              </h3>
              <p class="output-subtitle">一次看見知識全貌，並清楚呈現功能入口</p>
            </div>
          </div>
          <div class="hepta-image">
            <img :src="img11" alt="AI 串聯知識譜系" />
          </div>
        </div>

        <div class="hepta-output">
          <div class="hepta-output__header">
            <span class="output-num">3</span>
            <div>
              <h3 class="output-title">
                <a href="https://youtu.be/2mHqaJ0-B8k?si=fzsSLQ5hQaL5mFJm" target="_blank" rel="noopener" class="output-yt-link">
                  AI 分類知識卡片
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>
                </a>
              </h3>
              <p class="output-subtitle">透過更準確的視覺化，讓 AI 架構圖更易理解</p>
            </div>
          </div>
          <div class="hepta-image">
            <img :src="img12" alt="AI 分類知識卡片" />
          </div>
        </div>

        <div class="hepta-output">
          <div class="hepta-output__header">
            <span class="output-num">4</span>
            <div>
              <h3 class="output-title">
                <a href="https://youtu.be/kjyjzvP6wo8?si=OG0Aq72_EThB4PGJ" target="_blank" rel="noopener" class="output-yt-link">
                  AI 提供卡片論點
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>
                </a>
              </h3>
              <p class="output-subtitle">提供更通用的選項，突破知識盲點</p>
            </div>
          </div>
          <div class="hepta-image">
            <img :src="img13" alt="AI 提供卡片論點" />
          </div>
        </div>

        <div class="hepta-output">
          <div class="hepta-output__header">
            <span class="output-num">5</span>
            <div>
              <h3 class="output-title">
                <a href="https://youtu.be/7O4L5Aw4qvE?si=RLcGzrMxfRAjjjSN" target="_blank" rel="noopener" class="output-yt-link">
                  AI 搜尋回顧
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>
                </a>
              </h3>
              <p class="output-subtitle">精準搜尋、快速喚起知識回憶</p>
            </div>
          </div>
          <div class="hepta-image">
            <img :src="img14" alt="AI 搜尋回顧" />
          </div>
        </div>
      </div>
    </section>

    <!-- 概念驗證 -->
    <section class="hepta-section">
      <p class="section-label">概念驗證</p>
      <h2 class="section-subtitle">透過質化訪談與收集 30 份線上量化問卷，衡量實用度、滿意度、NPS 與訂閱意願雙軌驗證</h2>
      <div class="hepta-image">
        <img :src="img16" alt="概念驗證雙軌方法" />
      </div>
      <h3 class="output-title">概念驗證結果</h3>
      <div class="hepta-image">
        <img :src="img17" alt="概念驗證結果" />
      </div>
      <blockquote class="hepta-quote">
        <p>「這些 AI 功能可以加速我在自己腦中形成知識的關聯，但不會失去讓我思考的主動性。」</p>
        <footer>— 使用者回饋</footer>
      </blockquote>
    </section>

    <!-- 挑戰與限制 -->
    <section class="hepta-section">
      <p class="section-label">挑戰與限制</p>
      <div class="hepta-challenges">
        <div class="hepta-challenge">
          <strong class="challenge-title">有限的時間</strong>
          <p class="section-body">我們必須在短時間內完成前期研究與 MVP 功能設計，整個團隊需要密切合作，聚焦優先級管理，避免因功能發散而失去焦點，確保在時間內交付有說服力的成果。</p>
        </div>
        <div class="hepta-challenge">
          <strong class="challenge-title">技術評估</strong>
          <p class="section-body">我們深度諮詢工程師，針對每項功能進行技術難度與風險評估，確保設計方案在 Heptabase 現有技術架構下具備可行性，並以開發難易度與使用者喜愛度的二維矩陣評估功能開發優先順序。</p>
        </div>
      </div>
      <div class="hepta-image">
        <img :src="img18" alt="功能優先順序矩陣" />
      </div>
    </section>

    <!-- 創辦人回饋 -->
    <section class="hepta-section">
      <p class="section-label">創辦人回饋</p>
      <div class="hepta-founder">
        <p class="section-body">我這次出的題目包含二個層面：</p>
        <p class="section-body"><strong>1. 問題：「如何設計一個體驗流暢且符合使用情境的 AI Agent，能夠有效地幫助使用者完成對學習及研究複雜主題的任務？」</strong></p>
        <p class="section-body"><strong>2. 商業目標：提高 MRR Growth Rate、Daily New Subscriber 和 Week 24 Usage Retention。「符合題目」並且「對商業目標有幫助」的設計提案必須有辦法回答：「新用戶」是否能透過這些功能「快速地」獲得某個與「學習、研究複雜主題」直接相關的價值，並且願意「經常性地」使用這些功能來重複獲得這個價值？</strong></p>
        <p class="section-body">我選擇給第 11 組的提案最高分，原因有二個：</p>
        <p class="section-body"><strong>1. 他們的提案呈現了如何從一個「完全空白的白板」出發讓用戶感受到價值，而其他組的提案大多是圍繞在一個「已經有不少筆記的白板」上去增加價值。一個設計提案不論多成熟、創新，如果它必須等到「用戶已經使用了一陣子、累積了不少筆記」時才能發揮價值，它對 Growth &amp; Retention 的幫助會非常有限。</strong></p>
        <p class="section-body"><strong>2. 他們的提案是從一個 Knowledge Source 出發去展開學習、協助用戶去理解這個 Knowledge Source，而筆記和白板更像是在幫助用戶達成學習和研究目標的產物。相較之下，其他組的提案比起「幫助用戶學習」，更像是在「幫助筆記軟體用戶整理學習筆記」，感覺被「筆記軟體」這個產品類別給限制住了。</strong></p>
      </div>
    </section>

  </article>
</template>

<script setup lang="ts">
import {
  heptabaseImg01 as img01,
  heptabaseImg02 as img02,
  heptabaseImg03 as img03,
  heptabaseImg04 as img04,
  heptabaseImg05 as img05,
  heptabaseImg06 as img06,
  heptabaseImg07 as img07,
  heptabaseImg08 as img08,
  heptabaseImg09 as img09,
  heptabaseImg10 as img10,
  heptabaseImg11 as img11,
  heptabaseImg12 as img12,
  heptabaseImg13 as img13,
  heptabaseImg14 as img14,
  heptabaseImg15 as img15,
  heptabaseImg16 as img16,
  heptabaseImg17 as img17,
  heptabaseImg17alt as img17alt,
  heptabaseImg18 as img18,
} from '@/data/heptabase-images'
</script>

<style scoped>
.hepta-article {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-5xl);
}

.hepta-section {
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
.hepta-overview-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-l);
}

.hepta-overview-item {
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
.hepta-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-m);
}

/* ─── Insights ──────────────────────────────────── */
.hepta-insights {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.hepta-insight {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
}

.hepta-insight__text {
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

/* ─── Core Problems ─────────────────────────────── */
.hepta-problem-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-m);
}

.hepta-problem-item {
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

/* ─── Principles ────────────────────────────────── */
.hepta-principles {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
}

.hepta-principle {
  display: flex;
  gap: var(--spacing-m);
  align-items: flex-start;
}

.principle-num {
  font-family: var(--font-serif-en);
  font-size: 2rem;
  font-weight: 700;
  color: var(--cherry-700);
  line-height: 1;
  flex-shrink: 0;
  min-width: 2.5rem;
}

.principle-body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.principle-title {
  display: block;
  font-family: var(--font-sans-zh);
  font-size: 1rem;
  font-weight: 700;
  color: var(--neutral-900);
}

/* ─── Outputs ───────────────────────────────────── */
.hepta-outputs {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4xl);
}

.hepta-output {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
}

.hepta-output__header {
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
  min-width: 2.5rem;
}

.output-title {
  font-family: var(--font-sans-zh);
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--neutral-900);
  margin: 0;
  line-height: 1.4;
}

.output-yt-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35em;
  color: var(--neutral-900);
  vertical-align: -0.1em;
  transition: color 0.15s ease;
}

.output-yt-link:hover {
  color: var(--cherry-600);
}

.output-subtitle {
  font-family: var(--font-sans-zh);
  font-size: 0.9375rem;
  font-weight: 400;
  color: var(--neutral-600);
  margin: 0;
  line-height: 1.6;
}

/* ─── Quote ─────────────────────────────────────── */
.hepta-quote {
  background: var(--lake-blue-50);
  border-left: 3px solid var(--lake-blue-500);
  border-radius: 0 var(--radius-m) var(--radius-m) 0;
  padding: var(--spacing-l) var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-s);
  margin: 0;
}

.hepta-quote p {
  font-family: var(--font-sans-zh);
  font-size: 1.0625rem;
  font-weight: 400;
  color: var(--neutral-800);
  line-height: 1.8;
  font-style: italic;
  margin: 0;
}

.hepta-quote footer {
  color: var(--lake-blue-600);
  font-family: var(--font-sans-zh);
  font-size: 0.875rem;
  font-weight: 700;
}

/* ─── Challenges ────────────────────────────────── */
.hepta-challenges {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
}

.hepta-challenge {
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

/* ─── Founder feedback ──────────────────────────── */
.hepta-founder {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
}

/* ─── Responsive ────────────────────────────────── */
@media (max-width: 768px) {
  .hepta-overview-items {
    grid-template-columns: 1fr;
  }

  .hepta-problem-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .hepta-principle {
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  .hepta-output__header {
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  .hepta-insight__text {
    gap: var(--spacing-s);
  }
}
</style>
