import { Component, Input, model } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Auto } from '../../model/auto';
import { Router } from '@angular/router';
import { AutoService } from '../../service/autoService/auto.service';


@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss'
})
export class InputsComponent {
  @Input() action?:string;
  constructor(private autoService:AutoService,  private router:Router,){}
  isAdd:boolean = true;
  auto?:Auto;

  id?:string = '';
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
    this.auto = {
      id: this.generadorID(8),
      modelo: this.modelo,
      marca: this.marca,
      anno: this.anno,
      color: this.color,
      valor: this.valor,
      centralizado: this.centralizado,
      ac: this.ac
    }

    this.autoService.save(this.auto);
    this.back();
  }

  edit(){

  }

  back(){
    this.router.navigate(['autos']);
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
