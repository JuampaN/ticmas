fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => informacionUsuario(data))
    .catch(error => condole.log(err))   

const informacionUsuario = (data) =>{
    document.getElementById("foto").src = data.results[0].picture.large
    document.getElementById("nombre").innerHTML=data.results[0].name.first+ " "+
                                                data.results[0].name.last
    document.getElementById("correo").innerHTML=data.results[0].email
    document.getElementById("telefono").innerHTML=data.results[0].phone
    document.getElementById("edad").innerHTML=data.results[0].dob.age
    document.getElementById("ciudad").innerHTML=data.results[0].location.city+", "+
                                                data.results[0].location.state+" - "+
                                                data.results[0].location.country
}
/*
function mostrar_descripciones(){
    const elementos = document.getElementsByClassName("desc");
    if (elementos[0].style.display = "none"){
        for (let i=0; i < elementos.length; i++){
            elementos[i].style.display = "block";
        }
        document.getElementById("boton_mostrar").innerHTML="Ocultar descripción";
    } else {
        for (let i=0; i < elementos.length; i++){
            elementos[i].style.display = "none";
        }
        document.getElementById("boton_mostrar").innerHTML="Mostrar descripción";
    }
};
*/
var b = new Boolean(false);
function mostrar_descripciones(){
    const elementos = document.getElementsByClassName("desc");
    if (b == false){
        for (let i=0; i < elementos.length; i++){
            elementos[i].style.display = "block";
        }
        document.getElementById("boton_mostrar").innerHTML="Ocultar descripción";
        b = true;
    } else {
        for (let i=0; i < elementos.length; i++){
            elementos[i].style.display = "none";
        }
        document.getElementById("boton_mostrar").innerHTML="Mostrar descripción";
        b = false;
    }
};