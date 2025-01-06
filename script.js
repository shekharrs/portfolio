/* Implement the logic on #menu-icon */
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

/* Implement the logic on .visit-btn */
const visitBtn = document.querySelector('.visit-btn').addEventListener('click', () => {
    window.open('https://github.com/shekharrs', '_blank');
});

/* Implement the logic on #contact-gmailid */
const contactGmailId = document.querySelector('#contact-gmailid').addEventListener('click', () => {
    window.location.href = "mailto:shekharrs2002@gmail.com";
});

/* Implement the logic on #twitter-icon */
const githubIcon = document.querySelector('#twitter-icon').addEventListener('click', () => {
    window.open('https://x.com/Shekharrsthakur', '_blank');
});

/* Implement the logic on #linkedin-icon */
const linkedinIcon = document.querySelector('#linkedin-icon').addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/thakurshekhar/', '_blank');
});

/* Implement the logic on #author-verse */
const authorVerse = document.querySelector('#author-verse').addEventListener('click', () => {
    window.open('https://github.com/shekharrs/AuthorVerse', '_blank');
});

/* Implement the logic on #convo-app */
const convoApp = document.querySelector('#convo-app').addEventListener('click', () => {
    window.open('https://github.com/shekharrs/ConvoApp', '_blank');
});

/* Implement the logic on #chess-game */
const chessGame = document.querySelector('#chess-game').addEventListener('click', () => {
    window.open('https://github.com/shekharrs/Chess', '_blank');
});

/* Implement the logic on #employee-management-system */
const employeeManagementSystem = document.querySelector('#ems').addEventListener('click', () => {
    window.open('https://github.com/shekharrs/Employee-Management-System/', '_blank');
});

/* Function to handle email sending for Contact Section */
function sendEmail() {
    const email = document.getElementById("email").value;
    const query = document.getElementById("query").value;

    // Check if email and query are filled
    if (email && query) {
        // Configure email parameters (using a mailto link for simplicity)
        const mailtoLink = `mailto:shekharrs2002@gmail.com?subject=New Query&body=Email: ${email}%0D%0AQuery: ${query}`;
        window.location.href = mailtoLink;

        // Show success message
        document.getElementById("successMessage").style.display="block";

        // Clear input fields
        document.getElementById("email").value = "";
        document.getElementById("query").value = "";
    } else {
        alert("Please fill in both the email and query fields.");
    }
}

/*  functionality for downloading a CV with a single click */
document.getElementById('download-cv').addEventListener('click', function() {
    // Create an anchor element
    const link = document.createElement('a');
    // Set the href to the path of your CV file
    link.href = '/assets/ShekharThakur.pdf';
    // Set the download attribute with the file name for download
    link.download = 'ShekharThakur.pdf';
    // Append the anchor to the body (necessary for firefox)
    document.body.appendChild(link);
    // Programmatically click the link to trigger the download
    link.click();
    // Remove the link from the document
    document.body.removeChild(link);
});