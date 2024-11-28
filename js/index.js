function loadPage(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error("Page not found");
            }
            return response.text();
        })
        .then(data => {
            // Replace the content of the main section
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => {
            console.error(error);
            document.getElementById("content").innerHTML = "<h1>404 - Page Not Found</h1>";
        });
}
