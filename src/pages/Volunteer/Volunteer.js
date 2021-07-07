import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { VolunteerItem, VolunteerOrganization,VolunteerPosition } from './styles';

const Volunteer = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Volunteer</SectionTitle>
        <ul>
          {user.volunteer.map((volunteer, i) => (
            <VolunteerItem key={i}>
              <VolunteerOrganization>{volunteer.organization}</VolunteerOrganization>
              <div>
                <VolunteerPosition>
                  {volunteer.position}
                </VolunteerPosition>{' '}
                <span> &sdot; </span>
                <span>
                  {volunteer.start.year} to {volunteer.end.year}
                </span>
              </div>
              <Paragraph>{volunteer.summary.replace('\n\n', '\n')}</Paragraph>
            </VolunteerItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Volunteer;
