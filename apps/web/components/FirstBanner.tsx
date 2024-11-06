import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';

const FirstBanner = () => {
    return(
        <div className="flex flex-col gap-4">
            <div>
            <span className="text-center font-bold text-3xl">Hello, Shyam here.. </span> <br/>
            A Passionate Full Stack Developer focused on learning through experimentation and product development.
            </div>
            <div className='flex flex-row gap-4'>
            <a href="mailto:shyamnitro.cs5@gmail.com"><EmailIcon/></a>
            <a href="https://www.linkedin.com/in/shyam-sunder-saravanan/" target="_blank"><LinkedInIcon/></a>
            <a href="https://x.com/N1tr0s_ken" target="_blank"><XIcon/></a>
            <a href="https://github.com/ShyamSunder149" target="_blank"><GitHubIcon/></a>
            <a href="mailto:shyamnitro.cs5@gmail.com" target="_blank"><DescriptionIcon/></a>
            </div>
        </div>
    )
}

export default FirstBanner;