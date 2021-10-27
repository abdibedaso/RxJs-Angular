import { Component } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs';

  ngOnInit() {
    fromEvent(document, 'click').subscribe(x => console.log(x));
  }

  inputChanged($event){
    console.log("input changed", $event);
  }

  ngOnDestroy(){
  }

}
