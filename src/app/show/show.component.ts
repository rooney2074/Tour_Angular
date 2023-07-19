import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  show:any=[];
  head:any;
  paisa:number=0
  total:any=[];
  grand:any

  constructor(private db:DataService){}

  ngOnInit(): void {
    this.show=this.db.booknow
    this.paisa=this.db.booknow.price
    console.log(this.paisa)
  }

  ok(){
    this.total=this.paisa*this.head;
    this.grand=this.total*70/100;
  }

}
