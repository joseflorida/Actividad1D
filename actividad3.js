const rl = require('readline-sync');
class artcientificos {
  constructor(titulo,autor,paginas,añopub,menciones) {
    this.titulo = titulo ;
    this.autor = autor ;
    this.paginas = paginas ;
    this.añopub = añopub ;
    this.menciones = menciones ;
  }
}
class revista extends artcientificos {
  constructor(titulo,autor,paginas,añopub,menciones,titulo_revista,editorial,impacto) {
    super(titulo,autor,paginas,añopub,menciones);
    this.titulo_revista = titulo_revista ;
    this.editorial = editorial;
    this.impacto = impacto ;
  }
}
class conferencia extends artcientificos {
  constructor(titulo,autor,paginas,añopub,menciones,libro_conf,conferencia,lugar) {
    super(libro_conf,conferencia,lugar);
    this.libro_conf = libro_conf;
    this.conferencia = conferencia ;
    this.lugar = lugar ;
  }
}
  class cientificas {
    constructor(autor,año_pub,año_ven) {
      this.autor = autor ;
      this.año_pub = año_pub ;
      this.año_ven = año_ven ;
    }
  }

  let lista_revista =[];
  let lista_conferencia=[];
  let lista_patentes=[];


while (true) {
  let opcion = rl.question('Introduce la accion\n'+
'1)Introducir articulo cientifico\n'+
'2)Introducir patente cientifica\n'+
'3)Buscar patente cientifica' );

  if (opcion==='1') {

  let opcion = rl.question('Introduce el tipo de articulo cientifico\n'+
'1)Introducir Revista\n'+
'2)Introducir Conferencia');
  if (opcion==='1') {
    let titulo = rl.question('Introduce el titulo:');
    let autor = rl.question('Introduce el autor:');
    let paginas = rl.question('Introduce el numero de paginas:');
    let añopub = rl.question('Introduce el año de publicacion:');
    let menciones = rl.question('Introduce las menciones:');
    let titulo_revista = rl.question('Introduce el titulo de la revista:');
    let editorial = rl.question('Introduce la editorial');
    let impacto = rl.question('Introduce el impacto:');
    let nuevo_revista = new revista(titulo,autor,paginas,añopub,menciones,titulo_revista,editorial,impacto);
    lista_revista.push(nuevo_revista);
  }else if (opcion==='2') {
    let titulo = rl.question('Introduce el titulo:');
    let autor = rl.question('Introduce el autor:');
    let paginas = rl.question('Introduce el numero de paginas:');
    let añopub = rl.question('Introduce el año de publicacion:');
    let menciones = rl.question('Introduce las menciones:');
    let conferencia = rl.question('Introduce conferencia');
    let libro_conf = rl.question('Introduce libro conf');
    let lugar = rl.question('Introdiuce el lugar');
    let nuevo_conferencia = new conferencia(titulo,autor,paginas,añopub,menciones,conferencia,libro_conf,lugar);
    lista_conferencia.push(nuevo_conferencia);

}
  }else if (opcion==='2') {
let autor = rl.question('Introduce el autor:');
let año_pub = rl.question('Introduce el año de publicacion:');
let año_ven = rl.question('Introduce el año de vencimiento:');
let nuevo_patente = new revista(autor,año_pub,año_ven);
lista_patentes.push(nuevo_patente);

  }else if (opcion==='3') {
    let opcion = rl.question('Introduce el tipo de articulo a buscar\n'+
  '1) Revista\n'+
  '2) Conferencia\n'+
  '3) Patente cientifica' );

    if (opcion==='1') {
    let titulo_revista = rl.question('Introduce el titulo a buscar:');
    for (let revista of lista_revista) {
    if(revista.titulo_revista===titulo_revista){
    console.log(revista);
    }
    }
    }
    else if (opcion==='2') {
    let titulo_conferencia = rl.question('Introduce el titulo a buscar:');
    for (let conferencia of lista_conferencia) {
    if(conferencia.titulo_conferencia===titulo_conferencia){
    console.log(conferencia);
    }
    }
    }
    else if (opcion==='3') {
    let autor = rl.question('Introduce el titulo a buscar:');
    for (let cientificas of lista_patentes) {
    if(cientificas.autor===autor){
    console.log(cientificas);
    }
    }
    }
}

}
