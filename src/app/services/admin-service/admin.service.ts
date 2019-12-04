import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  serviceUrl = environment.serviceUrl;

  constructor(
    private http: HttpClient
  ) { }

  login(data) {
    return this.http.post(this.serviceUrl + '/admin/login', data);
  }

  saveSurvey(data) {
    return this.http.post(this.serviceUrl + '/admin/saveSurvey', data);
  }

  getAllDraftSurveys() {
    return this.http.get(this.serviceUrl + '/admin/getAllDraftSurveys');
  }

  launchSurvey(data) {
    return this.http.put(this.serviceUrl + '/admin/launchSurvey', data);
  }

}
