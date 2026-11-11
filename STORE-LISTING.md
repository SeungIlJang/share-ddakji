# 모두의 딱지치기 — Play 스토어 등록 문구

- 패키지명: `com.moduseries.ddakji` · 퍼블리셔: 모두의시리즈 · 카테고리: 게임 > 캐주얼(아케이드)
- 아이콘 512: `releases/icon-512.png`
- OTA: 앱은 `seungiljang.github.io/games/ddakji.html`를 불러옴 → 게임(HTML·에셋) 수정은 games 레포 푸시로 자동 반영. **네이티브 설정 변경은 재빌드 필요**
- 빌드 설정(현재): `android/app/build.gradle` versionCode **5** / versionName **1.1.0**, minSdk 24 · targetSdk 36
- 릴리스 노트: `releases/RELEASE-NOTES-v5.txt` (세로 고정 반영, f967657)
- ⚠️ **AAB 파일 자체는 이 체크아웃에 없다** — `.gitignore` 가 `*.aab` 를 제외한다. 빌드한 쪽에 있다
- ⚠️ Play 에 실제로 올라간 버전이 무엇인지는 레포만으로 확인되지 않음 — Play Console 확인 필요

### 네이티브 변경 반영 상태
- `android:screenOrientation="portrait"` (ab9ff80) → **versionCode 5 빌드에 반영됨**
- 매니페스트 UTF-8 손상 복구 (ab9ff80) → 같이 반영됨
- ⚠️ versionCode 5 AAB 에 들어간 **오프라인 폴백은 v2.8** 이다(빌드가 v3.0 커밋보다 먼저였음).
  온라인에서는 OTA 로 v3.0 이 뜨므로 비행기 모드일 때만 구버전이 보인다. 다음 빌드에서 자동 해소

### ⚠️ 이 문서를 고쳐도 Play 는 안 바뀐다
아래 등록 문구는 **Play Console 에 직접 붙여 넣어야** 반영된다.
스토어 등록정보 > 기본 스토어 등록정보 에서 간단한 설명·자세한 설명·스크린샷을 교체할 것.

---

## 🇰🇷 한국어

### 앱 이름 (최대 30자)
모두의 딱지치기

### 간단한 설명 (최대 80자)
아슬아슬하게 넘길수록 점수 7배! 올렸다 그대로 내리꽂는 한 동작 딱지치기.

### 자세한 설명 (최대 4000자)
◆ 모두의 딱지치기 ◆
누른 채 들어올렸다가, 손 떼지 말고 그대로 내리꽂는다. 어릴 적 그 한 방.

■ 한 동작이면 됩니다
· 화면을 누른 채 위로 올려요
· 손을 떼지 말고 그대로 바닥까지 내리꽂아요
· 끝입니다. 탭 타이밍도, 복잡한 조작도 없어요

■ 어디까지 올릴지가 전부입니다
화면에 선이 두 개 보입니다.
· 초록선 — 이 위면 안전하게 넘어가요. 대신 점수는 그대로
· 금선 — 넘어가느냐 마느냐의 경계. 여기 아슬아슬하게 붙일수록 최대 7배

위로 도망가면 확실하지만 점수가 안 늘고, 욕심내면 한 뼘 차이로 떨어집니다.
매 판 "이번엔 어디까지 붙일까"를 고르는 게임이에요.

■ 망설이면 빗나갑니다
내리치는 속도가 그대로 정확도가 됩니다. 머뭇거리며 끌어내리면 딱지가 비뚤게 꽂혀 바람이 새요. 같은 높이에서 쳐도, 과감하게 꽂은 사람이 넘깁니다.

■ 연속으로 쌓으세요
연속 성공마다 점수 배수가 올라 최대 5배. 금선 배수와 곱해집니다.
한 번 실패하면 연속은 처음부터 — 그래서 쌓일수록 손이 떨려요.

■ 목숨 3개, 한 판의 끝
실패 3번이면 그 판이 끝납니다. 기록이 아깝다면 광고를 보고 한 번 이어할 수 있어요.

■ 모으고 키우는 재미
· 일반·레어·전설 딱지 12종 도감 수집 (레어 2배 · 전설 3배 점수)
· 엽전을 모아 힘·정확도·집중력 영구 강화
· 상대와 번갈아 치는 대결 모드

■ 이런 분께
· 한 판 1~2분, 짧고 굵게 즐기고 싶은 분
· "조금만 더!"가 멈추지 않는 분
· 추억의 전통놀이를 손안에서 즐기고 싶은 분

지금 바로 올렸다, 꽂아보세요!

* 인터넷 연결 없이도 즐길 수 있어요.

---

## 🇺🇸 English

### App name (max 30)
Ddakji Flip

### Short description (max 80)
Lift and slam to flip! Hug the gold line for up to 7x score — or fall short.

### Full description (max 4000)
◆ DDAKJI FLIP ◆
Press, lift, and slam it down without lifting your finger. The classic Korean paper-flipping game (as seen in Squid Game).

■ One motion, that's it
· Press the screen and drag upward
· Keep holding and slam straight back down to the ground
· Done. No tap timing, nothing complicated

■ How high you lift is the whole game
Two lines appear on screen.
· GREEN LINE — above this, your tile flips for sure. But no score bonus
· GOLD LINE — the edge between flipping and failing. The closer you hug it, the bigger the multiplier, up to 7x

Play it safe and you'll never miss, but your score won't grow. Get greedy and you fall short by a finger's width. Every round you choose how close to cut it.

