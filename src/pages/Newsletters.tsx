import * as React from "react";
import {useEffect, useMemo, useState} from "react";
import ReactMarkdown from 'react-markdown';
import "./Newsletters.scss"
import {isImageGalleryTable, remarkHighlight} from "../md-flavor.ts"
import remarkDirective from "remark-directive";
import {DEFAULT_ADMONITION_TYPES, remarkAdmonition} from "remark-admonition";
import remarkEmoji from "remark-emoji";
import {useParams} from "react-router-dom";
import NewsletterLi from "../components/NewsletterLi.tsx";
import remarkGfm from "remark-gfm";

interface NewsletterData {
    title: string;
    markdown: string;
}

const Newsletters: React.FC = () => {
    const currentCDFRYear = useMemo(() => {
        const y = new Date().getFullYear();
        return new Date().getMonth() > 7 ? y + 1 : y;
    }, [])
    const {id} = useParams();
    const folder = useMemo(() => {
        if (id) {
            const year = parseInt(id.split("-")[0])
            const date = id.split("-").slice(1).join("-");
            return `${year - 2000}-${date.replaceAll("-", "")}`
        } else {
            return undefined
        }
    }, [id])
    const [data, setData] = useState<Record<string, Record<string, NewsletterData>>>({});
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
        if (id && folder) {
            const year = parseInt(id.split("-")[0])
            const date = id.split("-").slice(1).join("-");
            const folder = `${year - 2000}-${date.replaceAll("-", "")}`
            if (data[year] && data[year][date]) {
                fetch(`/newsletters/${folder}/${data[year][date].markdown}`)
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
        }
    }, [id, folder, data]);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: "instant" as ScrollBehavior});
    }, [id]);

    const navigation = useMemo(() => {
        if (!id) return undefined;
        const year = parseInt(id.split("-")[0]);
        const date = id.split("-").slice(1).join("-");
        const yearData = data[year];
        if (!yearData) return undefined;

        const sorted = Object.entries(yearData)
            .filter(([d]) => new Date(d) <= new Date())
            .sort(([a], [b]) => new Date(a).getTime() - new Date(b).getTime());
        const index = sorted.findIndex(([d]) => d === date);
        if (index === -1) return undefined;

        const prev = index > 0 ? sorted[index - 1] : undefined;
        const next = index < sorted.length - 1 ? sorted[index + 1] : undefined;
        return {
            prev: prev ? {folder: `${year}-${prev[0]}`, title: prev[1].title} : undefined,
            next: next ? {folder: `${year}-${next[0]}`, title: next[1].title} : undefined,
        };
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
                <div className="container col-12 col-md-3 mt-3 mb-5" style={{width: "33%"}}>
                    {
                        Object.entries(data)
                            .sort(([a,], [b,]) => parseInt(b) - parseInt(a))
                            .map(([cdfrYear, data]) => (
                                <>
                                    <h3 className={`m-0 mb-3 ${cdfrYear == `${currentCDFRYear}` ? '' : 'mt-4'}`}>
                                        {cdfrYear == `${currentCDFRYear}` ?
                                            "Les newsletters de cette année :" :
                                            `Coupe de France de Robotique ${cdfrYear}`}
                                    </h3>
                                    <ul className="m-0 d-flex flex-column gap-1">
                                        {Object.entries(data)
                                            .filter(([date, _]) => new Date(date) <= new Date())
                                            .sort(([a,], [b,]) => new Date(b).getTime() - new Date(a).getTime())
                                            .map(([date, data]) => (
                                                <NewsletterLi
                                                    key={`${cdfrYear}-${date}`}
                                                    folder={`${cdfrYear}-${date}`}
                                                    title={data.title}
                                                    date={date}
                                                />
                                            ))}
                                    </ul>
                                </>
                            ))
                    }
                </div>
            </>;
        } else {
            return (<div className="container col-12 col-md-6">
                    <div className="d-flex justify-content-end">
                        <a href="/#/newsletters/" onClick={() => setMd('')}>Retour à la liste</a>
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
                                    const newSrc = src?.startsWith('http') ? src : `/newsletters/${folder}/${src}`;
                                    const w = title?.split('=')[1]?.split('x')[0];
                                    return (
                                        <>
                                            <img src={newSrc}
                                                 width={w}
                                                 alt={alt ?? ''}
                                                 style={{
                                                     maxWidth: '100%',
                                                     cursor: "pointer",
                                                     transition: "transform 0.2s ease",
                                                     borderRadius: "4px",
                                                     position: "relative",
                                                 }}
                                                 onMouseEnter={e => {
                                                     e.currentTarget.style.transform = "scale(1.5)";
                                                     e.currentTarget.style.zIndex = "1000";
                                                 }}
                                                 onMouseLeave={e => {
                                                     e.currentTarget.style.transform = "scale(1)";
                                                     e.currentTarget.style.zIndex = "1";
                                                 }}/>
                                            <br/>
                                            <span className="m-0 fw-normal fst-italic">{alt}</span>
                                        </>
                                    );
                                },
                                a({href, children}) {
                                    const newSrc = href?.startsWith('http') || href?.startsWith('/newsletters') ? href : `/newsletters/${folder}/${href}`;
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
                                table({node, children}) {
                                    const gallery = node ? isImageGalleryTable(node) : false;
                                    return (
                                        <table
                                            className={gallery ? "md-image-gallery-table" : "table table-bordered table-striped"}>
                                            {children}
                                        </table>
                                    );
                                },
                            }}>
                            {md}
                        </ReactMarkdown>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-4 mb-3 gap-2">
                        <div className="text-start" style={{flex: 1}}>
                            {navigation?.prev && (
                                <a href={`/#/newsletters/${navigation.prev.folder}`}>
                                    &laquo; {navigation.prev.title}
                                </a>
                            )}
                        </div>
                        <div className="text-center">
                            <a href="/#/newsletters/" onClick={() => setMd('')}>Retour à la liste</a>
                        </div>
                        <div className="text-end" style={{flex: 1}}>
                            {navigation?.next && (
                                <a href={`/#/newsletters/${navigation.next.folder}`}>
                                    {navigation.next.title} &raquo;
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )
        }
    }, [id, data, md, loadError, folder, currentCDFRYear, navigation])
}

export default Newsletters