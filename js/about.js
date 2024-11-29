function loadNavbar() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'header.html', true);
    xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        document.getElementById('navbar').innerHTML = xhr.responseText;
    }
    };
    xhr.send();
    }
    window.onload = loadNavbar;
    