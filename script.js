const lightbulb = document.getElementById('lightbulb');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    // 1. Toggle the class (Turn light on/off)
    lightbulb.classList.toggle('light-on');

    // 2. Check: Is the light on?
    if (lightbulb.classList.contains('light-on')) {
        // 3. If YES, change button text to "Turn Off"
        toggleButton.textContent = 'Turn Off';
    } else {
        // 4. If NO, change button text to "Turn On"
        toggleButton.textContent = 'Turn On';
    }
});
