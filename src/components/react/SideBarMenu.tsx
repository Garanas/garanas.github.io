// SideBarMenu.tsx
import { type FC } from 'react';
import styles from './SideBarMenu.module.css';

interface SideBarMenuProps {
    currentPath: string;
}

const menuItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'projects', label: 'Projects', href: '/projects' },
    { id: 'services', label: 'Services', href: '/services' },
    { id: 'store', label: 'Store', href: '/store' },
    { id: 'blog', label: 'Blog', href: '/blog/' },
    { id: 'cv', label: 'CV', href: '/cv' },
    {
        id: 'contact',
        label: 'Contact',
        href: 'mailto:contact.manuelernestog@gmail.com',
        target: '_blank',
        referrerPolicy: 'no-referrer-when-downgrade'
    }
] as const;

const SideBarMenu: FC<SideBarMenuProps> = ({ currentPath }) => {
    const isActive = (href: string) => {
        if (href === '/') {
            return currentPath === '/';
        }
        return currentPath.startsWith(href);
    };

    return (
        <ul className={styles.menu}>
            {menuItems.map(({ id, label, href, ...rest }) => (
                <li key={id}>
                    <a
                        className={`${styles.menuItem} ${
                            isActive(href) ? styles.active : ''
                        }`.trim()}
                        id={id}
                        href={href}
                        {...rest}
                    >
                        {label}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default SideBarMenu;