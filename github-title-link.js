var titles = [].concat(
    Array.prototype.slice.call(document.getElementsByClassName('js-issue-title'))
).concat(
    Array.prototype.slice.call(document.getElementsByClassName('commit-title'))
);

titles.forEach(
    function (title) {
        title.innerHTML = title.textContent.replace(/([A-Z]+-[0-9]+)/g, '<a href="https://issues.liferay.com/browse/$1" target="_blank">$1</a>');
    }
);
