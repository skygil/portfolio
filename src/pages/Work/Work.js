/* Import constants*/
import * as i from './index';
import * as s from '../../styles';

const Work = ({ user }) => {
  return (
    <i.Layout user={user}>
      <div>
        <s.SectionTitle>Work</s.SectionTitle>
        <ul>
          {user.work.map((work, i) => (
            <s.ListItem key={i}>
              <s.Heading1>
                {work.position}
                <s.Emphasis>{work.start.year} to {work.end.year}</s.Emphasis>
              </s.Heading1>
                <s.Heading2>{work.company}</s.Heading2> 
                <s.Emphasis>{work.location}</s.Emphasis>
              <div>
              <s.Paragraph>{work.summary}</s.Paragraph>
              </div>
            </s.ListItem>
          ))}
        </ul>
      </div>
    </i.Layout>
  );
};

export default Work;
