"use client"
import { useState, useEffect } from 'react';
import axios from "axios";

const Skills = () => {

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    interface SkillsData {
        [category: string]: string[]; 
      }

    const [skills, setSkills] = useState<SkillsData | null>();
    useEffect(() => {
        const fetchSkills = async () => {
            console.log(baseUrl);
            const response = await axios.get(`${baseUrl}/api/v1/skills`);
            setSkills(response.data.data.Skills);
        }

        fetchSkills();
    }, [])

    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-xl font-bold'>Skills</h1>
            <div className='flex flex-col gap-4'>
                {skills && Object.entries(skills).map(([category, categorySkills]) => {
                    return (
                        <div key={category} className='flex flex-col md:flex-row gap-4'>
                            <h2 className='text-lg'>{category} : </h2>
                            <div className='flex gap-4'>
                                {categorySkills.map((skill: string, index: any) => (
                                    <span
                                        key={index}
                                        className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Skills;