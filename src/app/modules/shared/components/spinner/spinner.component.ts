import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  isLoading$!:Observable<boolean>
  constructor(private _SpinnerService:SpinnerService) { }

  ngOnInit() {
    this.isLoading$ = this._SpinnerService.isLoading.asObservable()
  }

}
