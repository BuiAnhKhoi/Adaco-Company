import './FooterTwo.css'

const FooterTwo = () => {
    return (
        <div class="footer2">
            <div class="footer2__inner">
                <div class="footer__contribute">
                    <ul class="contribute__list">
                        <li class="contribute__item">Using icon search at : <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icon/59878/search">Search icon by Icons8</a></li>
                        <li class="contribute__item">Using icon facebook at : <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icon/118466/facebook">Facebook icon by Icons8</a></li>
                        <li class="contribute__item">Using icon youtube at : <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icon/62852/youtube">YouTube icon by Icons8</a></li>
                    </ul>
                </div>
                <div class="footer__social">
                    <a rel="noopener noreferrer" href="https://www.facebook.com/"><img alt="facebook-icon" src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png"/></a>
                    <a rel="noopener noreferrer" href="https://www.youtube.com/"><img alt="youtube-icon" src="https://img.icons8.com/ios-glyphs/30/000000/youtube-play.png"/></a>
                </div>
            </div>
        </div>
    )
}

export default FooterTwo;