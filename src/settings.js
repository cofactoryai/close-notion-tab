document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    var delayInput = document.getElementById('delay');
    var delayValueDisplay = document.getElementById('delay-value');

    // Mock function to simulate chrome.storage.sync.get
    function getMockStorage(callback) {
        // Simulate an asynchronous call with setTimeout
        setTimeout(function() {
            // This would be replaced with the actual storage retrieval logic
            var data = { delay: 5000 }; // Default value
            callback(data);
        }, 100);
    }

    // Use the mock function instead of chrome.storage.sync.get
    getMockStorage(function(data) {
        delayInput.value = data.delay;
        delayValueDisplay.textContent = delayInput.value + 'ms';
        console.log('Loaded delay from storage: ' + delayInput.value + 'ms');
    });

    // Update the display value when the slider is moved
    delayInput.addEventListener('input', function() {
        delayValueDisplay.textContent = delayInput.value + 'ms';
        console.log('Slider moved to: ' + delayInput.value + 'ms');
    });

    // Save the delay setting when the form is submitted
    document.getElementById('settings-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var delay = delayInput.value;
        console.log('Before form submission, delay: ' + delay + 'ms'); // Log to check the value before submission

        // Mock function to simulate chrome.storage.sync.set
        function setMockStorage(value, callback) {
            // Simulate an asynchronous call with setTimeout
            setTimeout(function() {
                // This would be replaced with the actual storage save logic
                console.log('Mock: Delay set to ' + value + 'ms');
                callback();
            }, 100);
        }

        // Use the mock function instead of chrome.storage.sync.set
        setMockStorage(delay, function() {
            console.log('Form submission simulated.');
        });

        // Additional console logs to trace the execution flow
        console.log('Event listener for form submission triggered.');
        console.log('Value of delayInput.value: ' + delayInput.value);
    });
});
