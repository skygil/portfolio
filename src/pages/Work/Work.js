import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { WorkItem, WorkTitle, JobTitle, Year } from './styles';

const Work = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Work</SectionTitle>
        <ul>
          {user.work.map((work, i) => (
            <WorkItem key={i}>
              <WorkTitle>
                {work.position}
                <Year>{work.start.year} to {work.end.year}</Year>
              </WorkTitle>
                <JobTitle>{work.company}</JobTitle> 
                <Year>{work.location}</Year>
              <div>
              <Paragraph>{work.summary}</Paragraph>
              </div>
            </WorkItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Work;
