import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs';

  mySubject$;

  ngOnInit() {
    this.mySubject$ = new Subject();

    this.mySubject$.subscribe(x => console.log('first subscribe', x));

    this.mySubject$.next(1);
    this.mySubject$.next(2);

    // subjects are not reusable
    // this.mySubject$.complete();
    // this.mySubject$.unsubscribe();

    this.mySubject$.subscribe(x => console.log('second subscribe', x));

    this.mySubject$.next(3);
  
  }

  ngOnDestroy(){
    this.mySubject$.unsubscribe();
  }

}