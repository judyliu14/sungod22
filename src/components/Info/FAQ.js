import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Faq from 'react-faq-component';

const data = {
  rows: [
    {
        title: "What is being done to make the festival safe?",
        content: `Student health and safety is the top priority of the festival organizers. The festival grounds are designed to be a safe space for students. Heightened enforcement will occur at festival entrances to prevent access to visibly intoxicated students and to block prohibited substances and items from entering the event. All attendees will be screened at the entrance prior to entering the venue. Similar to other large music festival entrances, drug recognition experts will be present to intervene with any intoxicated students, and security staff will use drug-detection dogs as a safety measure to ensure the festival is a drug-free space. Students who arrive under the influence of drugs or alcohol will be unable to enter the Sun God Festival. They also can be subject to arrest or other consequences related to violation of the UC San Diego Student Code of Conduct and/or taken to appropriate medical care. 
                <br />
                <br />
                As in years past, educational programs around the festival focus on key topics such as drug and alcohol safety and sexual assault prevention. In addition, the “floaties” bystander intervention training program has been expanded and student “floaties” who have gone through the training program will have a large presence at this year’s Sun God Festival. ASCE is also supporting other initiatives and groups on campus working to educate and support the development of students’ understanding of these issues. 
                <br /> 
                <br />
                Regarding COVID safety, only those who registered for the festival and are compliant with the COVID-19 Vaccine Mandate will receive a ticket to the festival. Masks are highly encouraged. COVID guidance and festival policies may change as the campus and county respond to the ongoing pandemic.  
                <br />`
    },
    {
        title: "What happens if I show up to the event intoxicated?",
        content: "To ensure the festival grounds are a safe space, students visibly intoxicated and under the influence of drugs or alcohol will be unable to enter the Sun God Festival. Heightened enforcement will occur at the festival entrance. All attendees will be screened, including a pat down and scanning of pre-registered UCSD student IDs, prior to admission. Similar to other large music festival entrances, drug recognition experts will be present to intervene with any intoxicated students, and security staff will use drug-detection dogs as a safety measure to ensure the festival is a drug-free space. Students who do show up under the influence of drugs or alcohol can be subject to arrest or other consequences related to violation of the UC San Diego Student Code of Conduct and/or taken to appropriate medical care."
    },
    {
        title: "If I can't find my friend and they are not answering their phone, what can I do?",
        content: "Call the Sun God Sobering Center hotline at (858) 246-0393. A volunteer will let you know if your friend is in the Sobering Center or if they have been taken to jail. Volunteers cannot disclose if your friend has been transported to the hospital."
    },
    {
        title: "My friend just got taken to the Sobering Center! Where and when can I pick them up?",
        content: "If your friend was taken to the Sobering Center, you can call (858) 246-0393 to confirm that have been admitted. It takes about 20 minutes from the time a student is picked up before they are fully checked into the Sobering Center. Please note that if you call right away, there might not be a record of them yet. If your friend is checked in, a volunteer will let you know the estimated time to call back (approx. 4 hours) and where to pick them up."
    },
    {
        title: "Are there special campus health & safety policies the week of Sun God?",
        content: "Yes, to ensure that the UC San Diego campus is a safe space for all members of our community, enhancements and revisions to campus policies and protocols will be in effect during the week of the festival. To learn more, please contact your college's Residence Life office or visit the UC San Diego Student Conduct <a href='https://students.ucsd.edu/sponsor/student-conduct/' alt='conduct'>website</a>."
    }
  ]
}

