import mePic from '../../me.png'

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__text_wrapper">

                    <h1 className="header__title">
                        <strong>Hi, my name is <em>Olga</em></strong><br />
                        a frontend developer
                    </h1>
                    <div className="header__text">
                        <p>with passion for learning and creating.</p>
                    </div>
                </div>
                <div>
                    <img src={mePic} className="animate__animated animate__pulse" alt="me" />
                </div>
            </div>

        </header>
    );
}

export default Header;