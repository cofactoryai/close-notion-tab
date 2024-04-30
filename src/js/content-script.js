function getNode() {
  try {
    const text = "Redirecting to your Notion app…"
    const res = document.evaluate(
      `//div[text()="${text}"]`,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    )

    return res.singleNodeValue
  } catch {}
}

// Retrieve the delay setting from chrome.storage.sync and use it for the setTimeout
chrome.storage.sync.get('delay', function(data) {
  const delay = data.delay ? parseInt(data.delay, 10) : 5000; // Default to 5000ms if not set
  setTimeout(() => {
    if (getNode()) {
      chrome.runtime.sendMessage({ closeTab: true })
    }
  }, delay);
});