■ Hesitate and you'll miss
Your downward speed becomes your accuracy. Drag it down slowly and the tile lands crooked, letting the air escape. From the very same height, the player who commits is the one who flips it.

■ Build your streak
Every win in a row raises your multiplier, up to 5x — and it stacks on top of the gold-line bonus. One miss and the streak starts over, so the higher it climbs, the more your hands shake.

■ Three lives per run
Miss three times and the run ends. If the score was worth it, watch an ad to continue once.

■ Collect and upgrade
· 12 ddakji to collect: common, rare, legendary (2x / 3x score)
· Earn coins to permanently upgrade power, accuracy and focus
· Duel mode — trade slams with an opponent

Play offline, anytime. Lift it, slam it, flip it!

---

## 콘텐츠 등급 / 데이터
- 폭력·선정성 없음 → 전체이용가 예상
- 데이터 수집 없음은 **아님** — 글로벌 랭킹(Firebase Firestore `ddakji_scores`)에 닉네임·점수·스테이지를 저장하고, AdMob 광고 ID를 쓴다. 데이터 안전 섹션에 "앱 활동"·"광고" 체크 필요

## 🚨 글로벌 랭킹이 운영에서 동작하지 않음 (2026-11-05 확인)

배포본에서 랭킹 **읽기·쓰기 모두 403** 이다. 콘솔에 `LB.submit FirebaseError:
Missing or insufficient permissions.` 가 찍히고, 랭킹 창은 "불러오기 실패"만 뜬다.

Firestore REST 로 범위를 좁혔다 — 같은 프로젝트(`gallog-return-be90f`)의
다른 게임 컬렉션은 열려 있는데 우리 것만 막혔다:

| 컬렉션 | 응답 |
|---|---|
| `scores` (타 게임) | 200 |
| `ddakji_scores` | 403 PERMISSION_DENIED |

즉 프로젝트 전체가 잠긴 게 아니라 **보안 규칙에 `ddakji_scores` 가 없다.**
규칙은 레포에 없고 Firebase 콘솔에서만 관리되므로 **코드로는 고칠 수 없다.**

고치는 법 — Firebase 콘솔 > Firestore Database > 규칙 에 아래를 추가:

```
match /ddakji_scores/{uid} {
  allow read: if true;
  allow write: if request.resource.data.keys().hasOnly(['uid','name','score','stage','ts'])
               && request.resource.data.uid is string
               && request.resource.data.name is string
               && request.resource.data.name.size() <= 16
               && request.resource.data.score is int
               && request.resource.data.score >= 0
               && request.resource.data.stage is int;
}
```

⚠️ 같은 프로젝트를 다른 게임들이 함께 쓴다. 기존 `match` 블록은 건드리지 말고
위 블록만 **추가**할 것.

고치기 전까지 랭킹은 실패해도 게임 진행에는 영향이 없다(`submit` 이 false 를
돌려주고 조용히 넘어간다). 스토어 설명에 랭킹을 내세우지는 않고 있다.
- 광고: AdMob 앱 ID `ca-app-pub-9017259597860535~8162959768` **실유닛 적용 완료**(d3ee19e). 배너·전면·리워드 3종 실유닛 연결됨
- ⚠️ 테스트 시 실광고를 직접 누르지 말 것 — 2026-11-02 계정 29일 정지 이력. 테스트는 테스트 트랙 빌드(UA 에 `MSAdsTest`)로만. `AD_USE_TEST` 가 UA 를 보고 자동 전환됨

## 스토어 자산 (보유 현황)
- ✅ 아이콘 `releases/icon-512.png` (512×512) — **바람개비 신아트로 교체됨**
- ✅ 피처 그래픽 `store-assets/feature-1024x500.png` (1024×500) — **바람개비 신아트로 교체됨**
- ✅ 스크린샷 — **업로드는 아래 4장, 이 순서로** (v3.0 게임을 직접 촬영, 1080×1920 JPEG, 9:16)
  | 순서 | 파일 | 장면 | 왜 이 순서인가 |
  |---|---|---|---|
  | 1 | `store-assets/shot1-goldline.jpg` | 금선/안전선과 실시간 배수 x6.9 가 보이는 조준 화면 | 이 게임의 핵심 선택을 한 장으로 설명한다 |
  | 2 | `store-assets/shot2-win.jpg` | 금선 정타 → 타격 137% x6.8 → 전설 황금 딱지 획득 | 그 선택이 주는 보상 |
  | 3 | `store-assets/shot3-dex.jpg` | 딱지 도감 12/12 수집 | 모으는 재미 |
  | 4 | `store-assets/shot4-shop.jpg` | 엽전으로 힘·정확도·집중력 영구 강화 | 계속할 이유 |

  1번은 "아슬아슬할수록 배수가 크다"가 글 없이 읽히도록 금선 라벨(`금선 x7`)과
  현재 배수(`x6.9`)가 같이 보이는 순간을 골랐다. 2번의 광고 버튼(리워드)은
  일부러 숨기고 찍었다 — 첫인상에 광고가 보이면 설치율이 떨어진다.
- 📦 보관만: `shot1~6-*.png`(v1.3 이전 옛 아트), `shot1-play.jpg`(v2.8 고스트 UI).
  업로드하지 않는다. v2.8 까지의 조작 설명(랜덤 고스트 목표)이 지금과 다르다.
- 개인정보처리방침 URL (기존 privacy-site 재사용 가능)
