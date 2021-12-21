export const validate = (values) => {
    const errors = {};

    if(!values.email){
        errors.email = 'Email is required'
    }
    if(!values.password){
        errors.password = 'Password is required'
    }else if(values.password.length < 4){
        errors.password = 'Password min lengt is 4 sumbols'
    }else if(values.password.length > 12){
        errors.password = 'Password max length is 12 sumbols'
    }
    return errors
}