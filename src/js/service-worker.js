chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.closeTab) {
    // Hardcoded delay for closing the tab
    var delay = 2000; // Delay in milliseconds
    setTimeout(function() {
      chrome.tabs.remove(sender.tab.id);
    }, delay);
  }
});
