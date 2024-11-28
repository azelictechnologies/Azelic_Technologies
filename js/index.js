function loadPage(page) {
    fetch('index.html')
        .then(response => response.text())
        .then(headerData => {
            document.getElementById('header-container').innerHTML = headerData;

            // After the header is loaded, load the requested page (main content)
            return fetch(page);
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Page not found");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("content").innerHTML = data;
            return fetch('footer.html');
        })
        .then(response => response.text())
        .then(footerData => {
            document.getElementById('footer-container').innerHTML = footerData;
        })
        .catch(error => {
            console.error(error);
            document.getElementById("content").innerHTML = "<h1>404 - Page Not Found</h1>";
        });
}
