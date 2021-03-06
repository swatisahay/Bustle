import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { apiKey } from './../env';

@Component({
  selector: 'app-business-api',
  templateUrl: './business-api.component.html',
  styleUrls: ['./business-api.component.css']
})
export class BusinessApiComponent {

  private apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey='+apiKey()
  data: any = {};
  constructor(private http: Http){
    console.log("hello");
    this.getArticle();
    this.getData();
  }
  getData()
  {
    return this.http.get(this.apiUrl)
    .map((res: Response) => res.json())
  }
  getArticle()
  {
    this.getData().subscribe(data => {
      console.log(data);

      this.data =data;
     })
  }

}
