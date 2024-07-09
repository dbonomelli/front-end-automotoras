import { Component, Input, OnInit, model } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Auto } from '../../model/auto';
import { Router } from '@angular/router';
import { AutoService } from '../../service/autoService/auto.service';
import { AuthService } from '../../service/auth/auth.service';


@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss'
})
export class InputsComponent implements OnInit{
  @Input() action?:string;
  @Input() editAuto:any;
  constructor(private autoService:AutoService,  private router:Router, private authService:AuthService){}
  isAdd:boolean = true;
  idDueno:any;
  dueno:any;
  ngOnInit(): void {
    this.dueno = sessionStorage.getItem('username');
    this.idDueno = this.authService.getUserByEmail(this.dueno)
    if(this.editAuto != null){
      this.id = this.editAuto.idAuto;
      this.modelo = this.editAuto.modelo;
      this.marca = this.editAuto.marca;
      this.anno = this.editAuto.anno;
      this.color = this.editAuto.color;
      this.valor = this.editAuto.valor;
      this.centralizado = this.editAuto.centralizado;
      this.ac = this.editAuto.ac;
      this.isAdd = false;
    }
  }

  auto?:Auto;
  id:string = '';
  modelo:string = '';
  marca:string = '';
  anno:number = 0;
  color:string = '';
  valor:number = 0;
  centralizado:boolean = true;
  ac:boolean = true;


  formAction(){
    if(this.action == 'SAVE'){
      this.save();
    }else{
      this.edit();
    }
  }



  save(){
    const id = this.generadorID(8);
    const imagenG = this.autoService.asignarImagen();
    this.auto = {
      idAuto: id,
      modelo: this.modelo,
      marca: this.marca,
      anno: this.anno,
      color: this.color,
      valor: this.valor,
      centralizado: this.centralizado,
      ac: this.ac,
      actions: id,
      dueno: this.idDueno.id,
      imagen: imagenG
    }

    this.autoService.save(this.auto);
    this.back();
  }

  edit(){
    this.auto = {
      idAuto: this.id,
      modelo: this.modelo,
      marca: this.marca,
      anno: this.anno,
      color: this.color,
      valor: this.valor,
      centralizado: this.centralizado,
      ac: this.ac
    }
    this.autoService.edit(this.id, this.auto);
    this.back();
  }

  back(){
    this.router.navigate(['autos']);
  }

  deleteAuto(){
    this.autoService.delete(this.id);
    this.back();
  }

  generadorID(length: number) {
    let alfab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += alfab.charAt(Math.floor(Math.random() * alfab.length));
    }
    return result;
}

}
