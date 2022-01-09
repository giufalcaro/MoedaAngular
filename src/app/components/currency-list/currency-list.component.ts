import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})



export class CurrencyListComponent implements OnInit {
  tableColumns  :  string[] = ['name', 'code', 'ask' ];
  currencies : {name:string, code: string, ask: string} [] = [];

  public dataSource = new MatTableDataSource<{name:string, ask: string}>();

  ngOnInit(): void {
    this.getCurrenies()
  }

  constructor( public rest: RestService,  private changeDetectorRefs: ChangeDetectorRef) {

  }


  async getCurrenies(): Promise<any> {
     this.rest.getAll().subscribe((resp: any) => {
       console.log(resp)
      for (let item in resp) {
        this.currencies.push({name: resp[item].name, code: resp[item].code, ask: resp[item].ask})
      }
      this.dataSource.data = this.currencies;
    });
  }




}
