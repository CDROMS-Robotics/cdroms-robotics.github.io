import * as React from "react";
import {useMemo} from "react";
import Member from "../components/Member.tsx";
import {ParticipationType} from "../data.ts";

interface People {
    firstname: string;
    lastname: string;
    image: string;
    description: string;
    participation: ParticipationType[];
}

const Team: React.FC = () => {
    const members: People[] = useMemo(() => {
        return [
            {
                firstname: "Claire", lastname: "de Dinechin",
                image: "/restricted-assets/cdroms/members/cdd.png",
                description: "Si vous l’appelez pour réaliser un système mécanique, soyez sûr.es de deux choses :" +
                    " ça marchera à merveille et elle aura dissimulé un dinosaure quelque part. Elle est " +
                    "aussi l’une des plumes derrière nos newsletters.",
                participation: [ParticipationType.NONE, ParticipationType.NONE, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.NONE, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.NONE, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.NONE, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.SENIOR, ParticipationType.SENIOR]
            },
            {
                firstname: "Rémi", lastname: "Weidle",
                image: "/restricted-assets/cdroms/members/rw.png",
                description: "Ce qu’il aime, c’est de la “belle électronique” : ses circuits sont aussi propres que " +
                    "ses schémas sont précis. Et ça ne sent pas encore le condensateur grillé, alors on ne" +
                    " peut rien dire !",
                participation: [ParticipationType.JUNIOR, ParticipationType.JUNIOR, ParticipationType.JUNIOR,
                    ParticipationType.JUNIOR, ParticipationType.JUNIOR, ParticipationType.JUNIOR,
                    ParticipationType.JUNIOR, ParticipationType.NONE, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.NONE, ParticipationType.SENIOR,
                    ParticipationType.SENIOR, ParticipationType.SENIOR, ParticipationType.SENIOR]
            },
            {
                firstname: "Ousmane", lastname: "Thiongane",
                image: "/restricted-assets/cdroms/members/ot.png",
                description: "Toujours partant pour donner un coup de main, il travaille surtout sur le code de nos " +
                    "petits PAMIs. Il est aussi l’artiste derrière notre logo et nos affiches. On raconte qu’il " +
                    "possède une résistance infaillible aux nuits blanches.",
                participation: [ParticipationType.NONE, ParticipationType.NONE, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.NONE, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.NONE, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.NONE, ParticipationType.SENIOR,
                    ParticipationType.SENIOR, ParticipationType.SENIOR, ParticipationType.SENIOR]
            },
            {
                firstname: "Martin", lastname: "Desnos",
                image: "/restricted-assets/cdroms/members/md.png",
                description: "Vous cherchez un PAMI pliable, des charnières pivotantes ou tout autre système " +
                    "surprenant ? C’est à lui qu’il faut faire appel ! Il a aussi réalisé la mécanique de " +
                    "notre gros PAMI (en version non-pliable).",
                participation: [ParticipationType.JUNIOR, ParticipationType.JUNIOR, ParticipationType.JUNIOR,
                    ParticipationType.JUNIOR, ParticipationType.JUNIOR, ParticipationType.JUNIOR,
                    ParticipationType.JUNIOR, ParticipationType.NONE, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.NONE, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.SENIOR, ParticipationType.SENIOR]
            },
            {
                firstname: "Sébastien", lastname: "Kerbourc'h",
                image: "/restricted-assets/cdroms/members/sk.png",
                description: "Responsable du code du robot et PAMI principal, il transforme " +
                    "le chaos en stratégies qui font avancer nos machines.",
                participation: [ParticipationType.JUNIOR, ParticipationType.JUNIOR, ParticipationType.JUNIOR,
                    ParticipationType.JUNIOR, ParticipationType.JUNIOR, ParticipationType.JUNIOR,
                    ParticipationType.JUNIOR, ParticipationType.NONE, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.SENIOR, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.SENIOR, ParticipationType.SENIOR]
            },
            {
                firstname: "Jan", lastname: "Kozakiewicz",
                image: "/restricted-assets/cdroms/members/jk.png",
                description: "Calme mais efficace, il contribue à la conception mécanique des robots depuis les " +
                    "Pays-Bas. Comme quoi, la distance n'est pas un défi pour imaginer des pièces en tout genre.",
                participation: [ParticipationType.NONE, ParticipationType.NONE, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.NONE, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.NONE, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.NONE, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.NONE, ParticipationType.SENIOR]
            }
        ]
    }, [])
    return (
        <div className="container d-flex flex-column gap-5 mt-5 mb-5">
            {
                members.map((p: People, idx: number) => {
                    return (
                        <div key={`${p.firstname} ${p.lastname}`}>
                            <Member image={p.image} firstname={p.firstname} lastname={p.lastname}
                                    description={p.description}
                                    participation={p.participation}
                                    inverted={idx % 2 == 1}/>
                            <br/>
                            {idx < members.length - 1 && <hr className="border border-1 w-75 m-auto hr"/>}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Team