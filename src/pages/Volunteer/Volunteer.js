import {React, Layout} from './index';
import { SectionTitle, Paragraph, Emphasis, ListItem, Heading1, Heading2} from '../../styles';

const Volunteer = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Volunteer</SectionTitle>
        <ul>
          {user.volunteer.map((volunteer, i) => (
            <ListItem key={i}>
              <Heading1>{volunteer.organization}</Heading1>
              <div>
                <Heading2>
                  {volunteer.position}
                </Heading2>{' '}
                <Emphasis>
                  {volunteer.start.year} 
                </Emphasis>
              </div>
              <Paragraph>{volunteer.summary.replace('\n\n', '\n')}</Paragraph>
            </ListItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Volunteer;
