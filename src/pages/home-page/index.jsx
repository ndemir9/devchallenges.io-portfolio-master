import React from 'react'
import Layout from '../../layout'
// Component
import UserComponent from "../../components/user-component"
import SkillsComponent from "../../components/skills-component"
import HobbiesComponent from '../../components/hobbies-component'
import BlogsComponent from '../../components/blogs-component'
import ExperiencesComponent from '../../components/experiences-component'
import ProjectsComponent from '../../components/projects-component'
// Data
import { user_data } from "../../data/user-data"
import { skills_data } from "../../data/skills-data"
import { hobbies_data } from "../../data/hobbies-data"
import { blogs_data } from "../../data/blogs-data"
import { experiences_data } from "../../data/experiences-data"
import { projects_data } from "../../data/projects-data"

const HomePage = () => {
    return (
        <Layout>
            <UserComponent data={user_data} />
            <section className='sm:flex gap-8 mt-8'>
                <div className='flex flex-col gap-8 sm:mb-0' style={{ flex: 2 }}>
                    <SkillsComponent data={skills_data} />
                    <HobbiesComponent data={hobbies_data} />
                </div>
                <div className='flex flex-col gap-8' style={{ flex: 3 }}>
                    <BlogsComponent data={blogs_data} />
                    <ExperiencesComponent data={experiences_data} />
                </div>
            </section>
            <ProjectsComponent data={projects_data} />
        </Layout>
    )
}

export default HomePage