function onSignUp(event) {
    event.preventDefault();
    const signUpForm = new FormData(event.target);
    signUpForm.forEach((value, key) => {
        console.log(`${key}: ${value}`)
    })
}
