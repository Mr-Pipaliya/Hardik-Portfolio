import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. in Computer Engineering</h4>
                <h5>Shree Swami Atmanand Saraswati Institute of Technology / GTU</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              Expected Graduation: 2027 | CGPA: 7.78 / 10.0. Relevant Coursework: Object-Oriented
              Programming (OOP), Database Management Systems (DBMS), Web Technologies, Data Structures & Algorithms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Academic Performance</h4>
                <h5>Computer Engineering</h5>
              </div>
              <h3>7.78 CGPA</h3>
            </div>
            <p>
              Maintained a consistent 7.78 cumulative GPA track in core engineering fields while executing
              practical software layouts and responsive web projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Collaboration</h4>
                <h5>University Engineering Labs</h5>
              </div>
              <h3>ACTIVITIES</h3>
            </div>
            <p>
              Guided peer troubleshooting sessions during university engineering labs to resolve frontend
              layout compilation errors and code formatting issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
