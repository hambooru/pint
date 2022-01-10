let accent1 = "#ff0000";

const filter = {
    url: [{
        urlMatches: 'https://*.google.com/*',
    }, ],
};

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({
        a1: accent1
    });
})

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['popup.js']
    });
});


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['onload.js']
    });
});