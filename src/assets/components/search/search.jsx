import data from '../../data/data.json'
import './search.scss';

export default function Search({ filteredRegion, setFilteredRegion, setFilteredCountry}){
    const regions = data.map((allregions) => (allregions.region))
    const uniqueRegions = [... new Set(regions)]

    return(
        <section className='search'>
            <label className='search__label search__label-search' htmlFor="search-input">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder='Search for a country...' id='search-input' onChange={(e) => setFilteredCountry(e.target.value)}/>
            </label>
            <label className='search__label search__label-region' htmlFor="select-input">
                <select value={filteredRegion} className='search__select' name="" id="select-input" onChange={(e) => setFilteredRegion(e.target.value)} >
                    <option value="" disabled hidden>
                        Filter by Region
                    </option>
                    {uniqueRegions.map((uniqueRegion, index) => (
                        <option className='search__select-option' value={uniqueRegion} key={index}>{uniqueRegion}</option>
                    ))}
                </select>
            </label>
        </section>
    )
}