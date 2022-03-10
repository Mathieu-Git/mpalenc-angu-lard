import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from 'src/service/api-request.service';

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.scss']
})
export class DepartementsComponent implements OnInit {

  constructor(private apirequestService:ApiRequestService) { }

  ngOnInit(): void {
  }

}
