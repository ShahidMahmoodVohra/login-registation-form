/*=============== SHOW HIDE PASSWORD LOGIN ===============*/
const passwordAccess = (loginPass, loginEye) =>{
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye)  

    iconEye.addEventListener('click' , ()=>{
        // change password to text
        input.type === 'password' ? input.type = 'text'
                                   : input.type = 'password'
        // icon change  
        iconEye.classList.toggle('ri-eye-fill')                          
        iconEye.classList.toggle('ri-eye-off-fill')                          

    });     
}

passwordAccess('password' , 'loginPassword')


/*=============== SHOW HIDE PASSWORD CREATE ACCOUNT ===============*/


/*=============== SHOW HIDE LOGIN & CREATE ACCOUNT ===============*/
