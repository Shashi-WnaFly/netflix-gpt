
export const formValidate = (name, email, password, isSignUpForm) => {
    const validName = /^[a-zA-Z]{2,}\s[a-zA-Z]{1,}$/.test(name);
    const validEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(isSignUpForm && !validName) return "name";
    if(!validEmail) return "emailID";
    if(!validPassword) return "password";

    return null;
}