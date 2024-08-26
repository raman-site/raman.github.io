// 데뷔일 설정 (YYYY, MM(0부터 시작), DD)
const debutDate = new Date(2021, 10, 25); // 예시: 2023년 11월 1일

// 데뷔일 업데이트 함수
function updateDebutDay() {
    const currentDate = new Date();
    const timeDifference = currentDate - debutDate;
    const daysCount = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // 데뷔일 업데이트
    document.getElementById('days-left').textContent = daysCount;
}

// 페이지 로드 시 데뷔일 업데이트
updateDebutDay();

// 매일 자정마다 debutDate를 현재 날짜로 업데이트
setInterval(function () {
    const currentDate = new Date();
    
    // 현재 날짜로 debutDate 업데이트
    debutDate.setDate(currentDate.getDate());

    // 데뷔일 업데이트
    updateDebutDay();
}, 1000 * 60 * 60 * 24); // 24시간(1일)마다 실행

const specialDate = new Date(2023, 10, 25); // 2023년 11월 25일

// 현재 날짜 가져오기
const currentDate = new Date();

// 현재 날짜와 특정 날짜 비교
if (currentDate.toDateString() === specialDate.toDateString()) {
    alert('2주년 축하드립니다 ');
}