import React from "react";
import "./Home.css";

const Home = () => {
  const cardData = [
    {
      icon: '📚', // Book icon for Courses
      title: 'Comprehensive Courses',
      description: 'Explore a wide range of subjects designed to enhance your learning experience. Our comprehensive courses cater to different learning styles, providing valuable insights and skills to help you succeed in your educational and professional pursuits.',
    },
    {
      icon: '🧑‍🏫', // Teacher icon for Expert Instructors
      title: 'Expert Instructors',
      description: 'Learn from seasoned industry professionals who bring real-world experience to the classroom. Our expert instructors are dedicated to providing you with the knowledge and guidance needed to excel in your field, ensuring you gain practical skills and insights.',
    },
    {
      icon: '🎓', // Graduation cap icon for Certification
      title: 'Certification',
      description: 'Receive accredited certificates upon course completion, showcasing your newfound skills and knowledge to potential employers. Our certification programs are designed to enhance your resume and demonstrate your commitment to professional development and continuous learning.',
    },
    {
      icon: '📈', // Graph icon for Career Growth
      title: 'Career Growth',
      description: 'Equip yourself with essential skills that pave the way for career advancement. Our courses are designed to help you achieve your professional goals, whether you’re looking to upskill, change careers, or simply enhance your knowledge in a particular area.',
    },
    {
      icon: '💻', // Laptop icon for Flexible Learning
      title: 'Flexible Learning',
      description: 'Enjoy the flexibility to study at your own pace with 24/7 access to course materials. Whether you’re a busy professional or a student, our online platform allows you to create a personalized learning schedule that fits your lifestyle and commitments.',
    },
    {
      icon: '🌍', // Globe icon for Global Community
      title: 'Global Community',
      description: 'Become part of a vibrant, global community of learners. Connect, collaborate, and share ideas with fellow students from diverse backgrounds, enhancing your learning experience and expanding your network as you work together on projects and discussions.',
    },
  ];
  return (
    <div>
      <section className="section">
        <div className="section-text">
          <h1>Your Title Here</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            vulputate justo at magna tincidunt, nec interdum eros pulvinar. Nam
            aliquam libero et metus vulputate, id interdum orci pellentesque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            vulputate justo at magna tincidunt, nec interdum eros pulvinar. Nam
            aliquam libero et metus vulputate, id interdum orci pellentesque.
          </p>
          <button className="contact-btn">Get in Touch</button>
        </div>
        <div className="section-image">
          <img src="../../../images/india-student.png" alt="Description" />
        </div>
      </section>

      <section
        className="section"
        style={{ backgroundColor: "rgb(92 173 52 / 6%)" }}
      >
        <div className="section-why-choose-us">
          <div className="section__head section__head--md text-center">
            <h2>Why Choose India Student</h2>
            <p>
              India Student is an eLearning platform created by a team of experienced experts who are passionate about their work. The team has successfully completed over 1000 projects for clients around the world. With years of experience in the market, India Student offers features designed to help both learners and educators succeed.
            </p>
          </div>
          <div className="section__body">
            <div className="counter-row">
              <div className="counter-box">
                <div className="counter-count">
                  <span className="num" id="num1">
                    1000
                  </span>
                  <span className="txt-sm">+</span>
                </div>
                <h5 className="counter-label">Projects</h5>
              </div>
              <div className="counter-box">
                <div className="counter-count">
                  <span className="num" id="num2">
                    40
                  </span>
                  <span className="txt-sm">+</span>
                </div>
                <h5 className="counter-label">Countries</h5>
              </div>
              <div className="counter-box">
                <div className="counter-count">
                  <span className="num" id="num3">
                    15
                  </span>
                  <span className="txt-sm">+</span>
                </div>
                <h5 className="counter-label">Niches catered</h5>
              </div>
              <div className="counter-box">
                <div className="counter-count">
                  <span className="num" id="num4">
                    4
                  </span>
                  <span className="txt-sm">/5</span>
                </div>
                <h5 className="counter-label">Overall Ratings</h5>
              </div>
              <div className="counter-box">
                <div className="counter-count">
                  <span className="num" id="num5">
                    5
                  </span>
                  <span className="txt-sm">+</span>
                </div>
                <h5 className="counter-label">Years of Experience</h5>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section >
        <div className="card-header">
          <h2>Features</h2>

        </div>
        <div className="card-section">

          {cardData.map((card, index) => (
            <div key={index} className="card">
              <div className="icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
