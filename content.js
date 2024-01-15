(function() {
    'use strict';
     const tooltip = document.createElement('div');
tooltip.style.cssText = 'position: absolute; background-color: rgba(0, 0, 0, 0.69); color: white; padding: 5px; border-radius: 4px; display: none; z-index: 1000;';
    document.body.appendChild(tooltip);

    function showTooltip(text, x, y) {
        tooltip.innerHTML = text;
        tooltip.style.left = (x + 10) + 'px'; 
        tooltip.style.top = (y + 10) + 'px';
        tooltip.style.display = 'block';
    }

    function hideTooltip() {
        tooltip.style.display = 'none';
    }

    function checkAndColorTiles() {
        const jobTiles = document.querySelectorAll('div[data-test="job-tile-list"] section');
        jobTiles.forEach(tile => {
            var text = "";
            const paymentStatus = tile.querySelector('small[data-test="payment-verification-status"]');
            if (paymentStatus && paymentStatus.textContent.includes("Payment verified")) {
                tile.style.backgroundColor = 'rgba(144, 238, 144, 0.3)'; 
            }else{
             text=text+"-Client payment method not verified<br>";
            }
            const proposals = tile.querySelector('strong[data-test="proposals"]');
            if (proposals && proposals.textContent.includes("50+")) {
                 proposals.style.setProperty('color', 'rgba(230, 16, 16, 1)', 'important');
                text=text+'-Too many aplicants <br>'
            }
            if (proposals && proposals.textContent.includes("20 to 50")) {
                 proposals.style.setProperty('color', 'rgba(230, 102, 16, 1)', 'important');
                text=text+'-Too many aplicants <br>'

            }
            if (proposals && proposals.textContent.includes("15 to 20")) {
                 proposals.style.setProperty('color', 'rgba(230, 123, 16, 1)', 'important');
                text=text+'-Too many aplicants <br>'
            }
            if (proposals && proposals.textContent.includes("10 to 15")) {
                 proposals.style.setProperty('color', 'rgba(230, 173, 16, 1)', 'important');
            }
            if (proposals && proposals.textContent.includes("10 to 15")) {
                 proposals.style.setProperty('color', 'rgba(230, 209, 16, 1)', 'important');
            }
            if (proposals && proposals.textContent.includes("5 to 10")) {
                 proposals.style.setProperty('color', 'rgba(109, 230, 16, 1)', 'important');
            }
            if (proposals && proposals.textContent.includes("than 5")) {
                 proposals.style.setProperty('color', 'rgba(16, 230, 23, 1)', 'important');
            }

            const spent = tile.querySelector('span[data-test="formatted-amount"]');
            if (spent && spent.textContent.trim() === "$0") {
                 spent.style.setProperty('color', 'rgba(230, 16, 16, 1)', 'important');
                 text=text+'-Client has $0 spent <br>'

            }
            else if (spent && spent.textContent.includes('+')) {
                 spent.style.setProperty('color', 'rgba(109, 230, 16, 1)', 'important');

            }else{
                spent.style.setProperty('color', 'rgba(230, 173, 16, 1)', 'important');
            }
             const connects = tile.querySelector('strong[data-test="connect-price"]');
            if (connects && connects.textContent.startsWith('16')) {
                 connects.style.setProperty('color', 'rgba(230, 16, 16, 1)', 'important');
            }
             const posted = tile.querySelector('span[data-test="posted-on"]');
            if (posted && posted.textContent.includes('hours')&&posted.textContent.trim().split(" ")[0]>1) {
                 posted.style.setProperty('color', 'rgba(230, 209, 16, 1)', 'important');
            }
            else if (posted && ((posted.textContent.includes('hours')&&posted.textContent.trim().split(" ")[0]>3)||!posted.textContent.includes('minutes') ) ) {
                 posted.style.setProperty('color', 'rgba(230, 102, 16, 1)', 'important');
                 text=text+'-Too old <br>';
            }else{
                 posted.style.setProperty('color', 'rgba(16, 230, 23, 1)', 'important');
                 


            }





            tile.addEventListener('mouseover', (event) => {
                const tooltipText = text; 
                showTooltip(tooltipText, event.pageX, event.pageY);
            });
            tile.addEventListener('mouseout', hideTooltip);

        });
    }

    setInterval(checkAndColorTiles, 1000); 
})();