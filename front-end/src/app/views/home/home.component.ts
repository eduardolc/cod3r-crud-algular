import { Component, OnInit } from '@angular/core';
import { HeaderData } from '../../components/tamplate/header/header-data.model';
import { HeaderService } from '../../components/tamplate/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private headerService: HeaderService
  ) {
    this.headerService.headerData = new HeaderData('Início', 'home', '');
   }

  ngOnInit(): void {
  }

}
