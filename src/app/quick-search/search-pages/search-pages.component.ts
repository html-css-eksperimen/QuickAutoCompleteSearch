import { Component, OnInit, OnDestroy } from '@angular/core';
import { BandaraDataService } from 'src/app/services/bandara-data.service';

@Component({
  selector: 'app-search-pages',
  templateUrl: './search-pages.component.html',
  styleUrls: ['./search-pages.component.css']
})
export class SearchPagesComponent implements OnInit, OnDestroy {

  stringPencarian = '';
  bandaraService: any;

  constructor(bandaraServices: BandaraDataService) {
    this.bandaraService = bandaraServices;
  }

  ngOnInit() {
    this.getDataBandaraInit();
  }

  getDataBandaraInit() {

    this.bandaraService.getDataBandara()
    .subscribe();
  }

  searchBandaraPesawat(katakunci: string) {

  }

  ngOnDestroy() {

  }
}
