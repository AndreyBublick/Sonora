'use client';

import {Logo} from "@/src/shared/ui";
import {InstagramLogoIcon, TwitterLogoIcon} from "@radix-ui/react-icons";
import {FooterNavColumn} from './footer-nav-column';
import {SocialLinks} from './social-links';
import styles from './footer.module.scss';

const navLinks = {
    melodies: [
        {label: 'Songs', href: '/'},
        {label: 'Radio', href: '/'},
        {label: 'Podcast', href: '/'},
    ],
    access: [
        {label: 'Explore', href: '/'},
        {label: 'Artists', href: '/'},
        {label: 'Playlists', href: '/'},
        {label: 'Albums', href: '/'},
        {label: 'Trending', href: '/'},
    ],
    contact: [
        {label: 'About', href: '/'},
        {label: 'Policy', href: '/'},
        {label: 'Social Media', href: '/'},
        {label: 'Support', href: '/'},
    ],
};

const socials = [
    {
        label: 'Facebook',
        href: 'https://www.facebook.com',
        hoverColor:'#1877F2',
        icon: (
            <svg width={24} height={24} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 22.6538V2.34615C0.5 1.85652 0.694505 1.38695 1.04073 1.04073C1.38695 0.694505 1.85652 0.5 2.34615 0.5H22.6538C23.1435 0.5 23.6131 0.694505 23.9593 1.04073C24.3055 1.38695 24.5 1.85652 24.5 2.34615V22.6538C24.5 23.1435 24.3055 23.6131 23.9593 23.9593C23.6131 24.3055 23.1435 24.5 22.6538 24.5H17.1154V15.7492H18.4262C18.7248 15.7492 19.0113 15.6306 19.2225 15.4194C19.4337 15.2082 19.5523 14.9218 19.5523 14.6231V13.2015C19.5523 12.9029 19.4337 12.6164 19.2225 12.4052C19.0113 12.194 18.7248 12.0754 18.4262 12.0754H17.1892V10.34C17.1892 8.78923 17.8908 8.78923 18.5923 8.78923H19.4969C19.6455 8.79535 19.7936 8.76876 19.9308 8.71134C20.068 8.65392 20.1909 8.56707 20.2908 8.45692C20.3981 8.35478 20.483 8.2315 20.5402 8.09485C20.5974 7.95821 20.6256 7.81119 20.6231 7.66308V6.29692C20.628 6.14659 20.6033 5.99676 20.5502 5.856C20.4972 5.71524 20.417 5.58631 20.3141 5.47657C20.2112 5.36684 20.0877 5.27846 19.9507 5.21649C19.8136 5.15451 19.6657 5.12016 19.5154 5.11538H17.3923C16.7728 5.0921 16.1557 5.20356 15.5835 5.44207C15.0113 5.68059 14.4977 6.04047 14.0781 6.49687C13.6586 6.95326 13.3432 7.49528 13.1536 8.0855C12.964 8.67571 12.9047 9.30005 12.98 9.91538V12.0754H11.7985C11.649 12.0729 11.5006 12.1003 11.3618 12.1558C11.2231 12.2112 11.0967 12.2938 10.9902 12.3986C10.8837 12.5034 10.799 12.6284 10.7413 12.7663C10.6836 12.9041 10.6538 13.0521 10.6538 13.2015V14.6231C10.6538 14.7725 10.6836 14.9205 10.7413 15.0583C10.799 15.1962 10.8837 15.3212 10.9902 15.426C11.0967 15.5308 11.2231 15.6134 11.3618 15.6689C11.5006 15.7244 11.649 15.7517 11.7985 15.7492H12.98V24.5H2.34615C1.85652 24.5 1.38695 24.3055 1.04073 23.9593C0.694505 23.6131 0.5 23.1435 0.5 22.6538Z" strokeLinecap="round" strokeLinejoin="round" stroke={'currentColor'}/>
            </svg>
        ),
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com',
        icon: <InstagramLogoIcon width={26} height={26} />,
        hoverGradient: {
            x1: '0%', y1: '100%', x2: '100%', y2: '0%',
            stops: [
                { offset: '0%',   color: '#f09433' },
                { offset: '25%',  color: '#e6683c' },
                { offset: '50%',  color: '#dc2743' },
                { offset: '75%',  color: '#cc2366' },
                { offset: '100%', color: '#bc1888' },
            ],
        },
    },
    {
        label: 'Twitter',
        hoverColor:'#1DA1F2',
        href: 'http://twitter.com',
        icon: <TwitterLogoIcon width={26} height={26} />,
    },
    {
        label: 'Phone',
        hoverColor:'#25D366',
        href: 'https://www.whatsapp.com',
        icon: (
            <svg width={25} height={25} viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.91086 0.844846L6.10726 0.183281C7.10709 -0.118361 8.18252 -0.045843 9.1328 0.387298C10.0831 0.82044 10.8433 1.5846 11.2714 2.53713L12.6382 5.57769C13.0065 6.39679 13.1091 7.31064 12.9316 8.19102C12.7541 9.07139 12.3054 9.8741 11.6485 10.4865L9.26028 12.7133C9.23077 12.7409 9.20655 12.7736 9.18883 12.8099C8.93876 13.3206 9.3185 14.6848 10.508 16.7462C11.8496 19.0697 12.8857 19.9879 13.366 19.8463L16.5005 18.8871C17.3589 18.6249 18.2778 18.638 19.1285 18.9244C19.9791 19.2108 20.7188 19.7561 21.2439 20.4841L23.1862 23.174C23.796 24.0186 24.0785 25.0559 23.9812 26.093C23.8838 27.1302 23.4133 28.0968 22.657 28.8132L20.9859 30.3943C20.4048 30.9448 19.6991 31.3465 18.9291 31.5651C18.1591 31.7838 17.3476 31.8129 16.564 31.65C11.9105 30.6815 7.74133 26.9343 4.02068 20.4907C0.298715 14.0431 -0.861672 8.55208 0.633467 4.03624C0.883745 3.28021 1.31233 2.59553 1.883 2.04005C2.45368 1.48458 3.14835 1.07463 3.91086 0.844846ZM4.4851 2.74486C4.02758 2.88267 3.60994 3.12858 3.26749 3.46182C2.92504 3.79506 2.66783 4.20583 2.51761 4.65943C1.22888 8.55076 2.27283 13.494 5.73943 19.4983C9.20339 25.4987 12.9584 28.8727 16.9675 29.7063C17.438 29.8041 17.9251 29.7866 18.3873 29.6553C18.8495 29.5239 19.273 29.2827 19.6217 28.9521L21.2915 27.3723C21.6989 26.9867 21.9524 26.4662 22.005 25.9077C22.0576 25.3492 21.9056 24.7906 21.5773 24.3357L19.635 21.6445C19.3523 21.2526 18.9541 20.959 18.4961 20.8047C18.0382 20.6505 17.5435 20.6434 17.0813 20.7844L13.9389 21.7463C12.2003 22.2637 10.5649 20.8149 8.78925 17.7373C7.28485 15.1333 6.76353 13.2518 7.40657 11.938C7.53095 11.6839 7.70031 11.455 7.90672 11.2619L10.295 9.03503C10.6488 8.70528 10.8905 8.273 10.9862 7.79886C11.0818 7.32473 11.0266 6.83255 10.8282 6.39141L9.4614 3.35218C9.23085 2.83915 8.82145 2.42757 8.30964 2.19432C7.79784 1.96106 7.21863 1.92206 6.68017 2.08462L4.48378 2.74619L4.4851 2.74486Z" fill={'currentColor'}/>
            </svg>
        ),
    },
];

