import { Component, OnInit } from '@angular/core';
import { EchoService } from '../echo.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl: `second.component.html`,
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  public response: Observable<any>;

  constructor(private echoService: EchoService) {}

  public ngOnInit(): void {
      this.response = this.echoService.makeCall();
  }
}

