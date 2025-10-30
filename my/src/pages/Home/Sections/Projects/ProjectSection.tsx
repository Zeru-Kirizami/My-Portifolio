import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { type ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import { Subtitles } from "@mui/icons-material";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Exemplos de Projeto Batman",
            subtitle: "Jul 2023 - Dez 2023",
            srcImg: "/src/assets/images/Batman 1.png",
            description: "Um dos meus primeiros projetos, essa landing page foi totalmente construida em Html, CSS e JavaScript.",
            technologies: "Technologies: HTML, CSS, JavaScript",
            websiteURL: "https://trello.com/",
            codeURL: "https://github.com/",
        },
        
        {
            title: "Exemplos de Projeto Fotos",
            subtitle: "Jul 2023 - Dez 2023",
            srcImg: "/src/assets/images/Batman 4.png",
            description: "Essa parte da landing page foi contruida também em Html, CSS e JavaScript e possui um Script para abrir cada foto em uma nova janela e em Zoom.",
            technologies: "Technologies: HTML, CSS, JavaScript",
            websiteURL: "https://trello.com/",
            codeURL: "https://github.com/",
        },
        
        {
            title: "Exemplos de Projeto Tela inteira",
            subtitle: "Jul 2023 - May 2023",
            srcImg: "/src/assets/images/Batman 2.png",
            description: "Nesta mostro como ficou a visão do site com um zoom out para que possa ser visto como ficou cada sessão.",
            technologies: "Technologies:  HTML, CSS, JavaScript",
            websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
            codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
        },
        {
            title: "Exemplo de Projeto Justly",
            subtitle: "Jul 2024 - May 2024",
            srcImg: "/src/assets/images/Justly 1.png",
            description: "Site construido como parte do meu treinamento/aprendizado visando usar mais ferramentas e recursos, também foram usados Html, CSS e JavaScript.",
            technologies: "Technologies: HTML, CSS, JavaScript",
            websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
            codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
        },
        {
            title: "Exemplo de Projeto Justly",
            subtitle: "Jul 2024 - May 2024",
            srcImg: "/src/assets/images/Justly 4.png",
            description: "Aqui mostro uma segunda parte da landing page com alguns elementos em destaques, fazendo um chamariz para os clientes que podem dar suas opniões.",
            technologies: "Technologies: HTML, CSS, JavaScript",
            websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
            codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
        },   
        {
            title: "Exemplo de Projeto Justly",
            subtitle: "Jul 2024 - May 2024",
            srcImg: "/src/assets/images/Justly 5.png",
            description: "Como essa landing Page ficou bem grande evitei colocar toda ela aqui em breve estarei subindo ela para um repositório e poderá ser vista por completo, dito isso fechei com o rodapé do site",
            technologies: "Technologies: HTML, CSS, JavaScript",
            websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
            codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
        },

    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projetos</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection