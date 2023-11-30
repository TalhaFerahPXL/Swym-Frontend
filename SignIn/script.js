
// Script Slider - Start
$(document).ready(function() {
    let contentImages = ["../Images/Cards.png", "../Images/Mockup.png", "../Images/Cards.png", "../Images/Mockup.png"];
    let contentTitles = ["Unlimited Cards", "Welcome to your new dashboard", "lorem ipsum", "lorem ipsum" ];
    let contentTexts = [
        "Give your team the autonomy they need with access to as many cards as they need. Authorise purchases with a click. Simple.",
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
//Script Slider - End








document.getElementById("BtnGetStarted").addEventListener("click", ()=>{

    let email = document.getElementById("email").value
    let name = document.getElementById("name").value
    let password = document.getElementById("password").value

    let p = document.getElementsByClassName("hidden-p")
    let txtPassword = document.getElementById("txtPassword")



    if (name === '') {

        p[1].style.display = 'none'
        p[0].style.display = 'flex'
        p[0].textContent = 'Name can\'t be blank'
        p[0].style.color = "red"
    } else if(email === '') {

        p[0].style.display = 'none'
        p[1].style.display = 'flex'
        p[1].textContent = 'Email can\'t be blank'
        p[1].style.color = "red"
    }else if (!(email.includes("@"))) {
            p[0].style.display = 'none';
            p[1].style.display = 'block';
            p[1].textContent = 'Invalid email';
            p[1].style.color = 'red';
        }  else if (password.length <8){
        p[0].style.display = 'none';
        p[1].style.display = 'none';


        txtPassword.style.color = 'red'
    }


    else {
        p[0].style.display = 'none';
        p[1].style.display = 'none';
        txtPassword.style.color = ''

        doFetch(email, name,password)
    }



})




function doFetch(Email, Name, Password) {



    const data = {
        email: Email,
        name: Name,
        password: Password
    };


    const requestOptions = {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };


    //https://briskapi-testing.azurewebsites.net/api/Register/Register
    //https://localhost:7009/api/Register/Register

    fetch('https://briskapi-testing.azurewebsites.net/api/Register/Register', requestOptions)
        .then(response => {
            if (response.status === 200) {

                response.json();
                window.location.href = '../LogIn/Login.html'


            } else if (response.status === 400) {

                let p = document.getElementsByClassName("hidden-p");
                p[1].style.display = 'flex';
                p[1].textContent = 'Invalid email';
                p[1].style.color = 'red';


                return response.text();
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(data => {
            if (typeof data === 'object') {


            } else {


            }
        })
        .catch(error => {
            console.error('Er is een fout opgetreden:', error);
        });



}
