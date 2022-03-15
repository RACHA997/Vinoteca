import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VinosService {




  protected vinos = [
    {
      "nombre": "BLOCK NINE",
      "uvas": "Pinot Noir",
      "pais": "USA",
      "anyo": 2009,
      "precio": 12,
      "imagen": "block_nine.jpg",
      "descripcion": "Con toques de jengibre y especias, este vino es un excelente complemento para aperitivos ligeros y postres para una reunión navideña",
      "id": 9,
      "region": "California"
    },
    {
      "nombre": "BODEGA LURTON",
      "uvas": "Pinot Gris",
      "pais": "Argentina",
      "anyo": 2011,
      "precio": 11,
      "imagen": "bodega_lurton.jpg",
      "descripcion": "Notas sólidas de grosella negra mezcladas con un ligero cítrico hacen que este vino sea fácil de servir para paladares variados",
      "id": 11,
      "region": "Mendoza"
    },
    {
      "nombre": "CHATEAU DE SAINT COSME",
      "uvas": "Grenache / Syrah",
      "pais": "France",
      "anyo": 2012,
      "precio": 5,
      "imagen": "saint_cosme.jpg",
      "descripcion": "Los aromas de frutas y especias dan un toque de la ligera potabilidad de este hermoso vino, que es un excelente complemento para los platos de pescado",
      "id": 1,
      "region": "Southern Rhone / Gigondas"
    },
    {
      "nombre": "CHATEAU LE DOYENNE",
      "uvas": "Merlot",
      "pais": "France",
      "anyo": 2005,
      "precio": 25,
      "imagen": "le_doyenne.jpg",
      "descripcion": "Aunque denso y masticable, este vino no domina con su estructura y profundidad finamente equilibradas. Es una experiencia verdaderamente lujosa para los sentidos",
      "id": 7,
      "region": "Bordeaux"
    },
    {
      "nombre": "DOMAINE DU BOUSCAT",
      "uvas": "Merlot",
      "pais": "France",
      "anyo": 2009,
      "precio": 19,
      "imagen": "bouscat.jpg",
      "descripcion": "El color dorado claro de este vino contradice el sabor brillante que tiene. Un verdadero vino de verano, pide un almuerzo campestre en un viñedo bañado por el sol",
      "id": 8,
      "region": "Bordeaux"
    },
    {
      "nombre": "DOMAINE SERENE",
      "uvas": "Pinot Noir",
      "pais": "USA",
      "anyo": 2007,
      "precio": 17,
      "imagen": "domaine_serene.jpg",
      "descripcion": "Aunque sutil en sus complejidades, este vino seguramente complacerá a una amplia gama de entusiastas. Las notas de granada te deleitarán, ya que el final a nuez completa la imagen de una experiencia de buen sorbo",
      "id": 10,
      "region": "Oregon"
    },
    {
      "nombre": "LAN RIOJA CRIANZA",
      "uvas": "Tempranillo",
      "pais": "Spain",
      "anyo": 2006,
      "precio": 20,
      "imagen": "lan_rioja.jpg",
      "descripcion": "Un resurgimiento del interés en los viñedos boutique ha abierto la puerta para esta excelente incursión en el mercado de los vinos de postre. Ligero y vivaz, con un toque de trufa negra, este vino no dejará de hacer cosquillas a las papilas gustativas",
      "id": 2,
      "region": "Rioja"
    },
    {
      "nombre": "LES MORIZOTTES",
      "uvas": "Chardonnay",
      "pais": "France",
      "anyo": 2009,
      "precio": 9,
      "imagen": "morizottes.jpg",
      "descripcion": "Rompiendo los moldes de los clásicos, esta oferta sorprenderá y sin duda hará que la lengua se mueva con los toques de café y tabaco en perfecta alineación con notas más tradicionales. Rompiendo el molde de los clásicos, esta oferta sorprenderá y, sin duda, hará que la lengua se mueva con las notas de café y tabaco en perfecta alineación con notas más tradicionales. Seguro que complacerá a la multitud nocturna con la ligera descarga de adrenalina que trae",
      "id": 12,
      "region": "Burgundy"
    },
    {
      "nombre": "MARGERUM SYBARITE",
      "uvas": "Sauvignon Blanc",
      "pais": "USA",
      "anyo": 2010,
      "precio": 15,
      "imagen": "margerum.jpg",
      "descripcion": "El alijo de un fino Cabernet en la propia bodega ahora puede ser reemplazado por un vino infantilmente juguetón burbujeando con tentadores sabores de cereza negra y regaliz. Este es un sabor que seguramente te transportará al pasado",
      "id": 3,
      "region": "California Central Cosat"
    },
    {
      "nombre": "OWEN ROE \"EX UMBRIS\"",
      "uvas": "Syrah",
      "pais": "USA",
      "anyo": 2009,
      "precio": 9,
      "imagen": "ex_umbris.jpg",
      "descripcion": "Un ponche doble de pimienta negra y jalapeño hará que tus sentidos se tambaleen, mientras la esencia de naranja te devuelve a la realidad. No se pierda esta sensación de sabor galardonada",
      "id": 4,
      "region": "Washington"
    },
    {
      "nombre": "REX HILL",
      "uvas": "Pinot Noir",
      "pais": "USA",
      "anyo": 2009,
      "precio": 8,
      "imagen": "rex_hill.jpg",
      "descripcion": "No se puede dudar de que este será el vino que se servirá en las entregas de premios de Hollywood, porque tiene un innegable poder estelar. Sé el primero en ver el debut del que todos hablarán mañana",
      "id": 5,
      "region": "Oregon"
    },
    {
      "nombre": "VITICCIO CLASSICO RISERVA",
      "uvas": "Sangiovese Merlot",
      "pais": "Italy",
      "anyo": 2007,
      "precio": 18,
      "imagen": "viticcio.jpg",
      "descripcion": "Aunque de textura suave y redondeada, el cuerpo de este vino es pleno, rico y muy atractivo. Esta entrega es aún más impresionante cuando se nota los tiernos taninos que dejan las papilas gustativas totalmente satisfechas",
      "id": 6,
      "region": "Tuscany"
    }
  ]


  constructor() { }
  // @ts-ignore
  protected filterCollection(nombreFilt){

    class vinos {
      // @ts-ignore
      public nombre: string;
      // @ts-ignore
      public uvas: string;
      // @ts-ignore
      public pais: string;
      // @ts-ignore
      anyo: number;
      // @ts-ignore
      precio: number;
      // @ts-ignore
      imagen: string;
      // @ts-ignore
      descripcion: string;
      // @ts-ignore
      id: number;
      // @ts-ignore
      region: string;
    }

    var arr: vinos[] = [];

    this.vinos.forEach(element => {
      if(element.nombre.toUpperCase().includes(nombreFilt.toUpperCase())){
        arr.push(element);
      }
    });
    return arr;
  }

  /*public getVino(nombre?:string): Array<any> {
    if (nombre!=undefined && nombre.trim()!="" ){
      return this.filterCollection(nombre);
    }
    else
      return this.vinos;
  }*/
  getVino(idx:number):any{

    let ret: any =null ;

    for (let vino of this.vinos) {
      if (vino.id==idx)
        ret=vino;
    }

    return ret;

  }

  getVinos (): any []
  {
    return this.vinos
  }

  buscarVinos( termino : string ):any[]
  {
    let vinoArr:any []=[];
    termino = termino.toLowerCase();

    for( let i=0; i<this.vinos.length; i++){

      let vino=this.vinos[i];

      let nombre=vino.nombre.toLowerCase();
      if ( nombre.indexOf( termino ) >= 0) {
        vinoArr.push(vino);
      }

    }

    return vinoArr;
  }

  }


