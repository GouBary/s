const F1 =document.getElementById("Correo")
        // onsubmit sirve para asociar una funcion de test de algun formulario
          F1.onsubmit=(Bnb)=>{
            //   por si sucede algo cancela el evento 
            Bnb.preventDefault();
            let Nusuario =document.getElementById("P1").value
            if(Nusuario === '' ){ 
            Swal.fire (
                'Oh no,no lo llenaste!!!',
                'sin tu correo no te podemos enviar la informacion!',
                'warning'
            )
        } else { Swal.fire (
            'Genial!',
            'Ya recibimos tu mensaje!',
            'success'
        ) }
        
    
    }