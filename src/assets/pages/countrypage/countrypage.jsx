import { Link, useParams } from 'react-router-dom';
import './countrypage.scss';
import data from '../../data/data.json';

export default function CountryPage() { 
    const { id } = useParams();
    const selectedCountry = data.find(item => item.alpha3Code === id);

    return(
        <main>
            <section className='country'>
                <Link className='country__link' to='/'>Back</Link>
                    {selectedCountry ? 
                            <div className='country__content'>
                                <img className='country__content-image' src={selectedCountry.flag} alt={"Flag of" + selectedCountry.name} />
                                <div className='country__content-wrapper'>
                                    <h2>{selectedCountry.name}</h2>
                                    <div className='country__content-ul-wrapper'>
                                        <ul className='country__content-ul'>
                                            <li className='country__content-li'><b>Native Name: </b>{selectedCountry.nativeName}</li>
                                            <li className='country__content-li'><b>Population: </b>{selectedCountry.population.toLocaleString()}</li>
                                            <li className='country__content-li'><b>Region: </b>{selectedCountry.region}</li>
                                            <li className='country__content-li'><b>Sub Region: </b>{selectedCountry.subregion}</li>
                                            <li className='country__content-li'><b>Capital: </b>{selectedCountry.capital}</li>
                                        </ul>
                                        <ul className='country__content-ul'>
                                            <li className='country__content-li'><b>Top Level Domain: </b>{selectedCountry.topLevelDomain}</li>
                                            <li className='country__content-li'><b>Currencies: </b>{selectedCountry.currencies ? selectedCountry.currencies.map(c => c.name).join(', ') : ""}</li>
                                            <li className='country__content-li'><b>Languages: </b>{selectedCountry.languages? selectedCountry.languages.map(l => l.name).join(', ') : ""}</li>
                                        </ul>
                                    </div>
                                    <div className='country__content-border-wrapper'>
                                        <h3 className='country__content-border-title'>Border Countries</h3>
                                        <div className='country__content-border'>
                                            {selectedCountry.borders?.map(code => {
                                                const country = data.find(c=> c.alpha3Code === code);
                                                return(
                                                    <Link to={`/country/${country.alpha3Code}`} key={code}>
                                                        <button className='country__content-button'>{country.name}</button>
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div> : <h2 className='country__error'>Country not find</h2>
                    }
            </section>
        </main>
    )
}