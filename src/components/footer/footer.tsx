
import instagram from '../../img/icons/instagram.svg'
import gitHub from '../../img/icons/gitHub.svg'
import hh from '../../img/icons/min-hh-white.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!"><img src={instagram} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://github.com/batolser"><img src={gitHub} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://hh.ru/resume/0c4b2f84ff083af02a0039ed1f6f7638524348"><img src={hh} alt="Link" /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2024 batolser</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;