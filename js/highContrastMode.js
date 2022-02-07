const $highContrastBtn = document.querySelector('.iconHighContrast');
$highContrastBtn.addEventListener('click', (e) => {
  const bigHashTags = [...document.querySelectorAll('.hashTag--big')];
  const smallHashTags = [...document.querySelectorAll('.hashTag--small')];
  bigHashTags.forEach((bigHashTag) =>
    bigHashTag.classList.toggle('hashTag--highContrast')
  );
  smallHashTags.forEach((smallHashTag) =>
    smallHashTag.classList.toggle('hashTag--highContrast')
  );
});
