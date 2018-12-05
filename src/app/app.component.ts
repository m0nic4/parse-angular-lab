import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parse-angular-lab';
  private paises = null;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get("https://restcountries.eu/rest/v2/all")
    .subscribe(
      result => {
        this.paises = result;
      }, error => {
        console.log('error https://restcountries.eu/rest/v2/all');
      }
    );
  }
}
