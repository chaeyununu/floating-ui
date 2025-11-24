const chapters = {
  1: {
    label: "love chapter 1",
    tag: "aug 2022 · improved math skills",
    icons: [
      { emoji: "✏️", label: "sarak sarak" },
      { emoji: "👑", label: "he is fine-.-" },
      { emoji: "🎆", label: "main character ? " }
    ],
    
    caption:
      "felt like fate in a tiny classroom, then the plot twist hit: i wasn’t the main character after all.",
    detail: `the more i replay it, the more it feels like the stars were saying,
“this isn’t your person, this is your first mirror.”`
  },
  2: {
    label: "love chapter 2",
    tag: "2023 · pie ",
    icons: [
      { emoji: "☔", label: "ttiny academy" },
      { emoji: "🩴", label: "red slippers" },
      { emoji: "🎧", label: "songs" },
      { emoji: "📓", label: "endless books" }
    ],
    
    caption:
      "I can’t run from my view or the person I am.",
    detail: `that time made my mind a little clearer, a little more aligned.`
  },
  3: {
    label: "love chapter 3",
    tag: "early 2025 · i was crazy",
    icons: [
      { emoji: "🌊", label: "" },
      { emoji: "💎", label: "" }
    ],
    
    caption:
      "everything always romantic...",
    detail: `but my feelings were real><` 
  },
  4: {
    label: "love chapter 4",
    tag: "late 2025 · floating timelines",
    icons: [
      { emoji: "💸", label: "stunning..." },
      { emoji: "🥔", label: "rude...." },
      { emoji: "❓", label: "?????????" }
    ],
    
    caption:
      "too many tabs open, too many hearts on roaming, and my own feelings finally sending me the bill.",
    detail: `not cute, not polished, just existing… but somehow that’s the realest chapter.`
  }
};

const labelEl = document.getElementById("chapter-label");
const tagEl = document.getElementById("chapter-tag");
const iconsRowEl = document.getElementById("icons-row");
const captionEl = document.getElementById("chapter-caption");
const cardEl = document.getElementById("chapter-card");
const buttons = document.querySelectorAll(".chapter-btn");

const centerLineEl = document.getElementById("center-line");
const headerEl = document.getElementById("card-header");
const detailBtn = document.getElementById("detail-btn");
const detailPanel = document.getElementById("detail-panel");
const detailContent = document.getElementById("detail-content");

let hasOpenedChapter = false;
let detailOpen = false;

function renderIcons(icons) {
  iconsRowEl.innerHTML = "";
  icons.forEach((icon) => {
    const div = document.createElement("div");
    div.className = "icon-badge";

    const emojiSpan = document.createElement("span");
    emojiSpan.className = "icon-emoji";
    emojiSpan.textContent = icon.emoji;

    const labelSpan = document.createElement("span");
    labelSpan.className = "icon-label";
    labelSpan.textContent = icon.label;

    div.appendChild(emojiSpan);
    div.appendChild(labelSpan);
    iconsRowEl.appendChild(div);
  });
}

function closeDetailPanel() {
  detailOpen = false;
  detailPanel.classList.remove("open");
  detailBtn.textContent = "details";
}

function setChapter(chapterNumber) {
  const data = chapters[chapterNumber];
  if (!data) return;

  // 첫 클릭 시: 인트로 문구 숨기고, 나머지 요소 등장
  if (!hasOpenedChapter) {
    hasOpenedChapter = true;

    if (centerLineEl) {
      centerLineEl.style.display = "none";
    }

    [headerEl, iconsRowEl, captionEl, detailBtn].forEach((el) => {
      if (el && el.classList.contains("hidden-before")) {
        el.classList.remove("hidden-before");
      }
    });
  }

  // 챕터 바뀔 때마다 디테일 패널 닫기
  closeDetailPanel();
  detailContent.textContent = "";

  // 카드 3D 살짝 반응
  cardEl.classList.remove("active-transition");
  void cardEl.offsetWidth; // reflow
  cardEl.classList.add("active-transition");

  labelEl.textContent = data.label;
  tagEl.textContent = data.tag;
  captionEl.textContent = data.caption;
  detailContent.textContent = data.detail;
  renderIcons(data.icons);

  // active 버튼 표시
  buttons.forEach((btn) => {
    btn.classList.toggle(
      "is-active",
      btn.getAttribute("data-chapter") === String(chapterNumber)
    );
  });
}

// 버튼 이벤트 연결
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const num = Number(btn.getAttribute("data-chapter"));
    setChapter(num);
  });
});

// details 버튼 토글
detailBtn.addEventListener("click", () => {

  // ★ 홈 화면 상태면 여기서 디테일 내용 강제 지정 ★
  if (!hasOpenedChapter) {
    detailContent.textContent = "please remember me";
  }

  detailOpen = !detailOpen;

  if (detailOpen) {
    detailPanel.classList.add("open");
    detailBtn.textContent = "close";
  } else {
    detailPanel.classList.remove("open");
    detailBtn.textContent = "details";
  }
});
const bgm = document.getElementById("bgm");

window.addEventListener("click", () => {
  bgm.muted = false;
});



// 초기 상태: 아무 챕터도 열지 않음
// → hurting deeply inside..... 만 보이는 인트로 화면