const generalData = {
    rows: [
      {
          title: "When will the festival be held?",
          content: "The Sun God Festival will be held at RIMAC Field on April 30th, 2022 from 12PM-6PM."
      },
      {
          title: "What is the policy regarding masking, vaccination, etc.?",
          content: "In order to attend the festival, you must be compliant with the COVID-19 Vaccine Mandate by Noon on April 27th. Only those who registered and are compliant with the COVID-19 Vaccine Mandate will receive a ticket to the festival. Masks are highly encouraged. COVID guidance and festival policies may change as the campus and county respond to the ongoing pandemic."
      },
      {
          title: "What will be the format of the event?",
          content: "The 2022 event will feature one stage stages featuring a variety of national touring musical acts. Additional attractions will be available at the event, including carnival rides, food vendors, lounges, sponsor areas and interactive art."
      },
      {
          title: "What do I need to bring with me?",
          content: "Be sure to bring your campus ID and your festival ticket, which will be emailed the day before the festival to all those who registered and are compliant with the COVID-19 Vaccine Mandate by the respective deadlines. We also encourage you to bring an empty, reusable, non-glass water bottle so you can enjoy free water throughout the event."
      },
      {
          title: "Will you be posting set times in advance?",
          content: "Yes. Set times will be posted on this website page during the week of the festival."
      },
      {
          title: "Are there opportunities to volunteer at the event?",
          content: `Yes! We are accepting applications for those who would like to work the event until April 8th. Register <a href="https://forms.gle/C3QbQKqqhsmMCBwq6 alt="volunteer">here</a>.`
      },
      {
          title: "Will there be Sun God Merchandise sold?",
          content: `Yes, official Sun God Festival merchandise will be available through <a href="http://to.ucsd.edu/" alt="Triton Outfitters">Triton Outfitters</a> online and at their store in advance of the festival and at the Triton Outfitters Experience at the festival, while supplies last.`
      },
      {
          title: "Will there be wifi on the field?",
          content: "We cannot guarantee wifi access on RIMAC Field, but attendees may be able to utilize the UCSD-PROTECTED or UCSD-GUEST Wi-Fi networks (as applicable)."
      },
      {
          title: "What is the Residential Life Policy the weekend of the festival?",
          content: "Special housing policies will be implemented to mitigate the prospect of multiple large gatherings or disruptions in the residential communities and to assist staff in efficiently handling any situations in the living areas over the weekend of the Sun God Festival. This year, non-UCSD-affiliated guests will not be allowed to stay in residential areas during the weekend of the Sun God Festival (April 29 – May 2). Additionally, only residents of their respective residential areas are allowed to be present in living spaces of those areas during specified time periods during the weekend of the Sun God Festival. Please refer to your RA or Residential Life Office for more information on these policy changes and these specified time periods."
      }
    ]
  }

  const registerData = {
    rows: [
        {
            title: "Who can attend?",
            content: "Only undergraduate students enrolled at UC San Diego for at least one quarter during the 2021-2022 school year are eligible to attend. Summer sessions are not applicable. <br />The undergraduate student activity fee provides the majority of the funding for the festival. A limited number of tickets will be available for sale to UC San Diego graduate students (including students from the Rady School, Scripps Institution of Oceanography, IR/PS, UC San Diego School of Medicine and Skaggs School of Pharmacy) only. For more information about registration, please visit the Registration Page."
        },
        {
            title: "Will there be re-entry?",
            content: "Re-entry will not be allowed at the Sun God festival"
        },
        {
            title: "I'm an undergraduate, am I guaranteed admission?",
            content: "No – all UC San Diego undergraduate students must register and be compliant with the COVID-19 Vaccine Mandate for festival access, which is subject to venue capacity. Students must present their ticket in order to enter the festival grounds. Digital tickets will be emailed the day before the festival to all those who registered by Friday, April 22nd AND are compliant with the COVID-19 Vaccine Mandate by April 27th."
        },
        {
            title: "Can international or extension students attend?",
            content: "Only international or extension students whose PID begins with the letter “A” are eligible to register. All other eligibility requirements must be met."
        }, 
        {
            title: "I graduated early/took a quarter off, am I still eligible to attend?",
            content: "Yes, entry is free for undergraduate students enrolled at UC San Diego for at least one quarter during the 2021-2022 school year (i.e. Fall 2021, Winter 2022, or Spring 2022). Summer sessions from 2021 or 2022 are not applicable."
        },
        {
            title: "I graduated early this year but lost my campus ID, can I still attend?",
            content: "A valid UCSD student ID is required to attend. Lost IDs for graduated students cannot be replaced. Please contact the Campus Cards Office for more information."
        },
        {
            title: "Can I use my friend’s pre-registered campus ID card or buy/rent a friend’s pre-registered campus ID card to attend the festival?",
            content: "No. Campus ID cards are not transferable. Misuse of a UCSD ID card is a violation of the student code of conduct and the UCSD Principles of Community. Students who allow someone else to use their ID card are subject to significant consequences through the student conduct process."
        },
        {
            title: "Is the festival for all ages?",
            content: "Yes. (Valid UCSD ID required)"
        },
        {
            title: "Do I need a wristband to get in?",
            content: "No, festival wristbands are not being issued this year. If you registered to attend the festival by April 22nd and are compliant with the COVID-19 Vaccine Mandate by April 27th, a digital ticket with a unique QR code will be emailed to you the day before the festival.  Just bring your virtual ticket and your campus ID card to be admitted."
        }
    ]
  }

  const willThereData = {
      rows: [
        {
            title: "Will there be First Aid on site?",
            content: "Yes. First Aid stations will be be available throughout the venue. They will be clearly marked on the festival map and visible on the field."
        },
        {
            title: "Will there be flushable toilets and sinks available?",
            content: "Sorry, portable toilets only. There will be sinks though!"
        },
        {
            title: "Will there be free water?",
            content: "Yes – there will be free water and cups for festival attendees at two locations within the venue. We highly encouraged bringing an empty, non-glass, reusable water bottle."
        },
        {
            title: "Will there be an Info booth/area?",
            content: "Yes. There will be a combination Lost & Found and Information booth located near the entrance to the field. The location will be clearly marked on the festival map and visible on the field."
        }, 
        {
            title: "Will there be ADA bathrooms/parking?",
            content: "Yes. Please visit the ADA Info page for more information for patrons with disabilities."
        },
        {
            title: "Will there be a Lost & Found?",
            content: "Yes. There will be a combination Lost & Found and Information booth located near the entrance to the field. The location will be clearly marked on the festival map and visible on the field. After the festival, found items will be relocated to the UCSD Police Department."
        },
        {
            title: "Will there be ATMs?",
            content: "No. There will not be ATMs on the field."
        },
      ]
  }
  const canIBringData = {
    rows: [
      {
          title: "What can't I bring to the festival?",
          content: `The following items are prohibited:
                    <ul>
                        <li>Alcohol</li>
                        <li>Drugs & Drug Paraphernalia</li>
                        <li>Knives, Weapons, etc.</li>
                        <li>Fireworks or Explosives</li>
                        <li>Tobacco or Vapor Products</li>
                        <li>Backpacks</li>
                        <li>Bags larger than 8.5” x 11”</li>
                        <li>Bicycles or Unicycles</li>
                        <li>Skateboards or Roller Skates</li>
                        <li>Professional Cameras</li>
                        <li>Video Cameras</li>
                        <li>Selfie Sticks, Tripods or Monopods</li>
                        <li>Audio Recording Devices</li>
                        <li>Glass, Cans, Cups or Coolers</li>
                        <li>Disposable Water Bottles</li>
                        <li>Outside Food & Beverage</li>
                        <li>Camel Backs, Bota Bags, Hydration Packs, etc. </li>
                        <li>Musical instruments</li>
                        <li>Laser Pointers</li>
                        <li>Chains / Chain Wallets</li>
                        <li>Chairs or Umbrellas</li>
                        <li>Totems, Signs or Flags</li>
                        <li>Hula Hoops or Batons</li>
                        <li>Stuffed Animals</li>
                        <li>Pets</li>
                        <li>Drones or Remote Control Aircraft, Toys or Cars</li>
                        <li>Radios / Walkie-Talkies</li>
                    </ul>`
        },
        {
            title: "What should I bring to the festival?",
            content: `Be sure to bring your campus ID and your digital festival ticket, which will be emailed the day before the festival to all those who registered and are compliant with the COVID-19 Vaccine Mandate by the respective deadlines. We also encourage you to bring an empty, reusable, non-glass water bottle so you can enjoy free water throughout the event. 
                      Students are also highly encouraged to bring the following:
                      <ul>
                        <li>Face mask</li>
                        <li>An empty, non-glass reusable water bottle (get free water at the festival!)</li>
                        <li>A fully charged cell phone (bring a portable charger too, if you've got one)</li>
                        <li><a href="/transportation" alt="transportation">A plan to get home safely</a></li>
                        <li>Earplugs (it may get a little loud)</li>
                        <li>A hat, sunglasses and sunblock (it could be warm and bright, people)</li>
                      </ul>`
        },
        {
            title: "Can I bring outside food/beverage?",
            content: "No outside food or beverage will be permitted. Food will be sold inside the festival. No disposable water bottles are allowed in the festival, even if they are sealed. Only empty, reusable, non-glass water bottles will be allowed."
        },
        {
            title: "Can I bring a camera?",
            content: "Only point-and-shoot cameras and camera phones are allowed into the venue. NO professional video recorders or cameras with a removable lens, selfie sticks, and other photo accessories will be permitted."
        },
        {
            title: "Can I bring an animal to the Festival?",
            content: "Service animals specifically trained to assist a person with a disability are welcome.  No other animals, including pets, therapy animals, or emotional support animals, are allowed."
        },
        {
            title: "Can I bring a bag to the Festival?",
            content: "Only bags smaller than 8.5” x 11” will be permitted into the festival. Backpacks are not allowed at the festival."
        }
    ]
}

