const $btnSignIn = document.querySelector('.Usuario'),
    $btnSignUp = document.querySelector('.Alto_cargo'),

    $SignUp = document.querySelector('.signUp'),
    $SignIn = document.querySelector('.signIn');

    document.addEventListener('click', e =>{
        if(e.target === $btnSignIn || e.target === $btnSignUp) {
            $signIn.classList.toggle('active');
            $signUp.classList.toggle('active')
        }
    });