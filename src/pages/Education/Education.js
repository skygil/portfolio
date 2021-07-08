import React from 'react';
import Layout from '../../components/Layout';
// eslint-disable-next-line
import { SectionTitle, Paragraph, ListItem, Emphasis, Heading1, Heading2, HoverLink, BulletList } from '../../styles';

const Education = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Education</SectionTitle>
        <ul>
          {user.education.map((education, i) => (
            <ListItem key={i}>
              <Heading1>{education.institution} </Heading1>
              <div>
                <HoverLink  href={education.url} target="_blank" rel="noreferrer noopener">
                <Heading2>
                  {education.studyType}, {education.area} 
                </Heading2>{' '}
                </HoverLink>
                <Emphasis>{education.start.year} to {education.end.year}</Emphasis>  
              </div>
              {education.description.length > 0 &&
              <BulletList>
                {education.description.replace('\n\n', '\n')}
              </BulletList>
              }
            </ListItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Education;