const styles = {
  bgColor: '#b68e8900',
  titleTextColor: "#4b4b4b",
  rowTitleColor: "#4b4b4b",
  rowContentColor: '#4b4b4b',
  arrowColor: "#4b4b4b",
  rowContentPaddingTop: '20px',
  rowContentPaddingBottom: '20px',
  rowContentPaddingLeft: '25px',
  rowContentPaddingRight: '25px',
};

const config = {
  animate: true,
  tabFocus: true
};

function FAQ() {

  return (
    <section>
      <Container>
          <Particle />
          <Container fluid className="home-about-section" id="about">
            <Row>
              <Col className="home-about-description">
                <h1>
                    FREQUENTLY ASKED QUESTIONS
                </h1>
              </Col>
            </Row>
            <Row> 
                <Col className="home-about-description">
                    <h1 style={{ fontSize: "1.6em" }}>
                        Health & Safety
                    </h1>
                    <div style={{ paddingTop: '20px', width: "100%", textAlign: "left" }}>
                    <Faq data={data} styles={styles} config={config}/>
                    </div>
                </Col>
            </Row>
            <Row> 
                <Col className="home-about-description">
                    <h1 style={{ fontSize: "1.6em" }}>
                        General
                    </h1>
                    <div style={{ paddingTop: '20px', width: "100%", textAlign: "left" }}>
                    <Faq data={generalData} styles={styles} config={config}/>
                    </div>
                </Col>
            </Row>
            <Row> 
                <Col className="home-about-description">
                    <h1 style={{ fontSize: "1.6em" }}>
                       Tickets & Registration
                    </h1>
                    <div style={{ paddingTop: '20px', width: "100%", textAlign: "left"}}>
                    <Faq data={registerData} styles={styles} config={config}/>
                    </div>
                </Col>
            </Row>
            <Row> 
                <Col className="home-about-description">
                    <h1 style={{ fontSize: "1.6em" }}>
                       Will There Be...
                    </h1>
                    <div style={{ paddingTop: '20px', width: "100%", textAlign: "left" }}>
                    <Faq data={willThereData} styles={styles} config={config}/>
                    </div>
                </Col>
            </Row>
            <Row> 
                <Col className="home-about-description">
                    <h1 style={{ fontSize: "1.6em" }}>
                       Can I Bring...
                    </h1>
                    <div style={{ paddingTop: '20px', width: "100%", textAlign: "left" }}>
                    <Faq data={canIBringData} styles={styles} config={config}/>
                    </div>
                </Col>
            </Row>
          </Container>
      </Container>
    </section>
  )
}

export default FAQ;
