import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-countries',
  imports: [RouterModule],
  templateUrl: './countries.html',
  styleUrl: './countries.css'
})
export class Countries {
  lang: string | null = null;
  countries: Country[] = [];
  loading: Boolean = false;

  constructor(private route: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.lang = params.get('lang');
      const langParam = this.lang ?? '';
      this.loading = true;
      this.countryService.getCountries(langParam).subscribe({
        next: (data) => {
          this.countries = data;
          this.loading = false;
        },
        error: (err) => {
          this.loading = false;
        }
      });
    });
  }
}
