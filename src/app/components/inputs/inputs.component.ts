import { Component, model } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { AutoService } from '../../service/auto.service';
import { Auto } from '../../model/auto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss'
})
export class InputsComponent {

  constructor(private autoService:AutoService,  private router:Router,){}
  isAdd:boolean = true;
  auto?:Auto;

  id?:string = '';
  modelo:string = '';
  marca:string = '';
  anno:number = 0;
  color:string = '';
  centralizado:boolean = true;
  ac:boolean = true;



  save(){
    this.auto = {
      id: this.id,
      modelo: this.modelo,
      marca: this.marca,
      anno: this.anno,
      color: this.color,
      centralizado: this.centralizado,
      ac: this.ac
    }

    this.autoService.save(this.auto);

  }

  back(){
    this.router.navigate(['autos']);
  }

}
