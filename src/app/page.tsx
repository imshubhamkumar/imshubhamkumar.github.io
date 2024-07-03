
import profilePhoto from './assets/profile.png'
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <>
      <section className="header-section">
        <nav className="navbar flex flex-row justify-between p-1">
          <div className="logo-container"></div>
          <ul className="nav-list flex flex-row gap-4">
            <li className="list-item cursor-pointer">
              <a className="btn header-btn-resume flex flex-row gap-2" href="./assets/Shubham_Resume.pdf" download="Shubham's Resume"><FontAwesomeIcon icon={faDownload} />Resume</a>
            </li>
            {/* <li className="list-item cursor-pointer">
              <a href='#about-shubham'>
                <button className="btn header-btn">About</button></a>
            </li>
            <li className="list-item cursor-pointer">
              <button className="btn header-btn">Skills</button>
            </li>
            <li className="list-item cursor-pointer">
              <button className="btn header-btn">Projects</button>
            </li>
            <li className="list-item cursor-pointer">
              <button className="btn header-btn">Contact me</button>
            </li> */}
          </ul>
        </nav>
        <div className="header-container flex flex-row justify-between h-4/5">
          <div className="intro-container w-full p-4">
            <div className="intro">
              Hey! i am
            </div>
            <div className="name-container p-2">
              Shubham Kumar
            </div>
            <div className="title-container p-2">
              Senior Software Engineer based in Bangalore, India
            </div>
          </div>
          <div className="image-container w-full flex justify-center p-4">
            <div className="image-background">
              <Image src={profilePhoto} height={600} alt="profile_image" />
            </div>
          </div>
        </div>
      </section>
      {/* <section id='about-shubham' className='about-me p-4'>
        <h1 className='text-lg'>About me</h1>
        <p className='p-4'>
          Highly skilled Full Stack Developer with 5+ years of expertise in crafting dynamic and user-centric web applications. Proficient in
          frontend development using ReactJS, Angular, and Vue.js, as well as backend systems with Node.js, Express.js, and related
          technologies. Also well-versed in backend development using Java and Python. Adept at comprehending project requirements and
          devising optimal solutions that align with business objectives
        </p>
      </section> */}
    </>
  );
}

export default Home;