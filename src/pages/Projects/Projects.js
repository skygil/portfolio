/* Import constants*/
import * as i from './index';
import * as s from '../../styles';
import git from './images/github.png';
import gif from './images/theGameOfChess.gif';
import { If, Then, Else } from 'react-if-elseif-else-render';


const Projects = ({ user }) => {
  return (
    <i.Layout user={user}>
      <div>
        <s.SectionTitle>Projects</s.SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <s.ListItem key={i}>
                <s.Heading1>
                  {project.displayName}
                  <a href={project.githubUrl} target="_blank" rel="noreferrer noopener">
                    <s.Icon src={git} alt = ""/>
                  </a>
                </s.Heading1>
              <s.Paragraph>{project.summary}</s.Paragraph>
              <div>
                <If condition={project.name === "isqa521-datavisualization"}>
                  <Then>
                    <a href='https://skygil.shinyapps.io/Game_of_Chess_Final/' target="_blank" rel="noreferrer noopener">
                    <s.Gif src={gif} alt = ""/>
                    </a>
                  </Then>
                  {/* <Else>          
                  </Else> */}
                </If>
              </div>
              <s.BulletList><s.Paragraph>{project.description}</s.Paragraph></s.BulletList>
              <s.SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <s.Pill key={j}>{item}</s.Pill>
                ))}
              </s.SkillContainer>
            </s.ListItem>
          ))}
        </ul>
      </div>
    </i.Layout>
  );
};

export default Projects;
