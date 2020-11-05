SELECT * FROM study.members;

-- 데이터의 개수 --/
SELECT COUNT(*) FROM study.members;

-- 오름차순, 내림차 순으로 데이터 불러오기~ --/
SELECT name FROM study.members ORDER BY name;
SELECT name FROM study.members ORDER BY name DESC;

-- INSERT: 서팟장님 데이터 추가하기 --/
-- 데이터: 최영훈, 25, OB, 인천 -- /
-- *코드 여기 입력* -- /

-- UPDATE: 특정 Idx를 찾아서 사용자의 정보 수정 --/
-- *코드 여기 입력* -- /

-- DELETE: 특정 Idx로 사용자를 지우기 --/
-- *코드 여기 입력* --/

-- 수정된 데이터 확인 --/
SELECT * FROM study.members;