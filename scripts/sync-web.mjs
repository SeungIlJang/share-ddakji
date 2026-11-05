// www/ 를 games 레포의 원본과 맞춘다.
//
// 이 앱은 OTA 래퍼다. www/index.html 이 seungiljang.github.io/games/ddakji.html 을
// 받아 document.write 로 띄우므로, 평소 게임 변경은 games 레포 푸시만으로 반영된다.
// www/ 안의 두 가지는 그래도 최신이어야 한다:
//
//   game.html        비행기 모드/네트워크 실패 시 쓰는 오프라인 폴백.
//                    games/ddakji.html 과 바이트 동일해야 한다.
//   assets/ddakji/   OTA HTML 을 document.write 로 올리면 상대경로가 로컬로 풀린다.
//                    그래서 에셋이 앱 번들에도 있어야 하고, 없으면 앱에서만 아트가
//                    안 보인다 (로컬 웹 테스트로는 안 잡힌다).
//
// index.html(래퍼 자체)은 이 레포가 원본이므로 건드리지 않는다.
//
// ⚠️ 예전 이 파일 자리에는 idle-hero 에서 복사해 온 copyweb 스크립트가 남아 있었다.
//    www/ 를 통째로 지우고 ../idle-hero/ 를 넣는 내용이라, 모르고 돌리면 딱지치기
//    번들이 사라졌다. 지금은 games 레포만 바라본다.

import { existsSync, readFileSync, writeFileSync, mkdirSync, cpSync, rmSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const app = resolve(here, '..');
const games = resolve(app, '..', 'games');

const SRC_HTML = resolve(games, 'ddakji.html');
const SRC_ASSETS = resolve(games, 'assets', 'ddakji');
const DST_HTML = resolve(app, 'www', 'game.html');
const DST_ASSETS = resolve(app, 'www', 'assets', 'ddakji');

function die(msg) {
  console.error('sync-web: ' + msg);
  process.exit(1);
}

if (!existsSync(SRC_HTML)) die(`원본이 없다: ${SRC_HTML}\n  games 레포가 ../games 에 체크아웃돼 있어야 한다.`);
if (!existsSync(SRC_ASSETS)) die(`원본 에셋 폴더가 없다: ${SRC_ASSETS}`);

// 바이트 그대로 복사한다. 줄끝을 바꾸면 두 벌이 cmp 로 달라진다.
const html = readFileSync(SRC_HTML);
mkdirSync(dirname(DST_HTML), { recursive: true });
writeFileSync(DST_HTML, html);

rmSync(DST_ASSETS, { recursive: true, force: true });
mkdirSync(DST_ASSETS, { recursive: true });
cpSync(SRC_ASSETS, DST_ASSETS, { recursive: true });

const copied = readFileSync(DST_HTML);
if (!copied.equals(html)) die('복사본이 원본과 다르다');

const ver = (html.toString('utf8').match(/v\d+\.\d+[^<\n]*/) || ['(버전 문자열 못 찾음)'])[0];
console.log(`sync-web: game.html  ${copied.length} bytes  ${ver}`);
console.log(`sync-web: assets/ddakji  ${readdirSync(DST_ASSETS).length} files`);
