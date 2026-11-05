# AAB 빌드 요청 — 모두의 딱지치기

보내는 쪽: 딱지치기 세션(Claude) · 2026-11-05
받는 쪽: AAB 빌드 담당 에이전트

---

## 0. 한 줄 요약

`android:screenOrientation="portrait"` 한 줄이 **네이티브 변경이라 OTA로 안 넘어갑니다.**
이것 하나 때문에 AAB 재빌드가 필요합니다. 게임 내용은 이미 OTA로 v2.8이 나가 있고,
빌드 담당이 게임 코드를 건드릴 일은 **없습니다.**

작업 위치: `D:/AI/workspace/game/share-ddakji`
패키지: `com.moduseries.ddakji` · Capacitor 6 · minSdk 24 / targetSdk 36

---

## 1. 왜 재빌드가 필요한가

이 앱은 OTA 래퍼입니다. `www/index.html`이 `seungiljang.github.io/games/ddakji.html`를
받아 `document.write`로 띄우므로 **게임 HTML·에셋 변경은 푸시만으로 반영**됩니다.
반면 `AndroidManifest.xml` 같은 네이티브 설정은 APK/AAB 안에 구워져 있어 재빌드해야 합니다.

미반영 네이티브 커밋은 **`ab9ff80` 하나뿐**입니다 (그 이후 `android/` 변경 없음):

- `android:screenOrientation="portrait"` 추가
  게임은 세로 전용 설계인데(파워바 `H-225`, 딱지 `H*0.46`, 하단 3단 UI) 잠금이 없었고,
  `configChanges`에 `orientation|screenSize`가 있어 **회전해도 액티비티가 재시작되지 않고
  가로로 늘어난 채 깨집니다.** 형제 게임 중 monster-idle·share-marathon·urgent-toilet-game은
  이미 portrait 잠금입니다.
- 매니페스트 UTF-8 주석 손상 복구 (`d3ee19e`에서 CP949로 잘못 디코드돼 XML이 깨져 있었음)

둘 다 **이미 커밋돼 있습니다.** 빌드 담당이 코드를 고칠 필요는 없고, 그대로 빌드하면 됩니다.

> ⚠️ `AndroidManifest.xml`은 CRLF이고 과거에 인코딩이 깨진 적이 있습니다.
> 수정할 일이 생기면 Edit 류 도구 말고 **바이트 보존 방식**으로 다루고,
> 끝나면 UTF-8 디코드 + XML 파싱이 되는지 확인하세요.

---

## 2. 🚨 먼저 읽을 것 — 지뢰 두 개

### (1) `npm run sync` / `npm run copyweb` 을 절대 실행하지 마세요

`package.json`이 **idle-hero에서 복사해 온 채로 남아 있습니다.** 이름도 `"idle-hero"`,
설명도 "무럭무럭 용사님"이고, `copyweb` 스크립트는 이렇게 생겼습니다:

```
fs.rmSync('www',{recursive:true,force:true})   ← 딱지치기 www/ 를 통째로 지우고
...copyFileSync('../idle-hero/index.html', 'www/index.html')   ← 남의 게임을 넣음
```

실행하면 **딱지치기 웹 번들(v2.8 폴백 + 에셋 17장)이 사라지고 다른 게임이 들어갑니다.**
`npm run sync`는 `copyweb`을 먼저 부르므로 똑같이 위험합니다.

쓸 명령은 이것뿐입니다 — `www/`를 **있는 그대로** 안드로이드로 복사합니다:

```bash
npx cap sync android
```

(이 스크립트를 고치는 건 제 쪽 일입니다. 건드리지 말고 넘어가 주세요.)

### (2) 광고는 꺼진 상태가 정상입니다 — 되살리지 마세요

```js
const ADS_ENABLED=false; // ⚠️ 광고 전면 중단 (2026-11-03 ~ 2026-12-02 AdMob 계정 정지)
```

2026-11-02에 **실광고를 직접 눌러 AdMob 계정이 29일 정지**됐습니다. 그래서 일부러 꺼 뒀습니다.
배너·전면·리워드 코드와 실유닛 ID, 매니페스트 App ID는 그대로 두되 **스위치는 false 유지**입니다.
"광고가 안 나오는 버그"로 보고 고치지 마세요.

같은 이유로 **빌드물에서 실광고를 누르지 마세요.** 지금은 `ADS_ENABLED=false`라 광고 자체가
안 뜨므로 사실상 안전하지만, 혹시 광고를 켜고 테스트해야 하면 `capacitor.config.json`에
`appendUserAgent`로 `MSAdsTest`를 넣은 **테스트 트랙 전용 빌드**로만 하세요
(`AD_USE_TEST`가 UA를 보고 구글 테스트 유닛으로 자동 전환됩니다).
**프로덕션 AAB에는 `appendUserAgent`가 들어가면 안 됩니다** — 현재 config에 없는 게 정상입니다.

---

## 3. 막힌 것 — 서명 키가 없습니다

`android/app/build.gradle`은 `android/app/keystore.properties`를 읽어 릴리스 서명을 합니다:

```
storeFile / storePassword / keyAlias / keyPassword
```

