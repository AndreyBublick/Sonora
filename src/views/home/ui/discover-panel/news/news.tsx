import type {NewsProps} from "./news.props";
import {NewsCard, useNews} from "@/src/entities/news";

export const News = ({}: NewsProps) => {

    const {data:items=[]} = useNews();

    return (
        <div className="d-flex flex-column gap-3">
            {items.map((item) => (
                <NewsCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    subTitle={item.subTitle}
                    textBody={item.textBody}
                    image={item.image}
                />
            ))}
        </div>
    );

};