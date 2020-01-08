import { DataServiceService } from '../data-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dataServiceService: DataServiceService,
    private router: Router) { }

  ngOnInit() { }

  // switch user from dropdown
  switchUser(id) {
    this.dataServiceService.switchUser(id);
    this.router.navigateByUrl('inbox');
  }
}
