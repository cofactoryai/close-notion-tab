chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.closeTab) {
    // Retrieve the delay setting from storage and close the tab after the delay
    chrome.storage.sync.get('closeDelay', function(data) {
      var delay = parseInt(data.closeDelay, 10) || 0; // Default to no delay if not set
      setTimeout(function() {
        chrome.tabs.remove(sender.tab.id);
      }, delay);
    });
  }
});
