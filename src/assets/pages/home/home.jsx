import './home.scss';
import Search from '../../components/search/search'
import Gallery from '../../components/gallery/gallery'

export default function Home({ setFilteredRegion, filteredRegion, countries, setFilteredCountry, filteredCountry}){
    return(
        <main>
          <Search
            setFilteredRegion={setFilteredRegion}
            filteredRegion={filteredRegion}
            countries={countries}
            setFilteredCountry={setFilteredCountry}
          />
          <Gallery 
            filteredRegion={filteredRegion}
            filteredCountry={filteredCountry}
          />
       </main>
    )
}