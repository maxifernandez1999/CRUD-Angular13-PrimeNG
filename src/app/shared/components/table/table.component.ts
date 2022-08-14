//@angular
import { Component, OnInit } from '@angular/core';

//sevices
import { DataService } from '../../services/data.service';

//classes
import { Data } from 'src/app/core/models/data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  data: Data[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(res => {
      this.data = <Data[]> res.data
    })
  }

}
