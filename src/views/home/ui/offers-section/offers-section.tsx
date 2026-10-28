"use client";
import React from "react";
import {SectionTitle} from "@/src/shared/ui/section-title";
import {PricingCard ,Pricing} from "./pricing-card";
import {toast} from "sonner";


const offers: Pricing[] = [
    {
        id: "pro",
        title: "Pro",
        description: "Maximum features for true music lovers. Lossless audio and family access.",
        price: 599,
        actionText: "Get Pro",
        primary:true,
        features: [
            { label: "Everything in Basic" },
            { label: "Hi-Fi lossless audio" },
            { label: "Family subscription (up to 5 people)" },
            { label: "Exclusive premieres and podcasts" },
            { label: "Discounts on concerts and merch" },
        ],
    },
    {
        id: "basic",
        title: "Basic",
        description: "Ad-free music with offline listening and downloads.",
        price: 199,
        actionText: "Get Basic",
        features: [
            { label: "Millions of tracks ad-free" },
            { label: "Offline music downloads" },
            { label: "High-quality audio" },
            { label: "Unlimited skips" },
        ],
    },
    {
        id: "free",
        title: "Free",
        description: "Free access to a huge music library. Listen to your favorite tracks right now.",
        price: 0,
        actionText: "Listen for free",
        features: [
            { label: "Access to the full library" },
            { label: "Standard audio quality" },
        ],
    },
];

export const OffersSection = () => {
    const onPurchaseHandler = (planId: string) => {
        toast.success(`got ${planId} successful`)
    };

    return (
        <section className={``} style={{marginBottom:64}}>
            <div className="container px-0">
                <SectionTitle className="text-center mb-4">
                    Our
                    <SectionTitle.Label>
                        Premium
                    </SectionTitle.Label>{" "}
                    Offers
                </SectionTitle>

                <div  style={{
                }} className="row g-4 justify-content-center">
                    {offers.map((pricing) => (
                        <div className="col-12 col-md-6 col-lg-4" key={pricing.id}>
                            <PricingCard
                                pricing={pricing}
                                isPrimary={pricing.primary}
                                onPurchase={onPurchaseHandler}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};