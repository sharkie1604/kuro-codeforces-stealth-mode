const selectors = '.tag-box, .notice, .ProblemRating, td.act, th.act, [title*="Participants solved"]';

const applyZenMode = () => {
    chrome.storage.sync.get('zenMode', (data) => {
        const allElements = document.querySelectorAll(selectors);
        
        if (data.zenMode) {
            allElements.forEach(el => el.style.display = 'none');
        } else {
            
            allElements.forEach(el => el.style.display = '');
        }
    });
};
setInterval(applyZenMode, 1000);