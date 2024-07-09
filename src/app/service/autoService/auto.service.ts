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
      color: "Negro",
      valor: 10000000,
      centralizado: true,
      ac: true,
      actions: "as5l47SN",
      dueno: "asd",
      imagen: "https://cdn.pixabay.com/photo/2022/10/04/11/48/mazda-7498005_1280.jpg"
    },
    {
      idAuto: "a2fl4ASn",
      modelo: "Camaro",
      marca: "Chevrolet",
      anno: 2018,
      color: "Gris",
      valor: 12000000,
      centralizado: true,
      ac: false,
      actions: "a2fl4ASn",
      dueno: "dsa",
      imagen: "https://cdn.pixabay.com/photo/2015/12/28/23/35/auto-1112183_1280.jpg"
    }
  ];

  private images: string[] = [
    'https://cdn.pixabay.com/photo/2014/04/12/07/55/car-322180_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/07/31/20/32/volkswagen-7356817_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/04/02/16/31/vintage-car-7107319_1280.jpg',
    'https://cdn.pixabay.com/photo/2024/05/10/16/00/ai-generated-8753302_960_720.jpg',
    'https://cdn.pixabay.com/photo/2014/06/05/17/15/chevrolet-362870_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/03/19/17/50/beetle-2157115_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/03/27/19/44/car-1283947_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/07/13/19/45/edsel-ranger-392745_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/18/14/31/bleached-1834945_1280.jpg',
    'https://cdn.pixabay.com/photo/2013/08/07/15/47/car-170483_1280.jpg'
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

  asignarImagen(): string {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    return this.images[randomIndex];
  }

}
