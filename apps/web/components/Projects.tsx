"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import GitHubIcon from '@mui/icons-material/GitHub';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const Projects = () => {

    interface Project {
        title: any;
        name: string,
        desc: string,
        tags: Array<String>,
        githubLink: string,
        deploymentLink: string | null,
        img: string
    }

    const [projects, setProjects] = useState<Array<Project>>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get("http://localhost:3000/api/v1/projects")
            setProjects(response.data.data.projects);
        }

        fetchProjects();
    }, [])

    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-xl font-bold'>Projects</h1>
            <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {projects.map((project: Project) => {
                    return (
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <div className="flex flex-col gap-3 px-6 py-4">
                                <div className="font-bold text-xl mb-2">{project.title}</div>
                                <p className="text-gray-700 text-base">
                                    {project.desc}
                                </p>
                                <div className="flex flex-row gap-3 flex-wrap">
                                    {project.tags.map((tag) => {
                                        return <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">{tag}</span>
                                    })}
                                </div>
                                <div className="flex flex-row items-end">
                                    <a href={project.githubLink}>
                                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                            <span className="flex flex-row gap-2 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                <GitHubIcon /><p>Github Repo</p>
                                            </span>
                                        </button>
                                    </a>
                                    {project.deploymentLink != null && <a href={project.deploymentLink}>
                                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                            <span className="flex flex-row gap-2 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                <RocketLaunchIcon />
                                                <p>Deployment</p>
                                            </span>
                                        </button>
                                    </a>}
                                </div>
                            </div>
                        </div>)
                })}
            </div>
        </div >
    )
}

export default Projects;