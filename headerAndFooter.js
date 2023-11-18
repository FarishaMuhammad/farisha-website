// Function to load the header
function loadHeader() {
	var header = document.createElement('header');
	header.innerHTML = `
    <link rel="stylesheet" href="styles.css" />
        <a href="https://farishamuhammad.github.io/farisha-website/HP.html"> <img src="images/logo.png" alt="Logo">
        </a>
        <div class="main-nav">
        
            <nav>
                <ul>
                    <li><a href="https://farishamuhammad.github.io/farisha-website/biography.html" class="nav-link"> Biography </a></li>
                    <li><a href="https://farishamuhammad.github.io/farisha-website/timetable.html" class="nav-link"> Timetable </a></li>
                    <li><a href="https://farishamuhammad.github.io/farisha-website/galleries.html" class="nav-link"> Galleries </a></li>
                    <li><a href="https://farishamuhammad.github.io/farisha-website/downloads.html" class="nav-link"> Download </a></li>
                    <li>
                        <div class="dropdown" id="linksDropdown"> 
                            <a href="#"> Links </a>
                            <div class="dropdown-content">
                                <a href="https://uitm.edu.my/" target="_blank">UiTM Website </a>
                                <a href="https://kppim.uitm.edu.my/" target="_blank">KPPIM Website</a>
                                <a href="https://istudent.uitm.edu.my/" target="_blank">i-Student Portal</a>
                            </div>
                        </div>
                    </li>
                    <li><a href="https://farishamuhammad.github.io/farisha-website/index.html" class="nav-link"> Sign In </a></li>
                    <li><a href="https://farishamuhammad.github.io/farisha-website/index.html" class="nav-link"> Sign Out </a></li>
                </ul>
            </nav>
        </div>
    `;
	var socialNavBar = document.createElement('div');
	socialNavBar.innerHTML = `
    <div class="social-nav">
        <nav>
            <ul>
                <li><a href="https://www.instagram.com/" class="fa fa-instagram" target="_blank"></a></li>
                <li>
                    <a href="https://twitter.com/i/flow/login" class="fa fa-twitter" target="_blank"></a>
                </li>
                <li><a href="https://www.youtube.com/" class="fa fa-youtube" target="_blank"></a></li>
            </ul>
        </nav>
    </div>
    `;

	document.body.prepend(header);
	document.body.prepend(socialNavBar);
}

function loadFooter() {
    var footer = document.createElement('footer');
    var paragraph = document.createElement('p');

    // Creating an anchor tag with the copyright symbol and text
    var copyrightLink = document.createElement('a');
    copyrightLink.innerHTML = '&copy; 2023 Farisha\'s Website. All rights reserved.';
    copyrightLink.href = 'https://farishamuhammad.github.io/farisha-website/HP.html'; //

    // Adding a click event listener to handle the redirect
    copyrightLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        window.location.href = this.getAttribute('href'); // Redirect to the specified URL
    });

    // Appending the anchor tag to the paragraph, and the paragraph to the footer
    paragraph.appendChild(copyrightLink);
    footer.appendChild(paragraph);

    // Appending the footer to the body
    document.body.appendChild(footer);
}

// Ensure the functions are defined
window.loadHeader = loadHeader;
window.loadFooter = loadFooter;