export const Footer = () => {
    return (
        <footer
            style={{
                padding: "32px 0px",
                backgroundColor: "var(--gray-800)",
                color: "var(--gray-100)",
            }}
        >
            <div className="container px-3"
                 style={{ maxWidth: 1200, margin: "0 auto" }}
            >
                <div
                    style={{
                        gap:36,
                    }}
                    className="d-flex justify-content-between align-items-start flex-wrap justify-content-center align-items-center"
                >
                    {/* About */}
                        <div style={{ flex: "1 1 320px", minWidth: 0 }}>

                        <h2 className="fw-bolder mb-1" style={{
                            minWidth: 260,
                            paddingTop:40,
                            fontSize: 26}}>About</h2>
                        <p
                            className="mb-0"
                            style={{
                                textAlign:"justify",
                                color: "var(--gray-200)",
                            }}
                        >
                            Melodies is a website that has been created for over{" "}
                            <span
                                style={{
                                    color: "var(--accent-400)",
                                }}
                            >
                                5 year&apos;s
                            </span>{" "}
                            now and it is one of the most famous music player website&apos;s
                            in the world. In this website you can listen and download songs
                            for free. Also if you want no limitation you can buy our{" "}
                            <span
                                style={{
                                    color: "var(--accent-second-400)",
                                }}
                            >
                                premium pass&apos;s.
                            </span>
                        </p>
                    </div>

                    <div style={{flex:'1 1 auto'}} className={`d-flex justify-content-center gap-4`}>
                        <FooterNavColumn title="Melodies" links={navLinks.melodies} />
                        <FooterNavColumn title="Access" links={navLinks.access} />
                        <FooterNavColumn title="Contact" links={navLinks.contact} />
                    </div>

                    {/* Logo + Socials */}
                        <div style={{ flex: "0 1 242px", minWidth: 0,  alignSelf: "center", margin: '0 auto' }}>
                        <div className="mb-5 text-center">
                            <Logo className={`${styles['logo']}`} title={'Sonora'} />
                        </div>
                        <SocialLinks socials={socials} />
                    </div>
                </div>
            </div>
        </footer>
    );
};
