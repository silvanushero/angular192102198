import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

declare const $ : any;

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})

export class ForexComponent implements OnInit, AfterViewInit {
  private _table1 : any;

  constructor(private renderer : Renderer2, private http : HttpClient) { }

  ngAfterViewInit(): void {
      this.renderer.removeClass(document.body, "sidebar-open");
      this.renderer.addClass(document.body, "sidebar-closed");

      this._table1 = $("#table1").DataTable
      (
        {
          "columnDefs" :
          [
            {
              "targets" : 2,
              "className" : "text-right"
            }
          ]
        }
      );

    this.getData();
  }
  
  ngOnInit(): void {
  }

  getData(): void{
    console.log("getData()");

    var url = "https://openexchangerates.org/api/latest.json?app_id=67aa81b30f6f4493afdc3d118f36f501";

    this.http.get(url)
    .subscribe((data : any) => {
      console.log(data);

      var rates = data.rates;
      console.log(rates);

      var idr = rates.IDR;
      var idr2 = formatCurrency(idr, "en-US", "Rp", "USD");
      console.log("USD :" + idr2);
      var row = [ 1, "USD", idr2];
      this._table1.row.add(row);

      var sgd = rates.IDR / rates.SGD;
      var sgd2 = formatCurrency(sgd, "en-US", "Rp", "SGD");
      console.log("SGD :" + sgd2);
      var row = [ 2, "SGD", sgd2];
      this._table1.row.add(row);

      var bnd = rates.IDR / rates.BND;
      var bnd2 = formatCurrency(bnd, "en-US", "Rp", "BND");
      console.log("BND :" + bnd2);
      var row = [ 3, "BND", bnd2];
      this._table1.row.add(row);

      var hkd = rates.IDR / rates.HKD;
      var hkd2 = formatCurrency(hkd, "en-US", "Rp", "HKD");
      console.log("HKD :" + hkd2);
      var row = [ 4, "HKD", hkd2];
      this._table1.row.add(row);

      var btc = rates.IDR / rates.BTC;
      var btc2 = formatCurrency(btc, "en-US", "Rp", "BTC");
      console.log("BTC :" + btc2);
      var row = [ 5, "BTC", btc2];
      this._table1.row.add(row);

      var sek = rates.IDR / rates.SEK;
      var sek2 = formatCurrency(sek, "en-US", "Rp", "SEK");
      console.log("SEK :" + sek2);
      var row = [ 6, "SEK", sek2];
      this._table1.row.add(row);

      var stn = rates.IDR / rates.STN;
      var stn2 = formatCurrency(stn, "en-US", "Rp", "STN");
      console.log("STN :" + stn2);
      var row = [ 7, "STN", stn2];
      this._table1.row.add(row);

      var ves = rates.IDR / rates.VES;
      var ves2 = formatCurrency(ves, "en-US", "Rp", "VES");
      console.log("VES :" + ves2);
      var row = [ 8, "VES", ves2];
      this._table1.row.add(row);
    
      var myr = rates.IDR / rates.MYR;
      var myr2 = formatCurrency(myr, "en-US", "Rp", "MYR");
      console.log("MYR :" + myr2);
      var row = [ 9, "MYR", myr2];
      this._table1.row.add(row);

      var mmk = rates.IDR / rates.MMK;
      var mmk2 = formatCurrency(mmk, "en-US", "Rp", "MMK");
      console.log("MMK :" + mmk2);
      var row = [ 10, "MMK", mmk2];
      this._table1.row.add(row);

      this._table1.draw(false);
    });
  }
}