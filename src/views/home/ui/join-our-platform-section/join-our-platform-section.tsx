"use client";

import React from "react";
import type {JoinOurPlatformSectionProps} from "./join-our-platform-section.props";
import {JoinForm} from "./join-form";
import {useAuth} from "@/src/entities/session";
import {SectionTitle} from "@/src/shared/ui";
import Back from "@assets/images/footer/placeholder-back.png";
import Front from "@assets/images/footer/placeholder-front.png";
import Image from "next/image";



export const JoinOurPlatformSection = ({}: JoinOurPlatformSectionProps) => {

    const {isAuth} = useAuth()

    if(isAuth){
        return <></>
    }

    return (
        <section className="py-5 position-relative" style={{ minHeight: "640px" }}>
            <div className="container px-0">
                <div className="row g-5 align-items-center justify-content-between">

                    <div className="col-12 col-lg-6 mt-0" style={{maxWidth:'40%'}}>
                        <SectionTitle  className="mb-3 p-0 fs-1">
                            Join Our Platform
                        </SectionTitle>
                        <p className="fs-5" style={{
                            textAlign:'justify'
                        }}>
                            You can become one of the <span style={{ color: "var(--accent-400)" }}>members</span> of our platform by just providing some necessary information. If you already have an account, you can simply log in used the <span style={{ color: "var(--accent-second-400)"}}>form on the right</span>.
                        </p>
                    </div>

                    <div className="col-12 col-lg-6 mt-0" style={{width:524}}>
                        <div
                            className="py-3 px-4 rounded-3"
                            style={{ backgroundColor: "var(--gray-700)" }}
                        >
                                <h3
                                    className="fw-bold fs-4 text-center"
                                    style={{
                                        marginBottom:20,
                                        color:"var(--accent-400)"
                                    }}
                                >
                                    Sign Up & Login
                                </h3>

                                <JoinForm  />
                        </div>
                    </div>
                </div>
            <Image src={Back} className={'position-absolute'} style={{top:'calc(100% - 120px)', right:'-64px'}} alt="placeholder-back" />
            <Image src={Front} className={'position-absolute'} style={{top:'calc(100% - 82px)', right:'-64px'}} alt="placeholder-front" />
            </div>
        </section>
    );
};