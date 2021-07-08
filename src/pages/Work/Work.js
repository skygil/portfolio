import {React, Layout} from './index';
import { SectionTitle, Paragraph, ListItem, Emphasis,Heading1,Heading2 } from '../../styles';

const Work = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Work</SectionTitle>
        <ul>
          {user.work.map((work, i) => (
            <ListItem key={i}>
              <Heading1>
                {work.position}
                <Emphasis>{work.start.year} to {work.end.year}</Emphasis>
              </Heading1>
                <Heading2>{work.company}</Heading2> 
                <Emphasis>{work.location}</Emphasis>
              <div>
              <Paragraph>{work.summary}</Paragraph>
              </div>
            </ListItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Work;
