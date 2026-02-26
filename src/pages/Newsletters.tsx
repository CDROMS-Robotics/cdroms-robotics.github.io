import * as React from "react";
import {useEffect, useMemo, useState} from "react";
import ReactMarkdown from 'react-markdown';
import "./Newsletters.scss"
import {remarkHighlight} from "../md-flavor.ts"
import {useParams} from "react-router-dom";
import NewsletterLi from "../components/NewsletterLi.tsx";

interface NewsletterData {
    date: string;
    title: string;
    markdown: string;
}

const Newsletters: React.FC = () => {
    const {id} = useParams();
    const [data, setData] = useState<Record<string, NewsletterData>>({});
    const [md, setMd] = useState('');

    useEffect(() => {
        fetch('/newsletters/index.json')
            .then(res => res.json())
            .then(setData);
    }, []);

    useEffect(() => {
        if (id && data[id]) {
            fetch(`/newsletters/${id}/${data[id].markdown}`)
                .then(res => res.text())
                .then(setMd);
        }
    }, [id, data]);

    return useMemo(() => {
        if (!id) {
            return <>
                <div className="container col-12 col-md-6 mt-5" style={{textAlign: "justify"}}>
                    Pour vivre cette aventure avec nos proches, nous avons, l’an passé, partagé l’avancement du projet à
                    travers des newsletters. Depuis 2026, nous avons décidé de les rendre publiques. Les newsletters
                    vulgarisent les différentes étapes de construction des robots : qu’il s’agisse d’un choix d’actions
                    à réaliser durant la Coupe, la conception de pièces mécaniques ou encore les tests de code des
                    robots, une de nos newsletters abordera (probablement) le sujet !
                </div>
                <div className="container col-12 col-md-3 mt-3 mb-5" style={{width: "30%"}}>
                    <h3 className="m-0 mb-3">
                        Les newsletters de cette année :
                    </h3>
                    <ul className="m-0 d-flex flex-column gap-1">
                        {Object.entries(data).map(([folder, data]) => (
                            <NewsletterLi key={folder} folder={folder} title={data.title} date={data.date}/>
                        ))}
                    </ul>
                </div>
            </>;
        } else {
            return (<div className="container col-12 col-md-6">
                    <div className="d-flex justify-content-end">
                        <a href="/#/newsletters/">Retour à la liste</a>
                    </div>
                    <div style={{textAlign: "justify"}}>
                        <ReactMarkdown
                            remarkPlugins={[remarkHighlight]}
                            components={{
                                p({node, children, ...props}) {
                                    const hasImg = node?.children?.some(
                                        child => child.type === 'element' && child.tagName == 'img'
                                    );
                                    return (
                                        <p className={hasImg ? 'md-center-img' : undefined} {...props}>
                                            {children}
                                        </p>
                                    );
                                },
                                img({src, title, alt, ...props}) {
                                    const newSrc = src?.startsWith('http') ? src : `/newsletters/${id}/${src}`;
                                    const w = title?.split('=')[1].split('x')[0];
                                    // const h = title?.split('=')[1].split('x')[1];
                                    return (
                                        <>
                                            <img src={newSrc} width={w} {...props}
                                                 style={{maxWidth: '100%'}}/>
                                            <br/>
                                            <span className="m-0 fst-italic">{alt}</span>
                                        </>
                                    );
                                },
                            }}>
                            {md}
                        </ReactMarkdown>
                    </div>
                </div>
            )
        }
    }, [id, data, md])
}

export default Newsletters