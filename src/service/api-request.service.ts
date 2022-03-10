import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Regions } from 'src/model/region';


@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  // https://geo.api.gouv.fr/regions
  rawUrl:string = 'https://geo.api.gouv.fr';
  regionUrl:string ='/regions';
  constructor(private httpClient: HttpClient) { }

  getLocationInfo(): Observable<Regions>{
    return this.httpClient.get<Regions>(this.rawUrl + this.regionUrl);
  }
}
