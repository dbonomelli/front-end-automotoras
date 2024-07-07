import { Component, OnInit } from '@angular/core';
import { InputsComponent } from '../../../components/inputs/inputs.component';
import { ActivatedRoute } from '@angular/router';
import { AutoService } from '../../../service/autoService/auto.service';

@Component({
  selector: 'app-edit-auto',
  standalone: true,
  imports: [InputsComponent],
  templateUrl: './edit-auto.component.html',
  styleUrl: './edit-auto.component.scss'
})
export class EditAutoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private autoService: AutoService ){}
  auto:any
  action: string = "EDIT";

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.auto = this.autoService.getAuto(params['id']);
    })
  }
  
}
