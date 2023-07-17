import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-desktop4',
  templateUrl: 'desktop4.component.html',
  styleUrls: ['desktop4.component.css'],
})
export class Desktop4 {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
