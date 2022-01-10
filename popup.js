let changeColor = document.getElementById("accent");

chrome.storage.sync.get("a1", ({ a1 }) => {
    changeColor.value = a1;
});

changeColor.addEventListener("change", async() => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    var accent1 = changeColor.value;
    chrome.storage.sync.set({ a1: accent1 });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setAccent,
    });
})

function setAccent() {
    chrome.storage.sync.get('a1', ({ a1 }) => {
        document.querySelector(':root').style.setProperty('--color-calendar-graph-day-L4-bg', a1 + "ff", "important");
        document.querySelector(':root').style.setProperty('--color-calendar-graph-day-L3-bg', a1 + "c5", "important");
        document.querySelector(':root').style.setProperty('--color-calendar-graph-day-L2-bg', a1 + "8a", "important");
        document.querySelector(':root').style.setProperty('--color-calendar-graph-day-L1-bg', a1 + "54", "important");
        document.querySelector(':root').style.setProperty('--color-accent-emphasis', a1 + "ff", "important");
        document.querySelector(':root').style.setProperty('--color-btn-primary-bg', a1 + "ff", "important");
        document.querySelector(':root').style.setProperty('--color-btn-primary-hover-bg', a1 + "c5", "important");
        document.querySelector(':root').style.setProperty('--color-btn-primary-active-bg', a1 + "8a", "important");
        document.querySelector(':root').style.setProperty('--color-btn-primary-focus-bg', a1 + "8a", "important");
        document.querySelector(':root').style.setProperty('--color-btn-primary-disabled-bg', a1 + "54", "important");
        document.querySelector('.js-highlight-blob').style.setProperty('fill', a1 + "c5", "important");
        document.querySelector('.js-highlight-blob').style.setProperty('stroke', a1 + "ff", "important");
        for (let i = 0; i < document.querySelectorAll('.Progress-item.rounded-2').length; i++) {
            document.querySelectorAll('.Progress-item.rounded-2')[i].style.setProperty('background-color', a1 + "ff", "important");
        }
    });

}