import { Component } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nodb';
  searchQuery:string = null;

  queryGames() {
    console.log("here")
    axios.get(`/api/search/${this.searchQuery}`).then(console.log)
  }
}
