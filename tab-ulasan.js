  // === TAB FUNCTION ===
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tab = button.getAttribute('data-tab');

      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      tabContents.forEach(content => {
        content.style.display = content.id === tab ? 'block' : 'none';
      });
    });
  });

  // === REVIEW FUNCTION ===
  const form = document.getElementById('review-form');
  const reviewList = document.getElementById('user-reviews');

  // Tampilkan review dari localStorage saat halaman dimuat
  window.addEventListener('DOMContentLoaded', () => {
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    savedReviews.forEach(showReview);
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('review-name').value;
    const rating = document.getElementById('review-rating').value;
    const message = document.getElementById('review-message').value;

    const review = { name, rating, message };
    showReview(review);

    // Simpan ke localStorage
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    savedReviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(savedReviews));

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