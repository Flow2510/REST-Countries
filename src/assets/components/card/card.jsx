import './card.scss'

export default function Card({ flag, alt, name, population, region, capital }){
    return(
        <article className='card'>
            <img className='card__image' src={flag} alt={alt} />
            <div className='card__content'>
                <h2 className='card__content-title'>{name}</h2>
                <p className='card__content-subtitle'><b>Population: </b>{population}</p>
                <p className='card__content-subtitle'><b>Region: </b>{region}</p>
                <p className='card__content-subtitle'><b>Capital: </b>{capital}</p>
            </div>
        </article>
    )
}