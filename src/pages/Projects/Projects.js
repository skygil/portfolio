
import {React, Layout,image} from './index';
import { SectionTitle, Heading1, Pill, ListItem, Paragraph, HoverLink, SkillContainer, BulletList} from '../../styles';
// eslint-disable-next-line
import {Icon } from './styles';

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ListItem key={i}>
                <Heading1>
                  {project.displayName}
                  <HoverLink href={project.githubUrl} target="_blank" rel="noreferrer noopener">
                    <Icon src={image} alt = ""/>
                    </HoverLink>
                </Heading1>
              <Paragraph>{project.summary}</Paragraph>
              <BulletList>{project.description}</BulletList>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
            </ListItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
