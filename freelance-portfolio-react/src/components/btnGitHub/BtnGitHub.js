import "./style.css"

import gitHubIcon from "./gitHub-black.svg";

const BtnGitHub = ({link}) => {
  return (  
    <a href={link} target="_blanc" rel="noreferrer" className="btn-outline">
      <img src={gitHubIcon} alt="link for github" />
      GitHub repo
    </a>
  );
}
 
export default BtnGitHub;