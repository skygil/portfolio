import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
// eslint-disable-next-line
import { ProjectItem, ProjectTitle, SkillContainer, ViewProject, ProjectDesc, Image } from './styles';
import image from './github.png';

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
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
            </ProjectItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
{/* <ViewProject href={project.website} target="_blank" rel="noreferrer noopener">
</ViewProject> */}