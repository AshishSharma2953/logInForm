document.getElementById("togglePassword").addEventListener("click", function () {
    let passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        this.classList.replace("fa-eye-slash", "fa-eye");

    } else {
        passwordField.type = "password";
        this.classList.replace("fa-eye", "fa-eye-slash");

    }
});
