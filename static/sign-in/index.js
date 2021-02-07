function onSignIn(event) {
    event.preventDefault();
    const signInForm = new FormData(event.target);
    signInForm.forEach((value, key) => {
        console.log(`${key}: ${value}`)
    })
}
