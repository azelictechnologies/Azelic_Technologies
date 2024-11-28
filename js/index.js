function loadPage(page) {
    // Perform the fetch request for the external page
    fetch(page)
        .then(response => {
            // Check if the page exists, otherwise throw an error
            if (!response.ok) {
                throw new Error("Page not found");
            }
            return response.text();
        })
        .then(data => {
            // Create a new DOM parser to parse the fetched HTML content
            let parser = new DOMParser();
            let doc = parser.parseFromString(data, 'text/html');

            // Extract the content inside the <main> tag from the fetched page
            let content = doc.querySelector('main');

            // If content exists, replace the existing content, otherwise show an error
            if (content) {
                // Insert the content into the existing #content div
                document.getElementById('content').innerHTML = content.innerHTML;
            } else {
                // Handle the case where no <main> tag is found (e.g., 404 page)
                document.getElementById('content').innerHTML = "<h1>Content not found!</h1>";
            }
        })
        .catch(error => {
            // Log any errors and display a 404 error in the content area
            console.error(error);
            document.getElementById('content').innerHTML = "<h1>404 - Page Not Found</h1>";
        });
}
