chrome.storage.sync.get('a1', ({ a1 }) => {
    setTimeout(function() {
        document.querySelector(':root').style.setProperty('--color-calendar-graph-day-L4-bg', a1 + "ff", "important");
        document.querySelector(':root').style.setProperty('--color-calendar-graph-day-L3-bg', a1 + "c5", "important");
        document.querySelector(':root').style.setProperty('--color-calendar-graph-day-L2-bg', a1 + "8a", "important");
        document.querySelector(':root').style.setProperty('--color-calendar-graph-day-L1-bg', a1 + "54", "important");
        document.querySelector(':root').style.setProperty('--color-accent-emphasis', a1 + "ff", "important");
        document.querySelector(':root').style.setProperty('--color-btn-primary-bg', a1 + "ff", "important");
        document.querySelector(':root').style.setProperty('--color-btn-primary-hover-bg', a1 + "c5", "important");
        document.querySelector(':root').style.setProperty('--color-btn-primary-active-bg', a1 + "8a", "important");
        document.querySelector(':root').style.setProperty('--color-btn-primary-disabled-bg', a1 + "54", "important");
        document.querySelector('.js-highlight-blob').style.setProperty('fill', a1 + "c5", "important");
        document.querySelector('.js-highlight-blob').style.setProperty('stroke', a1 + "ff", "important");
        for (let i = 0; i < document.querySelectorAll('.Progress-item.rounded-2').length; i++) {
            document.querySelectorAll('.Progress-item.rounded-2')[i].style.setProperty('background-color', a1 + "ff", "important");
        }
    }, 1000);
});