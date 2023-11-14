import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  data: any;
  constructor(public activeRoute: ActivatedRoute, public router: Router) {}
  ngOnInit() {
    console.log(this.activeRoute.snapshot.paramMap.get('id')); //getting data by id
    console.log(this.activeRoute.snapshot.queryParamMap); //querParms
    // console.log(this.router.getCurrentNavigation()); //through state
  }
}
