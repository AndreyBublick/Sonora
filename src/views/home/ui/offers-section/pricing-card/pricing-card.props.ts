export type PricingCardProps = {
    pricing: Pricing;
    isPrimary?: boolean;
    onPurchase?: (planId: string) => void;
    className?: string;
}
export type Pricing = {
    id: string;
    title: string;
    primary?:boolean;
    description: string;
    price: number;
    priceUnit?: string;
    actionText: string;
    features: PricingFeature[];
};
type PricingFeature = {
    label: string;
};