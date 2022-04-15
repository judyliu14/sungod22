import React, { useState, setState } from "react";
import { Col, Row } from "react-bootstrap";
import { CSSTransition } from 'react-transition-group'
import berhana from "../../Assets/Artists/berhana.jpeg"
import keshi from "../../Assets/Artists/keshi.jpg"
import ptr from "../../Assets/Artists/ptr.jpg"
import umi from "../../Assets/Artists/umi.jpg" 
import iannDior from "../../Assets/Artists/iannDior.jpg"

function Artists() {

  const [isOpenOne, setIsOpenOne] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);
  const [isOpenFour, setIsOpenFour] = useState(false);
  const [isOpenFive, setIsOpenFive] = useState(false);

  const toggleIsOpenOne = () => { 
    setIsOpenOne(!isOpenOne);
  };
  const toggleIsOpenTwo = () => { 
    setIsOpenTwo(!isOpenTwo);
  };
  const toggleIsOpenThree = () => { 
    setIsOpenThree(!isOpenThree);
  };
  const toggleIsOpenFour = () => { 
    setIsOpenFour(!isOpenFour);
  };
  const toggleIsOpenFive = () => { 
    setIsOpenFive(!isOpenFive);
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* -----------iann dior----------- */}
      <Col xs={7} md={10} className="artists-icons">
        <p class="lineup-description">
          <h1 className="home-about-section" style={{textAlign: "center"}}>
            Full Lineup: To Be Announced
          </h1>
        </p>
      </Col>
      <Col xs={7} md={10} className="artists-icons">
          <button class="artist-buttons" onClick={toggleIsOpenOne}>
            <img src={iannDior} className="img-fluid" alt="avatar" />
          </button>
      </Col>
      <CSSTransition in={isOpenOne} appear={isOpenOne} unmountOnExit timeout={100} classNames="lineup">
        <Col xs={7} md={10}>
          <p class="lineup-description">
            <h1>
              {"Iann Dior"}
            </h1>
            {`Born in Puerto Rico and raised in Corpus Christi, Iann found instant success with the first song he ever wrote. “I was in high school and my friends told me to make a song because they knew I was good at writing,” he remembers. Despite his lack of experience, the track earned 10,000 plays in a week, all through word-of-mouth. Iann then began putting out a song a week, drawing more and more listeners, and eventually catching the ear of Internet Money founder Taz Taylor. After arriving in L.A., Iann started working with producer Nick Mira, and they went on to release “Cutthroat” together in February 2019. Within a month of its release, “Cutthroat” had amassed over 13 million streams on SoundCloud, and Iann began to gain a major buzz for his moody and melodic brand of lo-fi hip-hop. Iann’s rapid rise on SoundCloud brought him to the attention of 10K Projects who immediately signed him and released his debut mixtape nothing's ever good enough in April 2019. The mixtape features the single “Emotions”— a heavy-hearted but deeply infectious track that racked up three million plays in just a month. A year later and the track has over 111 million plays on Spotify and continues to grow. Iann has 150M+ streams just on Spotify alone on his most recent album "I'm Gone" (since release June 12), and his single Sick and Tired," featuring Machine Gun Kelly and Travis Barker, launched at No. 3 on the Hot Rock Songs chart, driven by 4.5 million first-week U.S. streams. Iann was recently named the number 1 Emerging Artist on Billboard due to his most recent collaboration with 2kGoldn for the current No. 6 Billboard charting single “Mood”.`}
          </p>
        </Col>
      </CSSTransition>
      
      {/* -----------keshi----------- */}
      <Col xs={7} md={10} className="artists-icons">
          <button class="artist-buttons" onClick={toggleIsOpenTwo}>
            <img src={keshi} className="img-fluid" alt="avatar" />
          </button>
      </Col>
      <CSSTransition in={isOpenTwo} appear={isOpenTwo} unmountOnExit timeout={100} classNames="lineup">
        <Col xs={7} md={10}>
          <p class="lineup-description">
            <h1>
              {"keshi"}
            </h1>
            {"Monikered as keshi (stylized), a phonetic play on his name, Casey Luong has amassed millions of fans through his genre-bending songwriting and production without ever releasing a full album. Now, the Vietnamese-American artist hailing from Houston is gearing up to release his debut album GABRIEL, his most personal effort to date to be released via Island Records. A fusion of keshi’s real-self and his artistic persona, the songs are written from the lens of Casey and keshi and speaks on both his personal life and allowing the ego of keshi to take over. When keshi decides to flex how far he’s come, you get a fusion of alternative pop meets hip-hop, and when he deals with relationships and love, you get sweet serenades. For GABRIEL, keshi worked with Baltimore producer and songwriter Elie Rizk (known for Bella Poarch's “Build a Bitch”), who co-produced the album with him."}
            <br />
            <br />
            {"With over a billion listens worldwide, keshi has gone on to become a streaming force with his acclaimed trilogy of EPs – Skeletons (2019), Bandaids (2020), and Always (2020). A self-reliant artist, keshi wrote, produced, engineered and played all the instrumentation on the projects, which when pieced together, the names of the three EPs describes the cycle of a relationship. His initial success includes making his Billboard debut when skeletons hit #59 on the Top Album Sales chart. Most recently, keshi appeared on the 88rising-curated Shang-Chi and the Legend of the Ten Rings: The Album for his song “War With Heaven.” It adds to a growingly impressive resume that includes getting co-signs by BTS members Jungkook and RM on their personal Spotify playlists, as well as a collaboration with producer Madeon on “beside you.” Last summer, keshi was also YSL's special guest at their Venice show. With no signs of winding down, keshi is laser focused on the mark he wants to leave behind. And while he has high expectations for himself at 27, he is confident that his upcoming studio album GABRIEL will stand the test of time. “I think the biggest goal for me right now is to create a record that will outlast me,” keshi says. “I always talk about it as an opus record. I see Blonde as an opus record. I see Continuum as an opus record. I feel like I'm in a constant search to make something on that sort of scale. I strive for that.”"}
          </p>
        </Col>
      </CSSTransition>

      {/* -----------umi----------- */}
      <Col xs={7} md={10} className="artists-icons">
          <button class="artist-buttons" onClick={toggleIsOpenThree}>
            <img src={umi} className="img-fluid" alt="avatar" />
          </button>
      </Col>
      <CSSTransition in={isOpenThree} appear={isOpenThree} unmountOnExit timeout={100} classNames="lineup">
        <Col xs={7} md={10}>
          <p class="lineup-description">
            <h1>
              {"Umi"}
            </h1>
            {"UMI is a 23-year-old Seattle native pioneering a new sound rooted in R&B and neo-soul - Her artistry manifests itself through her honest lyrics and healing sonics, which gives listeners a personal connection to UMI and her music. The energy of her artistry is a reflection of her personality - unique and nostalgic. Currently living in Los Angeles, UMI continues to create genre-bending music that captivates and inspires listeners."}
           </p>
        </Col>
      </CSSTransition>
      
      {/* -----------peach tree pascals----------- */}
      <Col xs={7} md={10} className="artists-icons">
          <button class="artist-buttons" onClick={toggleIsOpenFour}>
            <img src={ptr} className="img-fluid" alt="avatar" />
          </button>
      </Col>
      <CSSTransition in={isOpenFour} appear={isOpenFour} unmountOnExit timeout={100} classNames="lineup">
        <Col xs={7} md={10}>
          <p class="lineup-description">
            <h1>
              {"Peach Tree Rascals"}
            </h1>
            {`More of a brotherhood than a collective, The Rascals blend a seemingly effortless knack for melody with layers of rich harmony and R&B grooves. Recording together since their high school days, producer/mixer Dominic "Dom" Pizano, rappers-singers Issac Pech, Tarrek Abdel-Khaliq, Joseph Barros, and creative director Jorge Olazaba united with the intent of seeking musical growth and companionship. With most of the members being second-generation Americans (the sons of Palestinian, Filipino, and Mexican immigrants), they quickly realized a deep, natural connection with one another, and grew into a single, harmonious unit. To date, Peach Tree Rascals has garnered 500M+ streams across platforms and counts 6M+ Spotify monthly listeners. Their breakthrough hit “Mariposa” charted at #1 on the Alternative Radio Chart and has been co-signed by Lizzo and Harry Styles.`}
           </p>
        </Col>
      </CSSTransition>

      {/* -----------berhana----------- */}
      <Col xs={7} md={10} className="artists-icons">
          <button class="artist-buttons" onClick={toggleIsOpenFive}>
            <img src={berhana} className="img-fluid" alt="avatar" />
          </button>
      </Col>
      <CSSTransition in={isOpenFive} appear={isOpenFive} unmountOnExit timeout={100} classNames="lineup">
        <Col xs={7} md={10}>
          <p class="lineup-description">
            <h1>
              {"Berhana"}
            </h1>
          </p>
        </Col>
      </CSSTransition>
    </Row>
  );
}

export default Artists;
