import { Injectable } from '@angular/core';
//Paso 1.IMportar la conexion con el servicio y angular
import { Observable, from } from 'rxjs';
//Importacion de Airtable
import Airtable from 'airtable';
import { resolve } from 'path';

@Injectable({
  providedIn: 'root'
})
export class BasedatosService {
  //Paso 2. Crear la variable de conexion
  private base:any;
  constructor() { 
    //Paso 3. Configurar la conexion con Airtable
    Airtable.configure({
      apiKey:'',
      endpointUrl:'https://api.airtable.com'
    });
    //Paso 4. Configurar el id de la base de datos
    this.base=Airtable.base('');
  }
  //Paso 5. Crear el metodo para obtener los registros de los productos
  obtenerProductos():
  Observable<any[]>{
    return from(new Promise<any[]>((resolvem,reject)=>{
      const registros:any[]=[];
      this.base('Productos').select({
        view:'Grid view'
      }).eachPage(
        function page(records:any[],siguiente:()=>void){
          //Agregar los registros obtenidos a la lista vacia
          records.forEach(registro=>{
            registros.push({
              id:registro.id,
              nombre:registro.get('Nombre'),
              precio:registro.get('Precio'),
              imagen:registro.get('Imagen')
            });
          });
          siguiente();
        },
        function salir(error:any){
          if(error){
            reject(error);
          }else{
            reject(registros);
          }
        }
      );
    }));
  }

}
