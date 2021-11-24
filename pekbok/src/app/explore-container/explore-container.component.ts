import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor(private router: Router) { }

  

  ngOnInit() {}


  detailsPage(){
    this.router.navigate(['/card-details'])
  }

  detailsPage2(){
    this.router.navigate(['/card-details2'])
  }
}
