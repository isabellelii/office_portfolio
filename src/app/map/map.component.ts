import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  latitude = 47.3769;
  longitude = 8.5417;
  
  constructor() { }

  ngOnInit() {
  }

}
