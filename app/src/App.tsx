import styled from "styled-components";

import GreetingSection from "./components/GreetingSection";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";

function App() {
    return (
        <Container>
            <GreetingSection />
            <SkillSection />
            <ProjectSection />
        </Container>
    );
}

const Container = styled.main`
    width: 100%;
    max-width: 50rem;

    margin: auto;
`;

export default App;
