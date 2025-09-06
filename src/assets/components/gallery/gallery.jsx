import './gallery.scss';
import countries from '../../data/data.json';
import Card from '../card/card';
import { Link } from 'react-router-dom';

export default function Gallery({ filteredRegion, filteredCountry }) {
    const countriesByRegion = filteredRegion ? countries.filter(country => country.region === filteredRegion) : countries;
    const countryByName = filteredCountry ? countries.filter(country => country.name.toLowerCase().includes(filteredCountry.toLowerCase())) : [];
    const displayedCountries = filteredCountry.length ? countryByName : countriesByRegion;

  return (
    <section className='gallery'>
      {displayedCountries.map((country) => (
        <Link className="gallery__link" key={country.alpha3Code} to={`/country/${country.alpha3Code}`}>
            <Card
                flag={country.flag}
                alt={"flag of " + country.name}
                name={country.name}
                population={country.population.toLocaleString()}
                region={country.region}
                capital={country.capital}
            />
        </Link>
      ))}
    </section>
  );
}