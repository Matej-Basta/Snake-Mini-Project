import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
    return (
        <div className="footer">
            <div className="icons-container">
                <a href="https://github.com/Matej-Basta" target="_blank"><BsGithub /></a>
                <a href="https://www.linkedin.com/in/mat%C4%9Bj-ba%C5%A1ta-265325143/" target="_blank"><BsLinkedin /></a>
            </div>
        </div>
    )
}