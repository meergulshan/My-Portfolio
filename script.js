function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('visible');
    });

    // Show the clicked section
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.add('visible');
}
