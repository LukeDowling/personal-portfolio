import { TransitionGroup } from "react-transition-group";
import Fade from "@mui/material/Fade";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Grid";
import "./Contact.css";

function Contact() {
  return (
    <TransitionGroup>
      <Fade timeout={1500}>
        <div id="contact-container">
          <h1 id="contact-heading">Get in contact:</h1>
          <Grid container direction="row" alignItems="center">
            <EmailIcon />
            <a id="email" href="mailto:lukegdowling@gmail.com">
              lukegdowling@gmail.com
            </a>
          </Grid>
          <Grid container direction="row" alignItems="center">
            <GitHubIcon />
            <a
              id="github"
              target="_blank"
              href="https://github.com/LukeDowling"
              rel="noreferrer"
            >
              GitHub
            </a>
          </Grid>
          <Grid container direction="row" alignItems="center">
            <CodeIcon />
            <a
              id="freecodecamp"
              target="_blank"
              href="https://www.freecodecamp.org/Luke-Dowling"
              rel="noreferrer"
            >
              FreeCodeCamp Certificates
            </a>
          </Grid>
        </div>
      </Fade>
    </TransitionGroup>
  );
}

export default Contact;
