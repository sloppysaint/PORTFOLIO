"use client";
import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaNodeJs, FaReact, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import SchoolIcon from '@mui/icons-material/School';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { TooltipProvider, TooltipTrigger, TooltipContent, Tooltip } from '@radix-ui/react-tooltip';

const education = {
  icon: <SchoolIcon />,
  title: 'My Education',
  description: 'I am pursuing my B.tech in Computer Science and Engineering.',
  items: [
    {
      institution: "Bharati Vidyapeeth",
      degree: "Computer Science and Engineering",
      duration: "2022-2026",
    },
    {
      institution: "Coding Blocks",
      duration: "2023-2024",
      degree: "Full Stack Web Development Course"
    },
    {
      institution: "Mahavir Senior Model School",
      duration: "2008-2022",
      degree: "Graduated with a strong foundation in academic excellence."
    }
  ]
};

const skills = {
  title: "My skills",
  description: "A versatile web developer proficient in both front-end and back-end technologies, with a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React.js and Next.js. I excel in creating responsive and user-friendly interfaces with Tailwind CSS and Figma, and have experience in server-side development with Node.js.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html"
    },
    {
      icon: <FaCss3 />,
      name: "cSS"
    },
    {
      icon: <FaJs />,
      name: "javascript"
    },
    {
      icon: <FaReact />,
      name: "react.js"
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js"
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.cSS"
    },
    {
      icon: <FaFigma />,
      name: "figma"
    },
    {
      icon: <FaNodeJs />,
      name: "node.js"
    }
  ]
};
const about = {
  title: 'About me',
  description: 'I am an aspiring full-stack developer with a passion for building scalable and efficient applications.',
  info: [
    {
      fieldName: "Name",
      fieldValue:  "Piyush Khattar",
    },
    {
      fieldName: "Email",
      fieldValue:  "piyushkhattar26@gmail.com",
    },
    {
      fieldName: "Contact",
      fieldValue: "(+91) 8860-239-250"
    },
    {
      fieldName: "Nationality",
      fieldValue:  "Indian",
    },
    
    {
      fieldName: "Freelance",
      fieldValue:  "Available",
    },
    
    {
      fieldName: "Languages",
      fieldValue:  "English , Hindi",
    },
    
  ]
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="education" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">My Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] min-h-[190px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent ">{item.duration}</span>
                        <div className="flex flex-col gap-1 items-center lg:items-start">
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] ">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-6'>
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[621px] mx-auto xl:mx-0'>
                  {about.info.map((item,index)=>{
                    return <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                      <span className= "text-white/60">{item.fieldName}</span>
                      <span className= "text-xl">{item.fieldValue}</span>
                    </li>
                  })}
                </ul> 
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
