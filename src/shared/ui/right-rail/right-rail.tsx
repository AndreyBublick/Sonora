'use client';

import type { RightRailProps } from './right-rail.props';
import styles from './right-rail.module.scss';
import { useState } from 'react';
import {useRightRailTarget} from "@/src/shared/contexts";

export const RightRail = ({
                              className = '',
                              style,
                              width = 400,
                          }: RightRailProps) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const { setNode } = useRightRailTarget();

    return (
        <aside
            className={`${styles['rail']} ${isExpanded ? styles['rail-expanded'] : styles['rail-collapsed']} ${className}`}
            style={{ ...style, width: isExpanded ? width : undefined }}
        >
                <div className={`${styles['action-wrapper']}`}>
                        <button
                            type="button"
                            className={styles['toggle-btn']}
                            onClick={() => setIsExpanded((prev) => !prev)}
                            aria-label={isExpanded ? 'Hide aside bar' : 'Show aside bar'}
                        >
                                <svg style={{
                                    transform: isExpanded ? 'rotate(-0deg)' : 'rotate(180deg)',
                                }} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 4.5V19.5C1.5 19.8978 1.65804 20.2794 1.93934 20.5607C2.22064 20.842 2.60218 21 3 21H21C21.3978 21 21.7794 20.842 22.0607 20.5607C22.342 20.2794 22.5 19.8978 22.5 19.5V4.5C22.5 4.10218 22.342 3.72064 22.0607 3.43934C21.7794 3.15804 21.3978 3 21 3H3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5ZM16.5 4.5H21V19.5H16.5V4.5ZM3 4.5H15V19.5H3V12.75H10.6275L7.9425 15.4425L9 16.5L13.5 12L9 7.5L7.9425 8.5575L10.6275 11.25H3V4.5Z" fill="currentColor"/>
                                </svg>
                        </button>
                </div>


            <div className={styles['content']} ref={setNode} />
        </aside>
    );
};