이 파일은 `.gitignore` 6번째 줄로 제외돼 있고 **작업 트리에도 없습니다.**
키스토어 자체(`.jks`)도 레포에 없습니다.

→ **사용자에게 키스토어와 `keystore.properties`를 받아야 합니다.**
   없으면 서명되지 않은 AAB가 나와 Play에 올릴 수 없습니다.
   이 앱은 이미 Play에 올라가 있으므로 **반드시 기존과 같은 키**여야 합니다(새 키 생성 금지).

---

## 4. versionCode / versionName

현재 `android/app/build.gradle`:

```
versionCode 4
versionName "1.0.2"
```

- `versionCode 4`는 `d3ee19e`에서 올려만 두고 **빌드된 적이 없습니다.**
  마지막으로 만든 AAB는 versionCode 3(`ddakji-v3c3.aab`, `.gitignore`로 레포에 없음)입니다.
- ⚠️ **Play Console에 실제로 올라간 versionCode가 몇인지는 레포만으로 알 수 없습니다.**
  Play Console > 프로덕션 > 릴리스에서 현재 값을 확인하고 **그보다 큰 값**으로 올리세요.
  확인이 어려우면 `5`로 시도하고 "이미 사용된 버전 코드" 거부가 나면 하나씩 올리면 됩니다.
- `versionName`은 게임이 v1.x → v2.8로 조작 체계까지 바뀌었으니 **`1.1.0`** 정도를 권합니다
  (표시용이라 Play 심사에는 영향 없음 — 최종 판단은 사용자 몫).

---

## 5. 빌드 절차

```bash
cd /d/AI/workspace/game/share-ddakji
```

```bash
npm install
```

```bash
npx cap sync android
```

```bash
cd android && ./gradlew bundleRelease
```

- `node_modules/`가 없습니다. `capacitor.settings.gradle`이
  `../node_modules/@capacitor-community/admob/android`를 참조하므로 `npm install`이 선행돼야 합니다.
- `android/app/src/main/assets/public/`도 아직 없습니다 — `cap sync`가 `www/`를 여기로 복사합니다.
- 산출물: `android/app/build/outputs/bundle/release/app-release.aab`
  → `releases/ddakji-v<버전>.aab`로 복사. **`.gitignore`에 `*.aab`가 있으니 커밋되지 않습니다**(정상).

---

## 6. 빌드 후 확인

| 확인 | 기대값 |
|---|---|
| AAB 서명 | 기존 키로 서명됨 (`jarsigner -verify` 또는 `bundletool`) |
| versionCode | Play 현재 값보다 큼 |
| 매니페스트 | `android:screenOrientation="portrait"` 들어 있음 |
| 번들된 웹 | `assets/public/game.html` 이 `www/game.html`과 동일 (v2.8) |
| 번들된 에셋 | `assets/public/assets/ddakji/` 에 **17장** |
| 실기 회전 | 기기를 가로로 돌려도 **세로 유지** ← 이번 빌드의 목적 |
| 온라인 실행 | OTA로 v2.8 로드, 하단 UI 안 겹침 |
| 비행기 모드 | 폴백 `game.html`(v2.8)로 실행, 딱지 아트 정상 |

마지막 두 줄이 중요합니다. 과거에 **에셋을 `www/assets/ddakji/`에 안 넣어 앱에서만 아트가
안 보인 적**이 있습니다(OTA HTML을 `document.write`로 올려 상대경로가 로컬로 풀림).
지금은 17장 다 들어 있지만 빌드 후 한 번 더 확인해 주세요.

---

## 7. 건드리지 말 것

- `www/game.html`, `games/ddakji.html` — 두 벌이 **바이트 동일**해야 합니다. 현재 동일(v2.8).
- `ADS_ENABLED=false`
- `package.json`의 `copyweb`/`sync` 스크립트 (고치는 건 제 쪽에서 합니다)
- `capacitor.config.json`에 `appendUserAgent` 추가 (프로덕션 빌드 한정 금지)
- 다른 게임 디렉터리 — 워크스페이스에 20개 가까운 게임이 있고, 다른 세션이 동시에
  작업 중일 수 있습니다. **커밋은 `share-ddakji/` 안에서, 변경한 파일만 경로 지정해서** 하세요.
- 브랜치: **main 직접 커밋**입니다. 피처 브랜치·PR 만들지 마세요.

---

## 8. 참고 — 이번 빌드와 무관한 기존 이슈

- **글로벌 랭킹이 운영에서 403**입니다(읽기·쓰기 모두). Firestore 보안 규칙에
  `ddakji_scores` 컬렉션이 없어서이고, 규칙은 레포가 아니라 **Firebase 콘솔**에만 있습니다.
  재빌드로 해결되지 않으니 빌드 담당이 손댈 것은 없습니다. 상세는 `STORE-LISTING.md` 참고.
- `build.gradle`의 `namespace "com.moduseries.shapesurvivor"`는 템플릿 잔재입니다.
  `applicationId`는 `com.moduseries.ddakji`로 정확하고, namespace는 R 클래스 패키지에만
  영향을 주므로 **동작에 문제 없습니다. 지금 바꾸지 마세요**(리소스 참조가 깨질 수 있음).
- i18n 미적용(한국어 하드코딩 422곳). 이번 범위 아닙니다.
