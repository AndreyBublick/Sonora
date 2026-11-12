import {useAuthors} from "@/src/entities/author";
import {AuthorSection} from "./ui/author-section";
import {PopularAuthorsProps} from "./popular-authors.props";

export const PopularAuthors = ({}:PopularAuthorsProps) => {
    const {data: items = []} = useAuthors();

    return (
        <div className="d-flex flex-column gap-4">
            {items.map((category) => (
                <AuthorSection
                    key={category.title}
                    title={category.title}
                    authors={category.authors}
                />
            ))}
        </div>
    );
};
