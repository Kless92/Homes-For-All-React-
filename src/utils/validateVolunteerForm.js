export const validateVolunteerForm = (values) => {
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
    

    ///////////////////////////////////////////////////////////////////////
    /////Reference One/////
    if(values.refOneName || values.refOneNum || values.refOneEmail){
        values.refOne=true;
    }
    /////Reference One Name/////
    if(!values.refOneName && values.refOne===true){
        errors.refOneName='Must have a name.';
        
    }
    else if(values.refOneName.length<2 && values.refOne===true){
        errors.refOneName='Must be at least 2 characters or more.';
    }
    else if(values.refOneName.length>15 && values.refOne===true){
        errors.refOneName='Must be 15 Characters or less.';
    }
    /////Reference One Number/////
    if(!values.refOneNum && values.refOne===true){
        errors.refOneNum='Must have a Phone Number.';
        
    }
    else if(!reg.test(values.refOneNum) && values.refOne===true){
        errors.refOneNum='Must only contain Numbers.'
    }
    else if((values.refOneNum.length<10 || values.refOneNum.length>10) && values.refOne===true){
        errors.refOneNum='This phone number must have an area code and 7 numbers.';
    }
    /////Reference One Email/////
    if(!values.refOneEmail && values.refOne===true){
        errors.refOneEmail='Must have a Email';
        values.refOne=false;
    }
    else if(!values.refOneEmail.match('@') && values.refOne===true) {
        errors.refOneEmail='This email must contain a @'
    }
    else if(!values.refOneEmail.match('com') && values.refOne===true) {
        errors.refOneEmail='Email should also contains .com'
    }
    ///////////////////////////////////////////////////////////////
    /////Reference Two/////
    if(values.refTwoName || values.refTwoNum || values.refTwoEmail){
        values.refTwo=true;
    }
    /////Reference Two Name/////
    if(!values.refTwoName && values.refTwo===true){
        errors.refTwoName='Must have a name.';
        
    }
    else if(values.refTwoName.length<2 && values.refTwo===true){
        errors.refTwoName='Must be at least 2 characters or more.';
    }
    else if(values.refTwoName.length>15 && values.refTwo===true){
        errors.refTwoName='Must be 15 Characters or less.';
    }
    /////Reference Two Number/////
    if(!values.refTwoNum && values.refTwo===true){
        errors.refTwoNum='Must have a Phone Number.';
        
    }
    else if(!reg.test(values.refTwoNum) && values.refTwo===true){
        errors.refTwoNum='Must only contain Numbers.'
    }
    else if((values.refTwoNum.length<10 || values.refTwoNum.length>10) && values.refTwo===true){
        errors.refTwoNum='This phone number must have an area code and 7 numbers.';
    }
    /////Reference Two Email/////
    if(!values.refTwoEmail && values.refTwo===true){
        errors.refTwoEmail='Must have a Email';
        values.refTwo=false;
    }
    else if(!values.refTwoEmail.match('@') && values.refTwo===true) {
        errors.refTwoEmail='This email must contain a @'
    }
    else if(!values.refTwoEmail.match('com') && values.refTwo===true) {
        errors.refTwoEmail='Email should also contains .com'
    }
    ////////////////////////////////////////////////////////////////////////////
    /////Reference Three/////
    if(values.refThrName || values.refThrNum || values.refThrEmail){
        values.refThr=true;
    }
    /////Reference Three Name/////
    if(!values.refThrName && values.refThr===true){
        errors.refThrName='Must have a name.';
        
    }
    else if(values.refThrName.length<2 && values.refThr===true){
        errors.refThrName='Must be at least 2 characters or more.';
    }
    else if(values.refThrName.length>15 && values.refThr===true){
        errors.refThrName='Must be 15 Characters or less.';
    }
    /////Reference Three Number/////
    if(!values.refThrNum && values.refThr===true){
        errors.refThrNum='Must have a Phone Number.';
        
    }
    else if(!reg.test(values.refThrNum) && values.refThr===true){
        errors.refThrNum='Must only contain Numbers.'
    }
    else if((values.refThrNum.length<10 || values.refThrNum.length>10) && values.refThr===true){
        errors.refThrNum='This phone number must have an area code and 7 numbers.';
    }
    /////Reference Three Email/////
    if(!values.refThrEmail && values.refThr===true){
        errors.refThrEmail='Must have a Email';
        values.refThr=false;
    }
    else if(!values.refThrEmail.match('@') && values.refThr===true) {
        errors.refThrEmail='This email must contain a @'
    }
    else if(!values.refThrEmail.match('com') && values.refThr===true) {
        errors.refThrEmail='Email should also contains .com'
    }

    return errors;
};
