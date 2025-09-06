import './header.scss';

export default function Header({ handleToggleDarkMode, darkMode }) {
    return(
        <header className='header'>
            <div className='header__wrapper'>
                <h1 className='header__title'>Where in the world?</h1>
                <button type='button' className='header__button' onClick={handleToggleDarkMode}>{darkMode ? (<><i className="fa-solid fa-sun"></i> Light Mode</>) : (<><i className="fa-regular fa-moon"></i> Dark Mode</>)}</button>
            </div>
        </header>
    )
}