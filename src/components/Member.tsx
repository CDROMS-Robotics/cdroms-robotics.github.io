import {cdfr_names, ParticipationType} from "../data.ts";


interface MemberProps {
    image: string,
    firstname: string,
    lastname: string,
    description: string,
    participation: ParticipationType[],
    inverted: boolean,
}

const Member: React.FC<MemberProps> = ({
                                           image,
                                           firstname,
                                           lastname,
                                           description,
                                           participation,
                                           inverted
                                       }: MemberProps) => {
    return (
        <div className={`d-flex gap-3 ${inverted ? "flex-row-reverse" : ""}`}>
            <img height="250px" src={image} alt={`${firstname} ${lastname}`}/>
            <div className="d-flex flex-column w-100 gap-1">
                <div className={`d-flex gap-3 ${inverted ? "flex-row-reverse" : ""}`}>
                    <div className={`${inverted ? "text-end" : ""}`} style={{marginLeft: "auto"}}>
                        <h3 className="fs-1 mb-0">{firstname}<br/>{lastname}</h3>
                    </div>
                    <p className="m-0 w-75 fs-5" style={{textAlign: "justify"}}>{description}</p>
                </div>
                <div className="d-flex gap-3" style={{minHeight: '150px', maxHeight: '175px'}}>
                    {!inverted &&
                        <div className="d-flex align-items-center"><img src="/assets/cd.png" height={125} alt="CD"/>
                        </div>}
                    <div className="d-flex column-gap-2 row-gap-1 flex-wrap flex-column w-100">
                        {
                            participation.map((type, index) => {
                                    if (type === ParticipationType.JUNIOR) {
                                        return (
                                            <div className="d-flex gap-1 align-items-center" key={cdfr_names[index][0]}>
                                                <img src="/assets/star.png" width="18px" alt="Star"
                                                     title="CdFr Junior"/>
                                                <p className="m-0">{cdfr_names[index][1]} - {cdfr_names[index][0]}</p>
                                            </div>
                                        )
                                    } else if (type === ParticipationType.SENIOR) {
                                        return (
                                            <div className="d-flex gap-1 align-items-center" key={cdfr_names[index][0]}>
                                                <img src="/assets/2stars.png" width="18px" alt="Star"
                                                     title={cdfr_names[index][0] > 2024 ? "CdFr Senior avec CDROMS" : "CdFr Senior"}/>
                                                <p className="m-0">{cdfr_names[index][1]} - {cdfr_names[index][0]}</p>
                                            </div>
                                        )
                                    }
                                }
                            )
                        }
                    </div>
                    {inverted &&
                        <div className="d-flex align-items-center"><img src="/assets/cd.png" height={125} alt="CD"/>
                        </div>}
                </div>
            </div>
        </div>
    )
}


export default Member;