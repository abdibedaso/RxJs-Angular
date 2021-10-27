import { Component } from '@angular/core';
import { interval, of } from 'rxjs';
import { filter, take, map, mergeMap } from  'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs';

  ngOnInit() {
    
    // const numbers$ = interval(1000);

    // numbers$
    // .pipe(
    //   take(5),
    //   map(x => x * 10),
    //   filter(x => x > 20)
    // ).subscribe(x => console.log(x));

    const _numbers$ = interval(1000);
    const letters$ = of('a','b','c','d','e');
  
    letters$.pipe(
      mergeMap(x => 
        _numbers$
        .pipe(
          take(5),
          map(i => i + x)
    ))).subscribe(x => console.log(x));

  }

  ngOnDestroy(){
  }

}