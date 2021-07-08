/* Import constants*/
import * as i from './index';
import * as s from '../../styles';

const Education = ({ user }) => {
  return (
    <i.Layout user={user}>
      <div>
        <s.SectionTitle>Education</s.SectionTitle>
        <ul>
          {user.education.map((education, i) => (
            <s.ListItem key={i}>
              <s.Heading1>{education.institution} </s.Heading1>
              <div>
                <s.HoverLink  href={education.url} target="_blank" rel="noreferrer noopener">
                <s.Heading2>
                  {education.studyType}, {education.area} 
                </s.Heading2>{' '}
                </s.HoverLink>
                <s.Emphasis>{education.start.year} to {education.end.year}</s.Emphasis>  
              </div>
              {education.description.length > 0 &&
              <s.BulletList>
                {education.description.replace('\n\n', '\n')}
              </s.BulletList>
              }
            </s.ListItem>
          ))}
        </ul>
      </div>
    </i.Layout>
  );
};

export default Education;
