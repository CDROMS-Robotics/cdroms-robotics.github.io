import * as React from "react";
import {useEffect, useMemo, useState} from "react";
import ReactMarkdown from 'react-markdown';
import "./Newsletters.scss"
import {remarkHighlight} from "../md-flavor.ts"
import remarkDirective from "remark-directive";
import {DEFAULT_ADMONITION_TYPES, remarkAdmonition} from "remark-admonition";
import remarkEmoji from "remark-emoji";
import {useParams} from "react-router-dom";
import NewsletterLi from "../components/NewsletterLi.tsx";
import remarkGfm from "remark-gfm";

interface NewsletterData {
    date: string;
    title: string;
    markdown: string;
}

const Newsletters: React.FC = () => {
    const {id} = useParams();
    const [data, setData] = useState<Record<string, NewsletterData>>({});
    const [md, setMd] = useState('');
    const [loadError, setLoadError] = useState<string | null>(null);

    useEffect(() => {
        fetch('/newsletters/index.json')
            .then(res => {
                if (!res.ok) throw new Error(`Failed to load newsletter index (${res.status})`);
                return res.json()
            })
            .then(setData)
            .catch(err => {
                console.error(err);
                setLoadError("Impossible de charger la liste des newsletters.");
            });
    }, []);

    useEffect(() => {
        if (id && data[id]) {
            fetch(`/newsletters/${id}/${data[id].markdown}`)
                .then(res => {
                    if (!res.ok) throw new Error(`Failed to load newsletter (${res.status})`);
                    return res.text()
                })
                .then(text => text.replace(/\\n/g, "\n"))
                .then(setMd)
                .catch(err => {
                    console.error(err);
                    setLoadError("Impossible de charger cette newsletter.");
                });
        }
    }, [id, data]);

    return useMemo(() => {
        if (loadError) {
            return (
                <div className="container col-12 col-md-6 mt-5">
                    <p className="text-danger">{loadError}</p>
                </div>
            );
        }
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
                        {Object.entries(data)
                            .filter(([_, d]) => new Date(d.date) <= new Date())
                            .map(([folder, data]) => (
                                <NewsletterLi
                                    key={folder}
                                    folder={folder}
                                    title={data.title}
                                    date={data.date}
                                />
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
                            remarkPlugins={[remarkDirective, [remarkAdmonition, {
                                defaultElement: 'div',
                                types: new Map([
                                    ...DEFAULT_ADMONITION_TYPES,
                                    ['info', {defaultLabel: 'Info'}],
                                ]),
                            }], remarkHighlight, remarkEmoji, remarkGfm]}
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
                                img({src, title, alt}) {
                                    const newSrc = src?.startsWith('http') ? src : `/newsletters/${id}/${src}`;
                                    const w = title?.split('=')[1]?.split('x')[0];
                                    return (
                                        <>
                                            <img src={newSrc} width={w} alt={alt ?? ''}
                                                 style={{maxWidth: '100%'}}/>
                                            <br/>
                                            <span className="m-0 fw-normal fst-italic">{alt}</span>
                                        </>
                                    );
                                },
                                a({href, children}) {
                                    const newSrc = href?.startsWith('http') || href?.startsWith('/newsletters') ? href : `/newsletters/${id}/${href}`;
                                    const SIZE_TOKEN = /^\d+x\d+$/;
                                    if (newSrc.endsWith('mp4') && !href?.startsWith("/newsletters") && children) {
                                        const words = children.toString().split(" ");
                                        const lastWord = words[words.length - 1];
                                        const hasSize = SIZE_TOKEN.test(lastWord);
                                        const size = hasSize ? lastWord : undefined;
                                        const alt = hasSize
                                            ? children.toString().replace(` ${size}`, '')
                                            : children.toString();
                                        const w = size?.split('x')[0];
                                        const h = size?.split('x')[1];
                                        return (
                                            <>
                        <span className="d-flex flex-column align-items-center m-0 p-0">
                          <video controls src={newSrc}
                                 style={{
                                     maxWidth: w ? `${w}px` : '100%',
                                     ...(h ? {maxHeight: `${h}px`} : {}),
                                 }}/>
                          <br/>
                          <span className="m-0 fst-italic">{alt}</span>
                        </span>
                                            </>
                                        );
                                    } else {
                                        return (
                                            <a href={href}>{children}</a>
                                        )
                                    }
                                },
                                table({children}) {
                                    return (
                                        <table className="table table-bordered table-striped">
                                            {children}
                                        </table>
                                    );
                                },
                            }}>
                            {md}
                        </ReactMarkdown>
                    </div>
                </div>
            )
        }
    }, [id, data, md, loadError])
}

export default Newsletters