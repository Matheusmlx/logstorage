import { Component, OnInit } from '@angular/core';
export interface LogStorage {
  id: number;
  content: string;
  occurrences: number;
}

const ELEMENT_DATA: LogStorage[] = [
  {id: 1, content: 'Hydrogen', occurrences: 1.0079},
  {id: 2, content: 'Helium', occurrences: 4.0026},
  {id: 3, content: 'Lithium', occurrences: 6.941},
  {id: 4, content: 'Beryllium', occurrences: 9.0122},
  {id: 5, content: 'Boron', occurrences: 10.811},
  {id: 6, content: 'Carbon', occurrences: 12.0107},
  {id: 7, content: 'Nitrogen', occurrences: 14.0067},
  {id: 8, content: 'Oxygen', occurrences: 15.9994},
  {id: 9, content: 'Fluorine', occurrences: 18.9984},
  {id: 10, content: 'Neon', occurrences: 20.1797},
];


@Component({
  selector: 'app-logdatatable',
  templateUrl: './logdatatable.component.html',
  styleUrls: ['./logdatatable.component.css']
})
export class LogdatatableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'content', 'occurrences'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {

  }

}
