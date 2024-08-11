

import Link from "next/link";
import { FaGithub, FaLinkedinIn,FaInstagram} from "react-icons/fa";
// import XIcon from '@mui/icons-material/X';

const socials = [
    { icon: <FaGithub />, path: "https://github.com/sloppysaint" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/piyush-khattar-39b49a261/" },
    // { icon: <XIcon />, path: "" },
    { icon: <FaInstagram />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            ))}
        </div>
    );
};

export default Social;
