export const validateDonationsForm = (values) => {
    const errors={};
    /////First Name/////
    if(!values.firstName){
        errors.firstName='Required';
    }
    else if(values.firstName.length<2){
        errors.firstName='Must be at least 2 characters.';
    }
    else if(values.firstName.length>15){
        errors.firstName='Must be 15 Characters or less';
    }
    /////Last Name/////
    if(!values.lastName){
        errors.lastName='Required';
    }
    else if(values.lastName.length<2){
        errors.lastName='Must be at least 2 characters.';
    }
    else if(values.lastName.length>15){
        errors.lastName='Must be 15 Characters or less';
    }
    /////Phone Number/////
    const reg=/^\d+$/;
    if(!values.phoneNum){
        errors.phoneNum='Required';
    }
    else if(!reg.test(values.phoneNum)){
        errors.phoneNum='The phone number should contain only numbers';
    }
    else if(values.phoneNum.length<10 || values.phoneNum.length>10){
        errors.phoneNum='The phone number has an area code and 7 numbers.';
    }
    /////Email/////
    if(!values.email.match('@')) {
        errors.email='Email should contains a @'
    }
    else if(!values.email.match('com')) {
        errors.email='Email should also contains .com'
    }
    /////Donations/////
    if(!values.amount){
        errors.amount='Requird'
    }
    else if(!reg.test(values.amount)){
        errors.amount='The amount should only contain numbers';
    }
    else if(values.amount<10){
        errors.amount='Must be more then ten dollars';
    }
    else if(values.amount>100){
        errors.amount='We dont accept more then hundred dollars.'
    }
    return errors
};