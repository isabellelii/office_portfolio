import { Component, OnInit } from '@angular/core';
import { DisplayBuildingsService } from '../display-buildings.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
  buildings: Observable<any[]>;
  columns: string[];

  constructor(private atService: DisplayBuildingsService) {}

  ngOnInit() {
    this.columns = this.atService.getColumns();
    this.buildings = this.atService.getBuildings();
  }

}