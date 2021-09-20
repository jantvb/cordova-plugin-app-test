import { FaceMeService } from './../providers/face-me.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  licenseKey = '';

  constructor(private faceMeService: FaceMeService) {}

  getLicense(): void {
    this.faceMeService.inizialize(this.licenseKey).then(result => {
      alert('License key is ' + result);
    }).catch(err => {
      alert('Error is ' + err);
    });
  }

}
