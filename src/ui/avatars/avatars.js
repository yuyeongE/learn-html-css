// 1. DOM 선택: 모든 aria-pressed 속성이 있는 avatar 버튼을 전역에서 선택
const avatarButtons = document.querySelectorAll('.avatar[aria-pressed]');

// 2. 이벤트 바인딩
avatarButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    toggleAvatarState(btn);
  });
});

// 3. 토글 함수 구현
function toggleAvatarState(button) {
  const isOnline = button.getAttribute('aria-pressed') === 'true';
  // 상태 표시용 span 찾기
  const stateSpan = button.querySelector('.avatar-state');

  if (isOnline) {
    button.setAttribute('aria-pressed', 'false');
    button.setAttribute('aria-label', '아바타 상태 토글: 오프라인');
    stateSpan.classList.remove('is-online');
  } else {
    button.setAttribute('aria-pressed', 'true');
    button.setAttribute('aria-label', '아바타 상태 토글: 온라인');
    stateSpan.classList.add('is-online');
  }
}