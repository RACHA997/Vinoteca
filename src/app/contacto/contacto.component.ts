import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  lat: number = -16.500325;
  lng: number = -151.752382;
  zoom: number = 14;
  constructor() { }



  ngOnInit(): void {
  }

}
