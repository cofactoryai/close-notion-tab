document.addEventListener('DOMContentLoaded', function() {
    // Load the current delay setting
    chrome.storage.sync.get('closeDelay', function(data) {
        document.getElementById('delayInput').value = data.closeDelay || 0;
    });

    // Save the delay setting
    document.getElementById('saveButton').addEventListener('click', function() {
        var delay = document.getElementById('delayInput').value;
        chrome.storage.sync.set({'closeDelay': delay}, function() {
            // Notify that we saved.
            console.log('Settings saved');
        });
    });
});
