import { type FC } from 'react';
import SideBarMenu from './SideBarMenu';
import SideBarFooter from './SideBarFooter';
import styles from './SideBar.module.css';

interface SideBarProps {
    sideBarActiveItemID?: string;
}

const SideBar: FC<SideBarProps> = ({ sideBarActiveItemID }) => {
    return (
        <div className={styles.drawerSide}>
            <label htmlFor="my-drawer" className={styles.drawerOverlay}></label>
            <aside className={styles.sidebar}>
                <div className={styles.profileContainer}>
                    <a href="/" className={styles.avatarLink}>
                        <div className={styles.avatar}>
                            <img
                                className={styles.profileImage}
                                src="/profile.webp"
                                alt="Profile image"
                                width={300}
                                height={300}
                            />
                        </div>
                    </a>
                </div>

                <SideBarMenu activeItemId={sideBarActiveItemID} />
                <SideBarFooter />
            </aside>
        </div>
    );
};

export default SideBar;
