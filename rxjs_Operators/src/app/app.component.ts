import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { filter, take, map } from  'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs';

  ngOnInit() {
    const numbers$ = interval(1000);

    numbers$
    .pipe(
      take(5),
      map(x => x * 10),
      filter(x => x > 20)
    ).subscribe(x => console.log(x));
  
  }

  ngOnDestroy(){
  }

}