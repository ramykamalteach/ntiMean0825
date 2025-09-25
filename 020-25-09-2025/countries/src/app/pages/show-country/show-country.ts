import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { MapToValuesPipe } from '../../pipes/map-to-values-pipe-pipe';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-show-country',
  imports: [MapToValuesPipe, DecimalPipe],
  templateUrl: './show-country.html',
  styleUrl: './show-country.css'
})
export class ShowCountry {
  countryName: String | null = null;
  oneCountry: Country | null = null;
  loading: Boolean = false;

  constructor(private route: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.countryName = params.get('countryName');
      const countryNameParam = this.countryName ?? '';
      this.loading = true;
      this.countryService.getCountry(countryNameParam).subscribe({
        next: (data) => {
          this.oneCountry = data[0];
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    });
  }

  getNativeName(country: Country): string {
    if (country.name.nativeName) {
      const firstKey = Object.keys(country.name.nativeName)[0];
      return country.name.nativeName[firstKey].common;
    }
    return '';
  }

  getCurrencies(country: Country): string {
    if (!country.currencies) return '';
    return Object.values(country.currencies)
      .map(c => `${c.name} (${c.symbol})`)
      .join(', ');
  }
}
