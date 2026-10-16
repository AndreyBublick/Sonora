'use client'
import type {HeroSectionProps} from "./hero-section.props";
import Hero from '@assets/images/hero.avif';
import {UiButton} from "@/src/shared/ui";
import {useMediaQuery} from "@/src/shared/lib";


export const HeroSection = ({}: HeroSectionProps) => {

    const isMobile = useMediaQuery({maxWidth:992})
    
    return (
        <section className={`rounded-4 position-relative d-flex align-items-center`} style={{
            marginTop:'-64px',
            minHeight:'31.00vw',
            overflow:'hidden',
            marginBottom: isMobile ? 40 : 64,
        }}>
            <div className={'position-absolute top-0 start-0 w-100 h-100 '} style={{
            transform:'scaleX(-1)',
            background: `
      linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%),
      linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%),
      url(${Hero.src}) center / cover no-repeat
    `,
        }} />

        <div className={`position-relative d-flex`} style={{
            height:'100%',
            padding:isMobile ? '80px 0px 20px' : '100px 0px 40px',
        }}>
            <div className={`p-4`} style={{
                maxWidth: isMobile ? '65dvw' : '30dvw',

            }}>
                <h1 className={'fs-1 fw-bolder'} style={{
                    lineHeight:1.75,
                    marginBottom:12,
                }}>
                    All the <span style={{color:'var(--accent-400)'}}>{'Best Songs'} <br />  </span>
                    in One Place</h1>


                <p className={`fs-6`} style={{
                    marginBottom:24,
                    textAlign: 'justify',
                }}>On our website, you can access an amazing collection of popular and new songs. Stream your favorite tracks in high quality and enjoy without interruptions. Whatever your taste in music, we have it all for you!</p>
                <div className={`d-flex gap-4 px-3`}>
                    <UiButton className={'w-100 py-2 px-3 flex-1'}>Discover Now</UiButton>
                    <UiButton variant={'outline-secondary'} className={'w-100 flex-1'}>Create Playlist</UiButton>
                </div>
            </div>
        </div>
        </section>
    );
};