
export const formValidate = (name, email, password, isSignUpForm) => {
    const validName = /^[a-zA-Z]{2,}\s[a-zA-Z]{1,}$/.test(name);
    const validEmail = /[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(email);
    const validPassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);

    if(isSignUpForm && !validName) return "Your name should contain only letters";
    if(!validEmail) return "Email ID is not valid";
    if(!validPassword) return "Password is not valid";

    return null;
}