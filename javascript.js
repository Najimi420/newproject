document.querySelector('#login-btn').onclick = () =>{
document.querySelector('.user-container').classList.toggle('active');
}


document.querySelector('#cross').onclick = () =>{
    document.querySelector('.user-container').classList.remove('active');
    }


    document.querySelector('#register').onclick = () =>{
        document.querySelector('.register-container').classList.toggle('active-register')
        document.querySelector('.user-container').classList.remove('active');
        }

        document.querySelector('#register-cross').onclick = () =>{
            document.querySelector('.register-container').classList.remove('active-register');
            }


document.querySelector('#register-login').onclick = () =>{
        document.querySelector('.user-container').classList.toggle('active')
        document.querySelector('.register-container').classList.remove('active-register');
        }

        document.querySelector('#btn-that-show-search').onclick = () =>{
            document.querySelector('.search').classList.toggle('search-show');
            }



            document.querySelector('#submit').onclick = () =>{
                document.querySelector('.thank-you-registration').classList.toggle('hhhh');
                document.querySelector('.user-container').classList.remove('active');
                
                }

            document.querySelector('#thankyok').onclick = () =>{
                document.querySelector('.thank-you-registration').classList.remove('hhhh');
                }


                document.querySelector('#submitt').onclick = () =>{
                    document.querySelector('.thank-you-registration').classList.toggle('hhhh');
                    document.querySelector('.register-container').classList.remove('active-register');
                    
                    }
    
                document.querySelector('#thankyok').onclick = () =>{
                    document.querySelector('.thank-you-registration').classList.remove('hhhh');
                    }





function changecolor(){
    document.body.style.backgroundColor=
    'rgb(' + Math.round(Math.random() * 255) +
    ',' + Math.round(Math.random() * 255) +
    ',' + Math.round(Math.random() * 255) + ')';
}





            
               




         

    
        
        
    


    
    
