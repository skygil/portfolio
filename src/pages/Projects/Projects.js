import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill, Item } from '../../styles';
// eslint-disable-next-line
import { ProjectTitle, SkillContainer, ViewProject, ProjectDesc, Image } from './styles';
import image from './github.png';

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <Item key={i}>
                <ProjectTitle>
                  {project.displayName}
                  <ViewProject href={project.githubUrl} target="_blank" rel="noreferrer noopener">
                    <Image href={project.githubUrl} target="_blank" rel="noreferrer noopener" src={image} alt = ""/>
                    </ViewProject>
                </ProjectTitle>
              <p>{project.summary}</p>
              <ProjectDesc>{project.description}</ProjectDesc>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
            </Item>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
