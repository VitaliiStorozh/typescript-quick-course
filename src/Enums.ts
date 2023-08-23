

enum AuthErrors {
    INVALID_EMAIL,
    USER_DISABLED,
    USER_NOT_FOUND,
    WRONG_PASSWORD,
    EMAIL_ALREADY_IN_USE,
    OPERATION_NOT_ALLOWED
}

console.log(AuthErrors.INVALID_EMAIL);

enum AuthErrors2 {
    INVALID_EMAIL = 'INVALID_EMAIL',
    USER_DISABLED = 'USER_DISABLED',
    USER_NOT_FOUND = 'USER_NOT_FOUND',
    WRONG_PASSWORD = 'WRONG_PASSWORD',
    EMAIL_ALREADY_IN_USE = 'EMAIL_ALREADY_IN_USE',
    OPERATION_NOT_ALLOWED = 'OPERATION_NOT_ALLOWED'
}

console.log(AuthErrors2.INVALID_EMAIL);

function handleError(error: AuthErrors) {
    switch (error) {
        case AuthErrors.INVALID_EMAIL:
            console.log('Invalid email');
            break;
        case AuthErrors.USER_DISABLED:
            console.log('User disabled');
            break;
        case AuthErrors.USER_NOT_FOUND:
            console.log('User not found');
            break;
        case AuthErrors.WRONG_PASSWORD:
            console.log('Wrong password');
            break;
        case AuthErrors.EMAIL_ALREADY_IN_USE:
            console.log('Email already in use');
            break;
        case AuthErrors.OPERATION_NOT_ALLOWED:
            console.log('Operation not allowed');
            break;
        default:
            console.log('Unknown error');
    }
}

handleError(AuthErrors.EMAIL_ALREADY_IN_USE);