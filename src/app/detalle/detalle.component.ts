import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {VinosService} from "../shared/vinosservice/vinos.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  public vino : any ;

  constructor(
              protected route: ActivatedRoute,
  protected vinosService: VinosService)
  {
    this.route.params.subscribe(parameters => {
      let vinoId = parameters['id'];
      this.vino = this.vinosService.getVino(vinoId);
      console.log(this.vino);
    });

  }

  ngOnInit(): void {

  }






}
