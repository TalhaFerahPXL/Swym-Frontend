
//START SLIDER
$(document).ready(function() {
    let contentImages = ["../Images/Mockup.png", "../Images/Cards.png", "../Images/Mockup.png", "../Images/Cards.png"];
    let contentTitles = ["Welcome to your new dashboard", "Welcome to your new dashboard", "lorem ipsum", "lorem ipsum"];
    let contentTexts = [
        "Sign in to explore changes we’ve made.",
        "Sign in to explore changes we’ve made.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, nam.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, nam."
    ];

    let currentContentIndex = 0;

    function updateContent() {
        $('#contentImage').attr('src', contentImages[currentContentIndex]);
        $('#contentTitle').text(contentTitles[currentContentIndex]);
        $('#contentText').text(contentTexts[currentContentIndex]);
        $('.paginatie-dots .dot').removeClass('selected');
        $('.paginatie-dots .dot').eq(currentContentIndex).addClass('selected');
    }

    $(".paginatie svg").click(function() {
        if ($(this).attr("id") === "pijl-rechts") {
            currentContentIndex++;
            if (currentContentIndex >= contentImages.length) {
                currentContentIndex = 0;
            }
        } else if ($(this).attr("id") === "pijl-links") {
            currentContentIndex--;
            if (currentContentIndex < 0) {
                currentContentIndex = contentImages.length - 1;
            }
        }
        updateContent();
    });

    // Om de content bij het laden van de pagina in te stellen
    updateContent();
});
//END SLIDER






document.getElementById("BtnSignin").addEventListener("click", ()=>{
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    let p = document.getElementsByClassName("hidden-p")[1]


    const loginData = {
        email: email,
        password: password
    };


    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    };


    fetch('https://localhost:7009/api/Login', requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Netwerkrespons was niet oké');
            }

            return response.json();
        })
        .then(data => {
            console.log('Succesvol ingelogd:', data);
            window.location.href = '../Home.html'

        })
        .catch(error => {
            console.error('Er is een fout opgetreden bij het inloggen:', error);
            p.style.display = 'flex';
            p.textContent = "Invalid log in credentials"
            p.style.color = 'red'
        });

})







