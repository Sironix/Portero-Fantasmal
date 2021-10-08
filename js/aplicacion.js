
let var_piso="";
let var_dpto="";
let ending=[
"desaparecio sin dejar rastro.",
"fue destruido.",
"nunca existio.",
"es un mito urbano.",
"desaparecio sin dejar rastro.",
"fue destruido.",
"nunca existio.",
"es un mito urbano.",
"desaparecio sin dejar rastro.",
"fue destruido.",
"nunca existio.",
"es un mito urbano.",
"esta fuera de tu alcanze.",
"es muy peligroso para ti.",
"esta fuera de tu alcanze.",
"es muy peligroso para ti.",
"esta fuera de tu alcanze.",
"es muy peligroso para ti.",
"no tiene telefono.",
]

function escribir(value){
  if(var_piso.length<2){
    var_piso +=value;
    $("#Piso").text(var_piso);
  }
  else if(var_dpto.length==0){
    var_dpto += value;
    $('#Dpto').text(var_dpto)
  }  
}

function del(){
  if(var_dpto.length>0){

    var_dpto = var_dpto.slice(0, -1);
    $('#Dpto').text('Dpto');

  }
  else if(var_piso.length>0){
    var_piso = var_piso.slice(0, -1);

    if(var_piso.length==0){
    $('#Piso').text('Piso');
    }

    else{
      $('#Piso').text(var_piso);
    }
  }
};//end of Del



function llamar(){
  if(parseInt(var_dpto)<=8 && parseInt(var_piso)<=42 && parseInt(var_dpto)>0){
    $('#Response').text(`Llamando al piso ${var_piso} del dpto ${var_dpto} preparate.`);
    $('#Response').show();
  }
  else if(parseInt(var_dpto)>8 ||var_dpto=="0"){
    let end_ran = Math.floor(Math.random() *(ending.length-1))
    $('#Response').text(`El dpto ${var_dpto} ${ending[end_ran]}`);

  }
  else{
    let end_ran = Math.floor(Math.random() *(ending.length-1))
    $('#Response').text(`El piso ${var_dpto} ${ending[end_ran]}`)

  }
}