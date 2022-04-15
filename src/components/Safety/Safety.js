import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Faq from 'react-faq-component';

const data = {
  rows: [
    {
      title: "Drug Safety",
      content: `<ol> 
                  <li>Do NOT mix drugs and alcohol. There is no way to anticipate how your body will react to the mixture- the reaction could be very serious or even fatal.</li> 
                  <li>Remember: You never know what you are actually taking. Though distributors may assure you that you are getting a certain drug, there is a high likelihood that this drug has been cut with something else, or is a different drug entirely. This is especially common with pills. </li>
                  <li>If you do choose to engage in drug use: 
                    <ul>
                      <li>Test your pills with an affordable drug testing kit, like those sold at dancesafe.org. DISCLAIMER: Drug testing kits do not indicate that a substance is safe. Drug use is never 100% safe. </li> <li>Make sure to remain hydrated. A good rule of thumb is to drink about two cups of water (500ml) every hour. Be careful to not consume water too quickly- this can cause an electrolyte imbalance that could become fatal. </li> 
                      <li>If you do not feel well, seek help immediately! DO NOT SLEEP IT OFF. The symptoms of drug overdose can be the same, more exaggerated, or totally different than those of excessive alcohol use. </li> <li>You WILL NOT be punished for your drug/alcohol use retroactively if you seek help from an official. Your safety is our first priority.</li> 
                    </ul> 
                  </li>
                </ol>`
    },
    {
      title: "Alcohol Safety",
      content: "<b>You don’t have to drink to have a good time at the Sun God Festival, but if you do choose to:</b> <ol> <li>Eat before, during, and after the event. </li> <li>Alternate between alcoholic and non-alcoholic drinks.</li> <li>Choose beer or cider instead of shots.</li> <li>Keep track of the number of drinks you have (especially the amount of liquor). Determine in advance the number of drinks you will consume, and stick to it! Keep in mind that one drink is a 12 oz beer, 5 oz of wine, or 1.5 oz of liquor.</li> <li>Tell your friends to let you know when you’ve had too much to drink.</li> <li>Pace your drinks to one or less per hour, and avoid drinking games.</li> <li>Don’t take (or give) unwanted peer pressure</li> <li>Have a designated driver, or sign up for A.S. Safe Rides!</li> <li>Watch over your friends and peers. If you see someone in medically dangerous conditions, do not be afraid to reach out to a security guard, police officer, event staff or event volunteer to ask for help. Your health and safety is our first priority!</li> </ol>"
    },
    {
      title: "Sexual Assault Prevention",
      content: '<h3>Clarifying Consent</h3> Consent is a mutual, affirmative, voluntary, and revocable agreement by each participant to engage in sexual activity. An informed verbal “yes” must accompany positive and engaging body language. <ul> <li className="safety-activity"> The initiator of sexual activity is responsible for receiving consent from their partner. Obtaining consent is a continuous process, meaning consent to kissing doesn’t mean consent to everything else. Consent is voluntary and can be withdrawn at any time. Consent must be given without coercion, force, threats or intimidation by the initiator. </li> <li className="safety-activity"> Consent cannot be given when someone is under the influence of drugs and/or alcohol. However, perpetrators may attempt to use alcohol and/or drugs to facilitate a sexual assault. Statistically, the majority of reported sexual assaults occur while one or both parties are under the influence of alcohol or drugs. Alcohol or drugs is never an excuse for choosing to violate another person. </li> <li className="safety-activity"> There are a number of drugs that may be added to beverages with the intent of altering the consciousness or incapacitating a person without their knowledge. Substances are particularly dangerous when combined with alcohol, and often produce amnesia, leaving a victim unclear about what occurred. These drugs can facilitate criminal activity, most often acts of sexual misconduct or sexual assault. </li> <li className="safety-activity"> Sexual assault is any unwanted, non-consensual behavior from kissing and fondling to rape. Ignorance of the law or of University policy concerning sexual assault, sexual misconduct and sexual harassment is never an excuse for non-consensual sexual behavior. </li> </ul><h3>Preventing Sexual Assault </h3> Keeping UC San Diego safe is a community responsibility. Check out the tips below on how you can help prevent sexual assault: <ul> <li className="safety-activity"> Identify common behaviors that often precede an assault. Recognizable red flags include seeing someone who is attempting to separate an intoxicated individual from their friends, or continuing to pour drinks for an individual who is clearly beyond their limit. </li> <li className="safety-activity"> Take action as a responsive bystander and remember to use IDEAS if you see those behaviors happening. You can help someone who is intoxicated by reconnecting them with their friends, or calling a CSO to escort that person home. You can also notify any of the festival volunteers or law enforcement officials on site if you are concerned for someone’s safety and well-being. </li> </ul><h3>Supporting Survivors of Sexual Assault</h3> If something happens to a friend, know you can be a responsive bystander by showing your support: <ul> <li className="safety-activity"> Listen and believe them. Let them know that you care. </li> <li className="safety-activity"> Remember sexual assault is never the fault of the survivor. </li> <li className="safety-activity"> Be aware of your response and respect their decisions. </li> <li className="safety-activity"> Know the resources and seek support for yourself. </li> </ul><h3> Resources </h3> <a href="https://students.ucsd.edu/sponsor/sarc/index.html" style="color:#b68e89; alt="CARE">CARE at the Sexual Assault Resource Center</a> is a confidential and free resource for all students, staff, and faculty affected by sexual assault, relationship violence, and stalking. If you or a friend need to speak with a confidential CARE advocate, call 858-534-5793.'
    },
    {
      title: "Other Important Party Tips",
      content: "<ul> <li>Non-UCSD-affiliated guests will not be allowed to stay in residential areas during the weekend of the Sun God Festival (April 26 – April 29). Additionally, residents are only allowed in their respective residential areas during specified time periods during the weekend of the Sun God Festival. Please refer to your RA or Residential Life Office for more information on these policy changes and time periods. All on-campus residents are expected to observe the Housing and Residential Life policy on responsibly hosting gatherings in their living areas (regardless of whether alcohol is present). Residents hosting guests are responsible for ensuring that attendance does not exceed two guests per resident of their room/apartment.</li> <li>DO NOT serve alcohol to anyone under 21 and if you are under 21, don’t consume alcohol.</li> <li>If your neighbors call or stop by to tell you the party is too loud, be a good neighbor and turn down the volume.</li> <li>It’s okay to call the police if a party gets out of hand.</li> <li>If a guest has had too much to drink, don’t let them drive home. Call a taxi or arrange for a ride with another guest who is sober, or invite them to stay over.</li> <li>Acquaint yourself with the San Diego County social host laws and the consequences of breaking those laws. If caught breaking these laws, social hosts will be held accountable and may be: 1) cited/arrested, 2) fined up to $1000 or more, 3) serve up to 6 months in jail, and 4) be billed for law enforcement services. </li> <li>Inside the festival or out, if you are approached by a police or security officer, comply with them. This will minimize your chances of further consequences and will help them get you the help you need.</li> </ul>"
    },
    {
      title: 'RAP (Responsible Action Protocol)',
      content: '<b> This protocol protects students who receive (or initiate) medical assistance in an alcohol or controlled substance-related medical emergency. If all of the following apply, students WILL NOT be subject to the formal student conduct process. For more info, visit <a href="https://students.ucsd.edu/_files/student-conduct/responsibleactionprotocol-final-2-27-14.pdf" style="color:#b68e89; alt="RAP">RAP (Responsible Action Protocol)</a></b> <ul> <li>Someone contacts a House Advisor/Resident Advisor or other University Official for medical assistance on behalf of a student experiencing an alcohol or controlled substance-related medical emergency (or if the student makes the request) </li> <li>No other major Student Conduct Code violations (including, but not limited to, disorderly conduct, distribution of controlled substances, hazing, physical assault, vandalism, etc.) were committed by the student during the same incident. </li> <li>The student has not received protection under this Protocol more than once in a two calendar year period</li> </ul>'
    },
    {
      title: 'A.S. Safe Rides',
      content: 'Having a transportation plan is important for your health & safety at the festival. Check out our <a href="https://docs.google.com/document/d/1-PuFHKbzpzOMu9ki39P6hzpkbyhD92UWSYt2xWctSiI/edit#heading=h.tam1nz9cdhda" style="color:#b68e89; alt="Transportation Page "> Transportation Page </a> to learn more about <a href="https://finance.ucsd.edu/SafeRides/Home" style="color:#b68e89; alt="AS Safe Rides"> AS Safe Rides </a> and how you and your friends can safely get to and from the festival.'
    },
    {
      title: "On The Field",
      content: '<ul> <li>Festival safety staff will wear clearly identifiable uniforms.</li> <li>First Aid stations will be available throughout the venue. </li> <li>There will be free water at two fill-up locations for any attendee with a reusable, non-glass bottle. </li> <li>There will be a Lost & Found and Information booth located near the entrance to the field. After the festival, found items will be relocated to the UCSD Police Department</li> <li>All of the above stations will be clearly marked on the festival map and visible on the field.</li> </ul>'
    },
    {
      title: "Important Contacts",
      content: '<ul> <li>For Help: Call (858) 534-HELP or ask for help from the nearest security guard or staff member. Learn about and use the Responsible Action Protocol (RAP), which may keep you from getting in trouble.</li> <li>Detox: If your friend is taken to Sun God Festival Detox, you can call (858)246-0393. It takes about 20 minutes for a student to be checked-in, so there may not be a record of them yet if you call right after they are picked up. If your friend is checked in, the volunteer will let you know the estimated time to call back (approx. 4 hours) and where to pick them up.</li> <li>ADA Guest Services: Call (858) 864-8242 to reach a liaison who will happily assist with providing a seamless Sun God Festival experience.</li> </ul>'
    },
    {
      title: "Health & Wellness",
      content: '<ul> <li><b>Sleep</b>: Sleep impacts your physical health and your cognitive functioning. Be sure to get plenty of sleep prior to the event. Be aware that alcohol and caffeine can have a negative impact on your sleep. </li> <li><b>Exercise</b>: Regular exercise and physical activity help to improve your mood and cope with stress and anxiety.</li> <li><b>Eating</b>: Eating right is an important part of stress management, helps you maintain energy throughout the day, improves cognitive performance, and keeps your mood steady.</li> <li><b>Time Management</b>: Prepare in advance for the amount of time you’ll need to study for midterm exams. When you know you have a large event coming up that will take a lot of time (e.g., attending a wedding, a birthday party, SUN GOD!), it’s important to plan effectively. Start weeks in advance and schedule study time around this large event. This way you can actually enjoy the event while you are there! It will also reduce the likelihood of you having to cram and pull an “all-nighter.</li> <li><b>Social support</b>: Relationships are one of the most important factors of well-being. Developing, deepening, and maintaining close, supportive relationships help us to flourish. While at UCSD, it’s important to not just focus on academics, but to find a sense of belonging and community; to be part of a group in which you feel you are a valued member. Close relationships help to reduce loneliness and provide support during stressful times.</li> <li><b>Find your passion</b>: Find at least one interest or hobby that you can pursue and look forward to once or twice a week. “Engagement” in activities in which you get completely absorbed and feel perfectly challenged, neither bored nor overwhelmed, can be extremely rewarding and help us to flourish.</li> <li>For more information about Tritons Flourish, please visit https://caps.ucsd.edu/flourish.</li> <li>For more information about Counseling and Psychological services available on campus, please visit http://caps.ucsd.edu/.</li> </ul>'
    }
  ]
}

const styles = {
  bgColor: '#b68e8900',
  titleTextColor: "#4b4b4b",
  rowTitleColor: "#4b4b4b",
  rowContentColor: "#4b4b4b",
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

function Safety() {

  return (
    <section>
      <Container>
          <Particle />
          <Container fluid className="home-about-section" id="about">
            <Row>
              <Col className="home-about-description">
                <h1>
                  SAFETY
                </h1>
                <div style={{ paddingTop: '20px', width: "100%", }}>
                  <Faq data={data} styles={styles} config={config}/>
                </div>
              </Col>
            </Row>
            <Row> 
              <Col style={{padding: '50px'}}>
              </Col>
            </Row>
          </Container>
      </Container>
    </section>
  )
}

export default Safety;