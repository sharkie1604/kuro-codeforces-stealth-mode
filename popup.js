const toggle = document.getElementById('zenToggle');

// Load the current saved state
chrome.storage.sync.get('zenMode', (data) => {
    toggle.checked = data.zenMode || false;
});

// Save the state when toggled
toggle.addEventListener('change', () => {
    chrome.storage.sync.set({ zenMode: toggle.checked });
});