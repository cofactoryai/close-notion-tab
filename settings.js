document.addEventListener('DOMContentLoaded', function() {
    // Load the current delay setting and update the form
    chrome.storage.sync.get('delay', function(data) {
        document.getElementById('delay').value = data.delay || 0;
    });

    // Save the delay setting when the form is submitted
    document.getElementById('settings-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var delay = document.getElementById('delay').value;
        chrome.storage.sync.set({delay: delay}, function() {
            console.log('Delay set to ' + delay);
        });
    });
});
