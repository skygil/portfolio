import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { EducationItem, Institution, Degree, Year } from './styles';

const Education = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Education</SectionTitle>
        <ul>
          {user.education.map((education, i) => (
            <EducationItem key={i}>
              <Institution>{education.institution} </Institution>
              <div>
                <a  href={education.url} target="_blank" rel="noreferrer noopener">
                <Degree>
                  {education.studyType}, {education.area} 
                </Degree>{' '}
                </a>
                <Year>{education.start.year} to {education.end.year}</Year>
                
                <br>
                  
                </br>
                
              </div>
              <Paragraph>{education.description.replace('\n\n', '\n')}</Paragraph>
            </EducationItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Education;
