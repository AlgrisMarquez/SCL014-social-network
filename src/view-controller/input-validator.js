//valida que los inputs de iniciar sesion no esten vacios
const validator = (signInEmailValue, signInPasswordValue) => {
    if (signInEmailValue.trim() === '' || signInPasswordValue.trim() === '') {
        return true;
    }
    else {
        return false;
    }
};

//valida que los inputs de registro no esten vacios y contengan valores validos
const validatorRegister = (
    emailRegisterValue,
    passwordRegisterValue,
    user,
    fname,
    lname,
    birth,
    country,
    emailRegisterValid,
    passwordRegisterValid
) => {

    if (
        emailRegisterValue === '' ||
        passwordRegisterValue === '' ||
        user === '' ||
        fname === '' ||
        lname === '' ||
        birth === '' ||
        country === ''
    ) {
        return true;
    }
    if (emailRegisterValid && passwordRegisterValid) {
        return false;
    }
    else {
        return true;
    }
};

export {
    validator,
    validatorRegister,
};