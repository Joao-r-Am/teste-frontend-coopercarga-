import {
        Container,
        ProfilePicture
} from './styles';

const UserPictures = props => (
    <Container>
        <ProfilePicture src={props?.url} alt={props?.alternativeText} />
    </Container>
);

export default UserPictures;