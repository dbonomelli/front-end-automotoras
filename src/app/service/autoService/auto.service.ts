import { Injectable } from '@angular/core';
import { Auto } from '../../model/auto';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  constructor() { }

  autos:Auto[] = [
    {
      idAuto: "as5l47SN",
      modelo: "3",
      marca: "Mazda",
      anno: 2004,
      color: "Azul",
      valor: 10000000,
      centralizado: true,
      ac: true,
      actions: "as5l47SN"
    },
    {
      idAuto: "a2fl4ASn",
      modelo: "Spark",
      marca: "Chevrolet",
      anno: 2018,
      color: "Rojo",
      valor: 12000000,
      centralizado: true,
      ac: false,
      actions: "a2fl4ASn"
    }
  ];

  public get():Auto[]{
    return this.autos;
  }

  public save(auto: Auto){
    this.autos.push(auto)
  }

  public edit(id: string, auto: Auto){
    this.autos.find((a) => {
      if(a.idAuto === id){
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

  public getAuto(id: string){
    return this.autos.find(auto => auto.idAuto === id);
  }

  public getAutoById(id: any){
    return this.autos.find(auto => auto.idAuto === id);
  }

  public delete(id: string){
    const index = this.autos.findIndex(i => i.idAuto === id)
    if(index !== -1){
      this.autos.splice(index, 1);
    }
  }

}
