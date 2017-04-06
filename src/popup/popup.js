function updateCurrentLang() {
  var currentLang = document.querySelector('[data-current-lang]');

  chrome.storage.sync.get('displaylang', function(options) {
    if (options.displaylang) {
      currentLang.innerHTML = options.displaylang;
    } else {
      currentLang.innerHTML = 'default';
    }
  });
};

document.querySelectorAll('a[data-lang]').forEach(function(element) {
  element.addEventListener('click', function(event) {
    chrome.storage.sync.set({'language': event.target.getAttribute('data-lang'), 'displaylang': event.target.getAttribute('data-display-lang')}, function() {
      updateCurrentLang();
    });
  });
});

updateCurrentLang();
