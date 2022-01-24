import React, { useContext } from 'react';
import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserPictures from '../components/UserPicture';
import UserDetails from '../components/userDetails';
import UserNumbers from '../components/userNumbers';
import { context } from '../context'

export default function Home() {
    const ctx = useContext(context);

    return (
        <Container>
            <Header />
            <UserContainer>
                {ctx.userData?.name ?
                    <React.Fragment>
                        <UserPictures url={ctx.userData?.avatar_url} alternativeText={ctx.userData?.login} />
                        <UserDetails name={ctx.userData?.name} login={ctx.userData?.login} bio={ctx.userData?.bio} />
                        <UserNumbers repos={ctx.userData?.public_repos} followers={ctx.userData?.followers} following={ctx.userData?.following} />
                    </React.Fragment>
                : undefined }
            </UserContainer>
        </Container>
    );
}