import React from "react"
import GitHub from "../../png/GitHub.png"
import Linkedin from "../../png/Linkedin.png"
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <p>&copy;2022 by Javier Vargas </p>
      <div id="logos">
        <a href="https://github.com/TheGoumble" target="-blank">
          <img id="github" src={GitHub} alt="Link to my Github" />
        </a>

        <a
          href="https://www.linkedin.com/in/javier-andres-vargas-58136a213"
          target="-blank"
        >
          <img id="linkedin" src={Linkedin} alt="Link to my Linkedin" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
