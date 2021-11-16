let saldo:number = 1995;
let monto:number;

document.getElementById("btnLogear").addEventListener("click", function() {

    const datos = {
        nombre: (document.getElementById("nombre")as HTMLInputElement).value,
    };
    if (datos.nombre=="" ){
        alert("Es necesario ingresar sus datos.");
    }else{
        let datosUsuario = new Usuario(datos.nombre);
        document.getElementById("login").setAttribute("style","display:none");
        document.getElementById("idNombre").innerText = "Hola " + datosUsuario.usrNombre.toUpperCase();
        document.getElementById("transaccion").setAttribute("style","display:block");
    }
});

document.getElementById("btnRetiro").addEventListener("click", function() {
    document.getElementById("transaccion").setAttribute("style","display:none");
    document.getElementById("retiro").setAttribute("style","display:block");
    document.getElementById("pSaldo").innerText = 'Saldo disponible: ' + saldo;
});

document.getElementById("btnDeposito").addEventListener("click", function() {
    document.getElementById("transaccion").setAttribute("style","display:none");
    document.getElementById("deposito").setAttribute("style","display:block");
    document.getElementById("pSaldo2").innerText = 'Saldo disponible: ' + saldo;
});

document.getElementById("btnProcesarRetiro").addEventListener("click", function() {
        
    monto =  parseInt((document.getElementById("montoRetiro")as HTMLInputElement).value)
        if(monto == undefined){
            alert("Ingresar un monto a retirar.");
        }else {
            if(saldo >= monto )
            {
            let datosSaldo= new Saldo(saldo-monto);
            saldo=datosSaldo.usrSaldo;
            document.getElementById("pSaldo").innerText = 'Saldo disponible: ' + saldo;
            document.getElementById("retiro").setAttribute("style","display:none");
            document.getElementById("exitoso").setAttribute("style","display:block");
            document.getElementById("saldoFinal").innerText="¡Proceso exitoso! \n" + "Su saldo actual es: \n" + saldo;
            }else{
                document.getElementById("retiro").setAttribute("class","alert alert-danger");
                alert("No tiene sufiente saldo.")
            }
        }
});

document.getElementById("btnProcesarDeposito").addEventListener("click", function() {
    console.log("fsdfcl");
    monto =  parseInt((document.getElementById("montoDesposito")as HTMLInputElement).value)
        if(monto==null){
            alert("Ingresar un monto a depositar.");
        }else {
            let datosSaldo= new Saldo(saldo+monto);
            saldo=datosSaldo.usrSaldo;
            document.getElementById("pSaldo2").innerText = 'Saldo disponible: ' + saldo;
            document.getElementById("deposito").setAttribute("style","display:none");
            document.getElementById("exitoso").setAttribute("style","display:block");
            document.getElementById("saldoFinal").innerText="¡Proceso exitoso! \n" + "Su saldo actual es: \n" + saldo;

        }
});

 class Usuario{
     public usrNombre:string;
     constructor(nombre:string ){
         this.usrNombre=nombre;
     }
 }
 class Saldo{
     public usrSaldo:number;
     constructor(saldo:number)
     {
         this.usrSaldo=saldo;
     }
 }
