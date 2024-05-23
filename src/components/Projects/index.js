import React from 'react'
import { useState } from 'react'
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all')
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Check out some of the projects I have worked on in the past.
        </Desc>
        <ToggleButtonGroup>
          {toggle === 'all' ? (
            <ToggleButton active value="all" onClick={() => setToggle('all')}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle('all')}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'games' ? (
            <ToggleButton
              active
              value="games"
              onClick={() => setToggle('games')}
            >
              GAMES
            </ToggleButton>
          ) : (
            <ToggleButton value="games" onClick={() => setToggle('games')}>
              GAMES
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'web' ? (
            <ToggleButton active value="web" onClick={() => setToggle('web')}>
              WEB
            </ToggleButton>
          ) : (
            <ToggleButton value="web" onClick={() => setToggle('web')}>
              WEB
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'other' ? (
            <ToggleButton
              active
              value="other"
              onClick={() => setToggle('other')}
            >
              OTHER
            </ToggleButton>
          ) : (
            <ToggleButton value="other" onClick={() => setToggle('other')}>
              OTHER
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
