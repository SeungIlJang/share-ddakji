# 모두의 딱지치기 — Play 스토어 등록 문구

- 패키지명: `com.moduseries.ddakji` · 퍼블리셔: 모두의시리즈 · 카테고리: 게임 > 캐주얼(아케이드)
- 아이콘 512: `releases/icon-512.png`
- OTA: 앱은 `seungiljang.github.io/games/ddakji.html`를 불러옴 → 게임(HTML·에셋) 수정은 games 레포 푸시로 자동 반영. **네이티브 설정 변경은 재빌드 필요**
- 빌드 설정(현재): `android/app/build.gradle` versionCode **4** / versionName **1.0.2**, minSdk 24 · targetSdk 36
- 마지막으로 만든 AAB: `releases/ddakji-v3c3.aab` (versionCode 3). **versionCode 4 는 아직 빌드 전**
- ⚠️ Play 에 실제로 올라간 버전이 무엇인지는 레포만으로 확인되지 않음 — Play Console 확인 필요

### 재빌드가 필요한 미반영 네이티브 변경
- `android:screenOrientation="portrait"` 추가 (ab9ff80) — 세로 전용 설계인데 잠금이 없어 가로 회전 시 레이아웃이 깨졌음
- 매니페스트 UTF-8 손상 복구 (ab9ff80)
- 업로드 전 versionCode 를 Play 의 현재 값보다 크게 올릴 것

---

## 🇰🇷 한국어

### 앱 이름 (최대 30자)
모두의 딱지치기

### 간단한 설명 (최대 80자)
탁! 내리쳐 딱지를 뒤집자! 넘어갈 듯 말 듯… 한 번만 더 하게 되는 원터치 딱지치기.

### 자세한 설명 (최대 4000자)
◆ 모두의 딱지치기 ◆
어릴 적 그 손맛 그대로! 힘 조절 한 번으로 상대 딱지를 내리쳐 뒤집는 전통놀이 게임.

파워 바가 초록 구간에 왔을 때 화면을 탭하세요. 딱지가 90도를 넘기면 뒤집혀서 내 것이 돼요. 넘어갈 듯 말 듯 들썩이는 그 순간 — "아, 조금만 더!" 하며 자꾸만 다시 치게 됩니다.

■ 이렇게 즐겨요
· 원터치 — 초록 구간에서 탭, 그게 전부예요
· 넘어갈 듯 말 듯 짜릿한 뒤집기 물리
· 스테이지가 오를수록 더 무겁고 아슬아슬하게
· 노랑 구간 명중 = 완벽타! 점수·엽전 2배

■ 모으는 재미
· 일반·레어·전설 딱지 12종 도감 수집
· 레어·전설 딱지는 화려하게 등장 (점수 2~3배)
· 엽전을 모아 힘·정확도·집중력 영구 강화

■ 이런 분께
· 짧고 굵게 즐기는 게임을 찾는 분
· "한 번만 더"의 중독을 좋아하는 분
· 추억의 전통놀이를 손안에서 즐기고 싶은 분

지금 바로 딱! 쳐보세요!

* 인터넷 연결 없이도 즐길 수 있어요.

---

## 🇺🇸 English

### App name (max 30)
Ddakji Flip

### Short description (max 80)
Slam & flip the paper tile! So close every time — one-touch, one-more-try ddakji!

### Full description (max 4000)
◆ DDAKJI FLIP ◆
The classic Korean paper-flipping game (as seen in Squid Game) in one tap!

Tap when the power bar hits the green zone to slam your tile. If the opponent's ddakji tips past 90°, it flips over and becomes yours. That teetering "will-it-flip?" moment keeps you saying "just one more try!"

■ How to play
· One-touch — tap in the green zone, that's it
· Satisfying tipping-point flip physics
· Heavier, tenser tiles as stages rise
· Hit the yellow zone for a PERFECT — double score & coins

■ Collect them all
· 12 ddakji to collect: common, rare, legendary
· Rare & legendary tiles appear in style (2–3× score)
· Earn coins to permanently upgrade power, accuracy, focus

Play offline, anytime. Tap and flip now!

---

## 콘텐츠 등급 / 데이터
- 폭력·선정성 없음 → 전체이용가 예상
- 데이터 수집 없음은 **아님** — 글로벌 랭킹(Firebase Firestore `ddakji_scores`)에 닉네임·점수·스테이지를 저장하고, AdMob 광고 ID를 쓴다. 데이터 안전 섹션에 "앱 활동"·"광고" 체크 필요
- 광고: AdMob 앱 ID `ca-app-pub-9017259597860535~8162959768` **실유닛 적용 완료**(d3ee19e). 배너·전면·리워드 3종 실유닛 연결됨
- ⚠️ 테스트 시 실광고를 직접 누르지 말 것 — 2026-11-02 계정 29일 정지 이력. 테스트는 테스트 트랙 빌드(UA 에 `MSAdsTest`)로만. `AD_USE_TEST` 가 UA 를 보고 자동 전환됨

## 스토어 자산 (보유 현황)
- ✅ 피처 그래픽 `store-assets/feature-1024x500.png` (1024×500)
- ✅ 스크린샷 6장 `store-assets/shot1~6-*.png` (1080×1920)
- ✅ 아이콘 `releases/icon-512.png` (512×512)
- ⚠️ 단, 아이콘·피처·스크린샷 모두 **v1.3 이전의 옛 딱지 그림**(둥근 사각형+십자)으로 만들어졌다.
  게임 아트가 바람개비 접힘으로 바뀌었으므로 **교체 권장** — 교체용 프롬프트는
  `images/ddakji-p0-prompts.md` §5 에 있다
- 개인정보처리방침 URL (기존 privacy-site 재사용 가능)
