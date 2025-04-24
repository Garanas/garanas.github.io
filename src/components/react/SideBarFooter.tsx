import {type FC} from 'react';
import {BiCoffee} from 'react-icons/bi';
import {FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa';
import {RiRssFill} from 'react-icons/ri';
import styles from './SideBarFooter.module.css';

const socialLinks = [
    {
        href: "https://manuelernestog.github.io/support-my-work/",
        label: "Support my work",
        icon: BiCoffee
    },
    {
        href: "https://github.com/manuelernestog",
        label: "Github",
        icon: FaGithub
    },
    {
        href: "https://twitter.com/manuelernestog",
        label: "Twitter",
        icon: FaTwitter
    },
    {
        href: "https://www.linkedin.com/in/manuelernestogr",
        label: "Linkedin",
        icon: FaLinkedin
    },
    {
        href: "/rss.xml",
        label: "RSS Feed",
        icon: RiRssFill
    }
] as const;

const SocialIcons: FC = () => (
    <div className={styles['social-icons']}>
        {socialLinks.map(({href, label, icon: Icon}) => (
            <a
                key={href}
                href={href}
                target="_blank"
                className="mx-3"
                aria-label={label}
                title={label}
                rel="noopener noreferrer"
            >
                <Icon size={24}/>
            </a>
        ))}
    </div>
);

export default SocialIcons;
