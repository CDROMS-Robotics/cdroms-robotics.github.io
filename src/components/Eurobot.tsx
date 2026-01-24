interface EurobotProps {
    year: number;
    description: string,
    logo: string,
    points: (undefined | null | number)[],
    result: (undefined | number),
    leaderboard: (undefined | number),
    partners: {
        logo: string,
        name: string,
        url: string,
    }[]
}

import {MdOutlineLeaderboard} from "react-icons/md";
import {CiSquareQuestion} from "react-icons/ci";
import {GoTrophy} from "react-icons/go";

const Eurobot: React.FC<EurobotProps> = ({
                                             year,
                                             description,
                                             logo,
                                             points,
                                             result,
                                             leaderboard,
                                             partners
                                         }: EurobotProps) => {
    return (
        <div className="d-flex align-items-center">
            <img src={logo} height={250}/>
            <div className="d-flex flex-column gap-2 w-75" style={{marginLeft: "auto"}}>
                <h4>Coupe de France de robotique {year}</h4>
                <p className="m-0">{description}</p>
                <div className="d-flex flex-row gap-3">
                    {points.map((p, idx) => {
                        if (p) {
                            return (
                                <div className="d-flex align-items-center gap-2">
                                    <MdOutlineLeaderboard size={24}/>
                                    <p className="m-0">Serie {idx + 1}: {p}</p>
                                </div>)
                        } else if (p === null) {
                            return (
                                <div className="d-flex align-items-center gap-2">
                                    <MdOutlineLeaderboard size={24}/>
                                    <p className="m-0">Serie {idx + 1}: X</p>
                                </div>)
                        } else if (p === undefined) {
                            return (
                                <div className="d-flex align-items-center gap-2">
                                    <MdOutlineLeaderboard size={24}/>
                                    <p className="m-0 d-flex align-items-center">Serie {idx + 1}: <CiSquareQuestion
                                        size={24}/></p>
                                </div>)
                        }
                    })}
                    <div className="d-flex align-items-center gap-2">
                        <GoTrophy size={24} color="#e0a933"/>
                        <p className="m-0 d-flex align-items-center">
                            <strong className="d-flex align-items-center">{result ? result :
                                <CiSquareQuestion size={24}/>}</strong>/{leaderboard ? leaderboard :
                            <CiSquareQuestion size={24}/>}
                        </p>
                    </div>
                </div>
                {
                    partners.length > 0 && <div>
                        <h5 className="mb-2 mt-2">Nos partenaires</h5>
                        <div className="d-flex flex-row gap-3">
                            {
                                partners.map((partner) => (
                                    <a href={partner.url} target="_blank" rel="noopener noreferrer" key={partner.url}>
                                        <div className="d-flex flex-column align-items-center gap-2">
                                            <img height={75} src={partner.logo}/>
                                            <p className="m-0"
                                               style={{color: "#4e4852", fontSize: "12px"}}>{partner.name}</p>
                                        </div>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}


export default Eurobot;