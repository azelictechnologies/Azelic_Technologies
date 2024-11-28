function loadPage(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error("Page not found");
            }
            return response.text();
        })
        .then(data => {
            // Extract the content part from the fetched data
            let parser = new DOMParser();
            let doc = parser.parseFromString(data, 'text/html');
            
            // Get the content part from the page (from the main section)
            let content = doc.querySelector('main').innerHTML;

            // Insert the new content into the existing page's content div
            document.getElementById('content').innerHTML = content;
        })
        .catch(error => {
            console.error(error);
            document.getElementById('content').innerHTML = "<h1>404 - Page Not Found</h1>";
        });
}
