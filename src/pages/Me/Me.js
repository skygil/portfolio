/* Import constants*/
import * as i from './index';
import * as s from '../../styles';

const Me = ({ user }) => {
  return (
    <i.Layout user={user}>
      <div>
        <s.SectionTitle>About Me</s.SectionTitle>
        <s.Paragraph>{user.basics.summary}</s.Paragraph>
      </div>
      <div>
        <s.SectionTitle>Skills</s.SectionTitle>
        <div>
          {user.skills.map(skill => (
            <s.Pill key={skill.name}>{skill.name}</s.Pill>
          ))}
        </div>
      </div>
      <div>
        <s.SectionTitle>Profiles</s.SectionTitle>
        <ul>
          {user.basics.profiles.map((profile, i) => (
            <s.ProfileLink key={profile.network}>
              {i !== 0 && ' | '}
              <a href={profile.url} target="_blank" rel="noreferrer noopener">
                {profile.network}
              </a>
            </s.ProfileLink>
          ))}
        </ul>
      </div>
    </i.Layout>
  );
};

export default Me;
