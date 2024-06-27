import { Injectable } from '@angular/core';
import { Auto } from '../../model/auto';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  constructor() { }

  autos:Auto[] = [
    {
      id: "as5l47SN",
      modelo: "3",
      marca: "Mazda",
      anno: 2004,
      color: "Azul",
      valor: 10000000,
      centralizado: true,
      ac: true
    },
    {
      id: "a2fl4ASn",
      modelo: "Spark",
      marca: "Chevrolet",
      anno: 2018,
      color: "Rojo",
      valor: 12000000,
      centralizado: true,
      ac: false
    }
  ];

  public get(){
    return this.autos;
  }

  public save(auto: Auto){
    this.autos.push(auto)
  }

  public edit(id: string, auto: Auto){
    this.autos.filter((a) => {
      if(a.id === id){
        a.modelo = auto.modelo,
        a.marca = auto.marca,
        a.color = auto.color,
        a.valor = auto.valor,
        a.centralizado = auto.centralizado,
        a.anno = auto.anno
        a.ac = auto.ac
      }
    })
  }

  public delete(id: string){
    this.autos.filter((a)=>{
      if(a.id === id){
        this.autos.pop();
      }
    })
  }

}
