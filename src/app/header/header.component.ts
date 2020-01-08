import { DataServiceService } from '../data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dataServiceService: DataServiceService) { }

  ngOnInit() {
  }
 switchUser(id){
   this.dataServiceService.switchUser(id);
 }
}
