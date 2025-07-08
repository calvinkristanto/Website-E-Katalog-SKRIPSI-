// === TAB FUNCTION ===
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const reviewList = document.getElementById('user-reviews'); // akses global

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.getAttribute('data-tab');

    // Simpan tab aktif ke sessionStorage
    sessionStorage.setItem('activeTab', tab);

    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    tabContents.forEach(content => {
      content.style.display = content.id === tab ? 'block' : 'none';
    });

    // Jika bukan tab ulasan, kosongkan review
    if (tab !== 'ulasan' && reviewList) {
      reviewList.innerHTML = '';
    }
  });
});

// === REVIEW FUNCTION ===
const form = document.getElementById('review-form');

// Tidak ambil dari sessionStorage — review hanya sekali tampil

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('review-name').value;
  const rating = document.getElementById('review-rating').value;
  const message = document.getElementById('review-message').value;

  const review = { name, rating, message };
  showReview(review);

  form.reset();
});

function showReview(review) {
  const div = document.createElement('div');
  div.className = 'review-item';
  div.innerHTML = `
    <p><strong>${review.name}</strong> ${'⭐'.repeat(review.rating)}</p>
    <p>${review.message}</p>
  `;
  reviewList.appendChild(div);
}

// === Saat halaman dimuat ===
window.addEventListener('DOMContentLoaded', () => {
  const activeTab = sessionStorage.getItem('activeTab');
  if (activeTab) {
    tabButtons.forEach(btn => {
      const tab = btn.getAttribute('data-tab');
      const isActive = tab === activeTab;
      btn.classList.toggle('active', isActive);
      document.getElementById(tab).style.display = isActive ? 'block' : 'none';

      // Jika buka tab bukan ulasan, kosongkan review list
      if (!isActive && tab === 'ulasan' && reviewList) {
        reviewList.innerHTML = '';
      }
    });
  } else {
    // Default: aktifkan tab pertama
    tabButtons[0].classList.add('active');
    tabContents[0].style.display = 'block';
  }
});
