import { Component, OnInit, OnDestroy } from '@angular/core';
import { BandaraDataService } from 'src/app/services/bandara-data.service';
import { BandaraItem } from 'src/app/models/BandaraItem';
import { BandaraResult } from 'src/app/models/BandaraResult';
import { BehaviorSubject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-pages',
  templateUrl: './search-pages.component.html',
  styleUrls: ['./search-pages.component.css']
})
export class SearchPagesComponent implements OnInit, OnDestroy {

  stringPencarian = '';
  bandaraService: any;

  listBandaraInit: BandaraItem[] = [];
  listBandaraFilter: BandaraItem[] = [];

  subscriptions: Subscription = new Subscription();

  private searchTextSubject$ = new BehaviorSubject<string>('');

  constructor(bandaraServices: BandaraDataService) {
    this.bandaraService = bandaraServices;
  }

  ngOnInit() {
    this.getDataBandaraInit();

    this.subscriptions = this.searchTextSubject$.pipe(
      debounceTime(800),
      distinctUntilChanged(),
      switchMap((stringKunci) => {
        return this.bandaraService.filterDataBandara(this.listBandaraInit, stringKunci);
      })
    ).subscribe(
      (result) => {

      },
      (error) => {

      }
    );
  }

  getDataBandaraInit() {

    this.bandaraService.getDataBandara()
      .subscribe(
        (bandararesult: BandaraResult) => {
          this.listBandaraInit = bandararesult.datajson;
          this.listBandaraFilter = bandararesult.datajson;
        },
        (errors) => {
          console.log(errors);
          this.listBandaraFilter = this.listBandaraInit;
        });
  }

  searchBandaraPesawat(katakunci: string) {

    this.searchTextSubject$.next(katakunci);
  }

  ngOnDestroy() {

  }
}
