import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Editar perfil</EditButton> */}

        <h1>Alexandre Monteiro</h1>
        <h2>@ale_monteiro14</h2>

        <p>
          Javascript Developer - Typescript, AngularJs, React, React Native and
          NodeJs. Enthusiastic about new technologies. Computer Engineering
          Student.
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 14 de julho de 2000
          </li>
        </ul>

        <Followage>
          <span>
            <strong>105</strong> seguindo
          </span>
          <span>
            <strong>5 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
