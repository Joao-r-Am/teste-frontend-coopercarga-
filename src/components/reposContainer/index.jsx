import {
    Section,
    Title,
    LisOfReposContainer,
    Repo
} from './styles'

const ReposContainer = props => {
    return (
        <Section>
            <Title>Repositórios de {(props.name)?.split(' ')[0]}</Title>
            <LisOfReposContainer>
                {Array.from(props?.repos).map(repo => (
                    <Repo onClick={() => window.location.href(repo?.html_url)} key={repo?.id}>
                        <h2>{repo?.name}</h2>
                        <h3>{repo?.description}</h3>
                        <p>{repo?.stargazers_count} Estrelas</p>
                    </Repo>
                ))}
            </LisOfReposContainer>
        </Section>
    );
}

//  Joao-r-Am

export default ReposContainer;