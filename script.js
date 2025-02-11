function handleBuyClick() {

    const tradingUrl = "https://app.uniswap.org/";
    window.open(tradingUrl, '_blank');
}


document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    let floatY = 0;
    let floatDirection = 1;

    function updateFloat() {
        if (floatY > 10) floatDirection = -1;
        if (floatY < 0) floatDirection = 1;
        
        floatY += 0.2 * floatDirection;
        logo.style.transform = `translateY(${floatY}px)`;
        requestAnimationFrame(updateFloat);
    }


    const contractAddress = document.querySelector('.contract-address');
    contractAddress.addEventListener('click', () => {
        const addressText = contractAddress.textContent.split(':')[1].trim();
        navigator.clipboard.writeText(addressText)
            .then(() => {
                
                contractAddress.style.opacity = '0.5';
                setTimeout(() => {
                    contractAddress.style.opacity = '1';
                }, 200);
            })
            .catch(err => {
                console.error('Failed to copy:', err);
            });
    });
});
