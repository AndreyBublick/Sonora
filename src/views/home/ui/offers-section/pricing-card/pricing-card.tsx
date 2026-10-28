import type {PricingCardProps} from "./pricing-card.props";
import React from "react";
import {clsx} from "clsx";
import {CheckCircledIcon} from "@radix-ui/react-icons";
import styles from "./pricing-card.module.scss";
import {UiButton} from "@/src/shared/ui";

export const PricingCard = ({
                         pricing,
                         isPrimary = false,
                         onPurchase,
                         className,
                     }: PricingCardProps) => {
    const priceUnit = pricing.priceUnit ?? "/USDT";

    return (
        <article
            className={clsx(
                "d-flex flex-column h-100 p-4 rounded-3 position-relative",
                isPrimary && styles["gradient-outline-primary"],
                className
            )}
            style={{
                minHeight: 484,
                backgroundColor: isPrimary ? "transparent" : "var(--gray-800)",
                backgroundImage: isPrimary
                    ? "linear-gradient(180deg, #4B0C39 0%, #330A28 100%)"
                    : "none",
            }}
        >
            <div className="text-center mb-4">
                <h3 className="fw-bold mb-3 fs-2">
                    {pricing.title}
                </h3>
                <p className={`mb-0`} style={{color:'var(--gray-200)'}}>
                    {pricing.description}
                </p>
            </div>

            <ul className="list-unstyled d-flex flex-column gap-3 pb-4">
                {pricing.features.map((feature, idx) => (
                    <li key={idx} className="d-flex align-items-center gap-3" style={{color:'var(--gray-200)'}}>
                        <CheckCircledIcon width={20} height={20} />
                        <span>
                            {feature.label}
                        </span>
                    </li>
                ))}
            </ul>

            <div className="mt-auto">
                <div className="d-flex justify-content-center align-items-end mb-4">
                    <span className="fw-bold fs-2" style={{lineHeight: 1 }}>
                        {pricing.price}$
                    </span>
                    <span
                        className="fw-medium"
                        style={{
                            color:'var(--gray-300)' ,
                        }}
                    >
                        {priceUnit}
                    </span>
                </div>

                <UiButton
                    type="button"
                    onClick={() => onPurchase?.(pricing.id)}
                    className="w-100 fw-medium"
                    style={{padding:'10px 0'}}
                >
                    {pricing.actionText}
                </UiButton>
            </div>
        </article>
    );
};
