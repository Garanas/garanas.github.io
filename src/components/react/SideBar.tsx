// SideBar.tsx
import { type FC } from 'react';
import SideBarMenu from './SideBarMenu';
import SideBarFooter from './SideBarFooter';
import styles from './SideBar.module.css';

interface SideBarProps {
    currentPath: string;
}

const SideBar: FC<SideBarProps> = ({ currentPath }) => {
    return (
        <div className={styles.drawerSide}>
            <label htmlFor="my-drawer" className={styles.drawerOverlay}></label>
            <aside className={styles.sidebar}>
                <div className={styles.profileContainer}>
                    <a href="/" className={styles.avatarLink}>
                        <div className={styles.avatar}>
                            <img
                                className={styles.profileImage}
                                src="/profile-01.jpg"
                                alt="Profile image"
                                width={300}
                                height={300}
                            />
                        </div>
                    </a>
                </div>

                <SideBarMenu currentPath={currentPath} />
                <SideBarFooter />
            </aside>
        </div>
    );
};

export default SideBar;