import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { Auto } from '../../model/auto';
import { AutoService } from '../../service/autoService/auto.service';

@Component({
    selector: 'app-ventas',
    standalone: true,
    templateUrl: './ventas.component.html',
    styleUrl: './ventas.component.scss',
    imports: [CardComponent]
})
export class VentasComponent {

  autos:Auto[]=[]
  constructor(private autoService:AutoService){

  }
  ngOnInit(){
    this.autos=this.autoService.get();
  }

}
