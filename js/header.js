function toggleDropdown(event) {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('show');
    event.stopPropagation();
}

// Toggle the social media menu
function toggleSocialMedia(event) {
    const socialMedia = document.getElementById('socialMedia');
    socialMedia.classList.toggle('show');
    event.stopPropagation();
}

// Close dropdowns if clicked outside
document.addEventListener('click', function () {
    document.getElementById('dropdown').classList.remove('show');
    document.getElementById('socialMedia').classList.remove('show');
});

window.toggleDropdown = toggleDropdown;
window.toggleSocialMedia = toggleSocialMedia;