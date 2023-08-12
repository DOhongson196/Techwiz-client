import classNames from 'classnames/bind';
import styles from './AboutUs.module.scss';

import { faEnvelopeOpen, faHouseChimney, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function AboutUs() {
  return (
    <div className="flex min-h-screen flex-col mt-[90px] bg-[#FFFFFF] dark:bg-bgDarkMode">
      {/* <!--About Us--> */}
      <div className={cx('about__contain')}>
        <div className="flex">
          <div className="ml-auto">
            {/* <h2 className={cx('about__heading')}>About Us</h2> */}
            <div className={cx('about__info')}>
              <div className={cx('info__text')}>
                <p className="text-lg font-semibold">
                  VILLARREAL CLUB DE FÚTBOL SAD <br /> <br /> FOUNDED: 1923
                  <br /> STADIUM: ‘ESTADIO DE LA CERÁMICA’
                  <br /> CAPACITY: 22,000
                  <br />
                  PRESIDENT: FERNANDO ROIG ALFONSO
                </p>{' '}
                <p>
                  Vila-real is the second biggest city in the Castellón province of the Region of Valencia and is
                  located 5km from the Mediterranean shore. All the club’s facilities, the Estadio de la Cerámica, the
                  José Manuel Llaneza Training Ground and the PAMESA Cerámica Training Ground can be found in the town.
                  The stadium is located in the town centre, while both training facilities are situated on the
                  outskirts (5 minutes from the stadium).
                </p>
              </div>
              {/* style="background-image: url(assets/img/aboutus.jpg);" */}
              {/* <div className={cx('info__img')}></div> */}
            </div>
          </div>
          {/* <img className={cx('info__img')} src={images.banner} /> */}
          <iframe
            className={cx('info__img')}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MNLo8FcQnaA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div className={cx('about__history')}>
          <h2>Our History</h2>
          <div className={cx('history')}>
            <p>
              <span className="text-textColor text-xl font-bold">1923–29: early years</span>
              <br />
              Villarreal CF was founded as Club Deportivo Villarreal on 10 March 1923 "to promote all sports especially
              Football." The stadium was rented for 60 pesetas a month and ticket prices were set at half a peseta for
              men and a quarter of a peseta for children. Women were granted free admission. On 17 June 1923, Castellón,
              a modern rival of the club, played the first match against a club named after Miguel de Cervantes. On 21
              October of that year, Villarreal played their first game ever, playing against Castellón. Villarreal
              started off with a kit of white shirts and black shorts, reflected in their first badge.
              <a
                className="text-[#fcd535] ml-1"
                href="https://en.wikipedia.org/wiki/Villarreal_CF#History"
                target="_blank"
              >
                More
              </a>
            </p>
            <br />
            <br />
            <p>
              <span className="text-textColor text-xl font-bold">1929–98: time in lower divisions</span>
              <br />
              Villarreal entered regional competitions within the Spanish football pyramid from 1929 to 1930 onwards.
              The 1934–35 season saw the team lose to Cartagena when a win would have seen them promoted to the
              nationwide Second Division. The following season saw Villarreal win the First Division of the region
              before the outbreak of the Spanish Civil War. There were back-to-back promotions as the club returned to
              Segunda B and finished second, earning promotion to Segunda A for the first time. From 1992 to 1993,
              Villarreal were often in low or mid-table positions, but reached the play-offs in 1997–98 by finishing
              fourth.[5] The two-legged play-off was against Compostela. Villarreal hosted the first leg which was a 0–0
              draw, but the second leg at the home of the Galician team was a 1–1 draw, thus Villarreal were promoted on
              the away goals rule.
              <a
                className="text-[#fcd535] ml-1"
                href="https://en.wikipedia.org/wiki/Villarreal_CF#History"
                target="_blank"
              >
                More
              </a>
            </p>
            <br />
            <br />
            <p>
              <span className="text-textColor text-xl font-bold">1998–2012: La Liga and European debuts</span>
              <br />
              Villarreal's La Liga debut started with a match against reigning European champions Real Madrid at the
              Santiago Bernabéu Stadium on 31 August 1998 where they lost 4-1 despite taking the lead after 3 minutes.
              The first home game was against Celta de Vigo the week after. Because of a difficult season, Villarreal
              were relegated to the Segunda División for the 1999–2000 season, but by finishing third, they were then
              promoted back to the Primera División. Despite finishing outside of a European qualifying spot in the
              domestic league, Villarreal was given a place in the qualifying round of the 2010–11 UEFA Europa League
              after UEFA determined that Mallorca's financial irregularities precluded them from taking part in the
              tournament. A 5–0 home win and a 2–1 away win against Dnepr Mogilev qualified them for the group stage.
              Villarreal suffered an early setback following a shock 2–0 loss in their away fixture against Dinamo
              Zagreb. Despite this, however, later wins against Dinamo, Club Brugge and PAOK saw them top their group.
              <a
                className="text-[#fcd535] ml-1"
                href="https://en.wikipedia.org/wiki/Villarreal_CF#History"
                target="_blank"
              >
                More
              </a>
            </p>
            <br />
            <br />
            <p>
              <span className="text-textColor text-xl font-bold">2012–present: relegation and European glory</span>
              <br />
              On 13 May 2012, Villarreal were relegated from La Liga after defeat to Atlético Madrid. Following a
              horrendous season, the club suffered a shattering tragedy when Manolo Preciado, appointed as Villarreal's
              new manager on 6 June 2012, died of a heart attack later that day.[11] Following their relegation, there
              was a mass exodus of players at the club, with star players such as Borja Valero, Diego López, Giuseppe
              Rossi and Nilmar leaving the side.[12] After one year in the Segunda División, Villarreal were promoted
              back to La Liga on the final day of the season after finishing the year second after champions Elche. The
              team began its new tenure in the top flight by winning its first three games; the winning streak ended
              with a tie against Real Madrid at El Madrigal, though the team was undefeated until falling to Real Betis
              1–0 on the seventh matchday of the season. The Yellow Submarine finished the 2013–14 campaign in sixth,
              thus qualifying them for next season's Europa League. In 2014–15, Villarreal again finished the year in
              sixth, enough to secure direct qualification to the Europa League group stage.
              <a
                className="text-[#fcd535] ml-1"
                href="https://en.wikipedia.org/wiki/Villarreal_CF#History"
                target="_blank"
              >
                More
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* <!-- NUMBER  --> */}
      <section className={cx('number')}>
        <div className={cx('number__content')}>
          <div className={cx('number__item')}>
            <p className="text-textColor dark:text-textDarkMode">2</p>
            <p className="text-textColor dark:text-textDarkMode">UEFA Champions League</p>
          </div>
          <div className={cx('number__item')}>
            <p className="text-textColor dark:text-textDarkMode">4</p>
            <p className="text-textColor dark:text-textDarkMode">UEFA Europa League</p>
          </div>
          <div className={cx('number__item')}>
            <p className="text-textColor dark:text-textDarkMode">7</p>
            <p className="text-textColor dark:text-textDarkMode">UEFA Conference League</p>
          </div>
          <div className={cx('number__item')}>
            <p className="text-textColor dark:text-textDarkMode">9</p>
            <p className="text-textColor dark:text-textDarkMode">LaLiga</p>
          </div>
        </div>
      </section>

      {/* <!-- TESTIMONIALS  --> */}
      <section className={cx('testimonials')}>
        <h2>CONTACT INFORMATION</h2>
        <div className={cx('testimonials__content')}>
          <div className={cx('contact__info')}>
            <div className={cx('contact_item')}>
              <FontAwesomeIcon icon={faHouseChimney} />
              <p>Estadio de la Cerámica</p>
              <p>Calle Blasco Ibáñez, 2</p>
              <p>12540 Vila-real (Castellón)</p>
            </div>
            <div className={cx('contact_item')}>
              <FontAwesomeIcon icon={faPhone} />
              <p>Training Ground (Offices)</p>
              <p>Camino Miralcamp s/n</p>
              <p>12540 Vila-real (Castellón)</p>
              <p>Tel: (+34) 964 500 250</p>
              <p>Fax: (+34) 964 500 167</p>
            </div>
            <div className={cx('contact_item')}>
              <FontAwesomeIcon icon={faPhone} />
              <p>Pamesa Cerámica Training Ground</p>
              <p>Camí Segon Sedeny s/n</p>
              <p>12540 Vila-real (Castellón)</p>
              <p>Tel: (+34) 608 834 479</p>
            </div>
            <div className={cx('contact_item')}>
              <FontAwesomeIcon icon={faEnvelopeOpen} />
              <div className={cx('item__link')}>
                <p className="font-semibold">Season Ticket Enquiries:</p>
              </div>
              <div className={cx('item__link')}>
                <p>(+34) 964 524 000</p>
              </div>
              <div className={cx('item__link')}>
                <p>Press</p>
              </div>
              <a href="mailto:phutamytb@gmail.com?subject = Feedback&body = Message" className={cx('item__link')}>
                <p>prensa@villarrealcf.es</p>
              </a>
            </div>
          </div>
          {/* <div className={cx('owl-carousel owl-theme')}>
            <div className={cx('item')}>
              <p>
                <FontAwesomeIcon icon={faQuoteLeft} />
                BrightWorld desires to satisfy every customer with high-quality products from many famous brands
                worldwide. Your satisfaction is our pleasure.
                <FontAwesomeIcon icon={faQuoteRight} />
              </p>
              <p>CEO Phú Tâm</p>
            </div>
            <div className={cx('item')}>
              <p>
                <FontAwesomeIcon icon={faQuoteLeft} />I love BrightWorld so much. Good product quality and very
                attentive service. Thank you for the great led products, good luck.
                <FontAwesomeIcon icon={faQuoteLeft} />
              </p>
              <p>Logan Lee</p>
            </div>
            <div className={cx('item')}>
              <p>
                <FontAwesomeIcon icon={faQuoteLeft} />
                BrightWorld is the most prestigious LED shop today, each product is carefully selected and high quality.
                <FontAwesomeIcon icon={faQuoteLeft} />
              </p>
              <p>Chu Diệp Linh</p>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
