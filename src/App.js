import React from 'react';
import * as jsonEnglish from "./english.json"

function App() {
  const { default: data } = jsonEnglish;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div id="profile-wrapper" className="card card-body">
            <img id="profile-picture" src="media/profile.png" alt="" />
            <hr />
            <h4>{data.greetings}</h4>
          </div>
        </div>
        <div className="col-md-8 d-flex">
          <div className="card card-body card-bio">
            <h3 className="name">{data.name}</h3>
            <p className="short-bio">{data.bio.join(' ')}</p>

            <ul className="social-links">
              <li><a href="https://instagram.com/{data.instagram}">
                <img src="media/instagram.png" alt="" className="social" />
              </a><span className="social-text" >@{data.instagram}</span></li>

              <li><a href="https://www.linkedin.com/in/{data.linkedin}/"><img src="media/linkedin.png" alt=""
                className="social" /></a> <span className="social-text" >/{data.linkedin}</span> </li>

              <li><a href="mailto:{data.email}"><img src="media/mail.png" alt="" className="social" /></a>
                <span className="social-text">{data.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-4">

          <h3>{data.education.name}</h3>
          <hr />
          <ul className="theme-list">
            {data.education.entries.map((entry, index) => (
              <li className="theme-list-item" key={index}>
                <div className="theme-list-focus">{entry.start} - {entry.end} </div>
                <h3 className="h5 mb-1 timeline-title">{entry.title}</h3>
                <h3 className="h5 mb-1 timeline-subtitle">{entry.school}</h3>
                <h3 className="h5 mb-1 timeline-subtitle theme-gray">{entry.location}</h3>
              </li>
            ))}
          </ul>

          <br />

          <h3>{data.skills.name}</h3>
          <hr />

          <h5 className="theme-gray">{data.skills.technical.name}</h5>
          <ul className="skills">

            {data.skills.technical.entries.map((entry, index) => (
              <li key={index}>
                <div className="progress ">
                  <div className="progress-bar theme-blue-bg " role="progressbar" style={{ width: `${entry.percentage}%` }}> {entry.name.toUpperCase()} </div>
                </div>
              </li>
            ))}
          </ul>

          <br />
          <h5 className="theme-gray">{data.skills.professional.name}</h5>
          <ul className="skills mt-2 ml-3 timeline-bullet-list">
            {data.skills.professional.entries.map((entry, index) => (
              <li key={index}>{entry.name}</li>
            ))}
          </ul>

          <br />

        </div>
        <div className="col-md-8">
          <h3>{data.experience.name}</h3>
          <hr />
          <ul className="timeline">
            {data.experience.entries.map((entry, index) => (
              <li className="timeline-item rounded ml-3" key={index}>
              <div className="timeline-period">{entry.start} - {entry.end}</div>
              <h2 className="h5 mb-1 timeline-title">{entry.title}</h2>
              <h2 className="h5 mb-1 timeline-subtitle">{entry.company}</h2>
              <h2 className="h5 mb-1 timeline-subtitle theme-gray">{entry.location}</h2>
              <ul className="mt-2 timeline-bullet-list ">
                {entry.activities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </li>
            ))}

           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
