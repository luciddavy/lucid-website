// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetPage = this.getAttribute('href');
        window.location.href = targetPage; // Redirects to other pages
    });
});

// Gallery image popup
function openImage(src) {
    const popup = window.open('', '_blank', 'width=800,height=600');
    popup.document.write(`
        <html>
        <body style="margin:0; display:flex; justify-content:center; align-items:center; background:#000;">
            <img src="${src}" style="max-width:100%; max-height:100%;">
        </body>
        </html>
    `);
}