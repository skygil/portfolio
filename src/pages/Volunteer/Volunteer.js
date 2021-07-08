/* Import constants*/
import * as i from './index';
import * as s from '../../styles';

const Volunteer = ({ user }) => {
  return (
    <i.Layout user={user}>
      <div>
        <s.SectionTitle>Volunteer</s.SectionTitle>
        <ul>
          {user.volunteer.map((volunteer, i) => (
            <s.ListItem key={i}>
              <s.Heading1>{volunteer.organization}</s.Heading1>
              <div>
                <s.Heading2>
                  {volunteer.position}
                </s.Heading2>{' '}
                <s.Emphasis>
                  {volunteer.start.year} 
                </s.Emphasis>
              </div>
              <s.Paragraph>{volunteer.summary.replace('\n\n', '\n')}</s.Paragraph>
            </s.ListItem>
          ))}
        </ul>
      </div>
    </i.Layout>
  );
};

export default Volunteer;
