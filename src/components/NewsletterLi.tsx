import * as React from "react";

interface NewsletterLiProps {
    date: string;
    title: string;
    folder: string;
}

const NewsletterLi: React.FC<NewsletterLiProps> = ({
                                    date,
                                    title,
                                    folder
                                }: NewsletterLiProps) => {
    return <>
        <li>
            <a className="d-flex gap-3" href={`newsletters/${folder}`}>
                <strong className="">{title}</strong>
                <p className="m-0">({date})</p>
            </a>
        </li>
    </>
}

export default NewsletterLi