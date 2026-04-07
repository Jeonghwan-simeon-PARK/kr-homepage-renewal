/**
 * Google Apps Script - HicareNet Design Vote Backend
 *
 * 설정 방법:
 * 1. Google Sheets에서 새 스프레드시트 생성
 * 2. 시트 이름을 "Votes"로 변경
 * 3. 첫 행(헤더)에 입력: id | timestamp | voterId | vote1 | vote2 | comment
 * 4. 확장 프로그램 > Apps Script 클릭
 * 5. 아래 코드를 Code.gs에 붙여넣기
 * 6. 배포 > 새 배포 > 웹 앱 선택
 *    - 실행 주체: 나 (본인 계정)
 *    - 액세스 권한: 모든 사용자
 * 7. 배포 후 생성된 URL을 복사
 * 8. js/voting.js 상단의 GAS_URL에 붙여넣기
 *
 * URL 형식: https://script.google.com/macros/s/XXXXXXX/exec
 */

function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Votes');
  var action = (e.parameter && e.parameter.action) || 'results';

  // ── 투표 저장 (같은 voterId 기존 투표 자동 교체) ──
  if (action === 'vote') {
    var data = JSON.parse(e.parameter.data);
    var voterId = String(data.voterId || '').trim();

    // 같은 voterId의 기존 투표 삭제
    if (voterId) {
      var rows = sheet.getDataRange().getValues();
      for (var r = rows.length - 1; r >= 1; r--) {
        if (String(rows[r][2]).trim() === voterId) {
          sheet.deleteRow(r + 1);
        }
      }
    }

    sheet.appendRow([
      data.id || '',
      data.timestamp || new Date().toISOString(),
      voterId,
      data.votes[0] || '',
      data.votes[1] || '',
      data.comment || ''
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  // ── 결과 조회 ──
  var rows = sheet.getDataRange().getValues();
  var votes = [];
  var totals = { v1: 0, v2: 0, v3: 0, v4: 0, v5: 0, v6: 0 };

  for (var i = 1; i < rows.length; i++) {
    var row = rows[i];
    var v1 = String(row[3]).trim().toLowerCase();
    var v2 = String(row[4]).trim().toLowerCase();
    var selections = [v1, v2].filter(function(v) { return v && v !== ''; });

    var vote = {
      id: row[0],
      timestamp: row[1],
      votes: selections,
      comment: row[5] || ''
    };
    votes.push(vote);

    selections.forEach(function(v) {
      if (totals.hasOwnProperty(v)) totals[v]++;
    });
  }

  return ContentService
    .createTextOutput(JSON.stringify({
      votes: votes.reverse(),
      totals: totals,
      totalVoters: votes.length
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
