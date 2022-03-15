import { Component, OnInit } from '@angular/core';
import {VinosService} from "../shared/vinosservice/vinos.service";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-vinos',
  templateUrl: './vinos.component.html',
  styleUrls: ['./vinos.component.css']
})
export class VinosComponent implements OnInit {

  public vinos : Array<any>;
  public nombre: any='';
  public filtroBusq:boolean=false;
  public cadenaBuscar:string="";

  constructor(protected vinosService: VinosService,private router : Router, protected route: ActivatedRoute) {


    {
      this.vinos = [];
      this.route.params.subscribe((parameters=> {

        if(parameters['nombre'])
        {
          this.filtroBusq=true;
          this.cadenaBuscar=parameters['nombre'];
          this.vinos = this.vinosService.buscarVinos(parameters['nombre']);
          console.log(parameters['nombre'])
        }
        else
          this.vinos = this.vinosService.getVinos();
      }));
    }


  }


  ngOnInit(): void {
  }


  verVino (idx:number)
  {
    this.router.navigate(['/detalle',idx]);
    console.log(idx)
  }
}
