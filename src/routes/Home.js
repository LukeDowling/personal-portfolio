import Fade from "@mui/material/Fade";
import { TransitionGroup } from "react-transition-group";
import "./Home.css";

function Home() {
  return (
    <TransitionGroup>
      <Fade timeout={1500}>
        <div id="home-container">
          <h1 class="home-heading">
            Hi, my name is Luke and this is my Personal portfolio.
          </h1>
          <p class="home-paragraph">
            I built this website built to showcase and test my programming
            skills, and to practice building and deploying an application to a
            live server.
          </p>
          <h1 class="home-heading">
            This website was made using a combination of HTML, CSS and
            Javascript with React.
          </h1>
          <p class="home-paragraph">
            Under the projects section you'll find a number of my demonstration
            projects. Check out the contact section to get in touch and you'll
            also find more links there
          </p>
          <h1 class="home-heading">
            For any enquiries, please head to the contact section. You'll also
            find my relevant links there.
          </h1>
        </div>
      </Fade>
    </TransitionGroup>
  );
}

export default Home;
