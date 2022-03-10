import { Component, OnInit } from '@angular/core';
import { Regions } from 'src/model/region';
import { regionPlatformRequest } from 'src/model/regionPlatformRequest';
import { ApiRequestService } from 'src/service/api-request.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {
 region: regionPlatformRequest<Regions> | undefined;
  constructor(private apiRequestServise: ApiRequestService) { }

  ngOnInit(): void {
    this.apiRequestServise.getLocationInfo().subscribe((jsonResponse) => {
     console.log(jsonResponse)
    });
  }

}
