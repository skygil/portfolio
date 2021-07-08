/* Import constants*/
import * as i from './index';
import * as s from '../../styles';
import {Icon } from './styles';

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
                  <s.HoverLink href={project.githubUrl} target="_blank" rel="noreferrer noopener">
                    <Icon src={i.image} alt = ""/>
                    </s.HoverLink>
                </s.Heading1>
              <s.Paragraph>{project.summary}</s.Paragraph>
              <s.BulletList>{project.description}</s.BulletList>
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
