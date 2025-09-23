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
  lang: String | null = null;
  countries:Country[] = [];

  constructor(private route: ActivatedRoute, private countryService: CountryService) {
    this.route.paramMap.subscribe(params => {
      this.lang = params.get('lang');
    });
  }

  ngOnInit(): void {
    const langParam: String = this.lang ?? '';
    this.countryService.getCountries(langParam).subscribe((data) => {
      this.countries = data;
      console.log(this.countries);
    });
  }


}
