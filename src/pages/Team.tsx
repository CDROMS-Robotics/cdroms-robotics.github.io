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
        // TODO do text and images
        return [
            {
                firstname: "Claire", lastname: "de Dinechin",
                image: "/restricted-assets/cdroms/members/sk.png",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor"
                    + "sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, conelit. Lorem ipsum"
                    + "dolor sit amet, conelit. Lorem ipsum dolor sit amet, conelit.et, conelit.",
                participation: [ParticipationType.NONE, ParticipationType.NONE, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.NONE, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.NONE, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.NONE, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.SENIOR, ParticipationType.SENIOR]
            },
            {
                firstname: "Rémi", lastname: "Weidle",
                image: "/restricted-assets/cdroms/members/sk.png",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor"
                    + "sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, conelit. Lorem ipsum"
                    + "dolor sit amet, conelit. Lorem ipsum dolor sit amet, conelit.et, conelit.",
                participation: [ParticipationType.JUNIOR, ParticipationType.JUNIOR, ParticipationType.JUNIOR,
                    ParticipationType.JUNIOR, ParticipationType.JUNIOR, ParticipationType.JUNIOR,
                    ParticipationType.JUNIOR, ParticipationType.NONE, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.NONE, ParticipationType.SENIOR,
                    ParticipationType.SENIOR, ParticipationType.SENIOR, ParticipationType.SENIOR]
            },
            {
                firstname: "Ousmane", lastname: "Thiongane",
                image: "/restricted-assets/cdroms/members/sk.png",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor"
                    + "sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, conelit. Lorem ipsum"
                    + "dolor sit amet, conelit. Lorem ipsum dolor sit amet, conelit.et, conelit.",
                participation: [ParticipationType.NONE, ParticipationType.NONE, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.NONE, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.NONE, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.NONE, ParticipationType.SENIOR,
                    ParticipationType.SENIOR, ParticipationType.SENIOR, ParticipationType.SENIOR]
            },
            {
                firstname: "Martin", lastname: "Desnos",
                image: "/restricted-assets/cdroms/members/sk.png",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor"
                    + "sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, conelit. Lorem ipsum"
                    + "dolor sit amet, conelit. Lorem ipsum dolor sit amet, conelit.et, conelit.",
                participation: [ParticipationType.JUNIOR, ParticipationType.JUNIOR, ParticipationType.JUNIOR,
                    ParticipationType.JUNIOR, ParticipationType.JUNIOR, ParticipationType.JUNIOR,
                    ParticipationType.JUNIOR, ParticipationType.NONE, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.NONE, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.SENIOR, ParticipationType.SENIOR]
            },
            {
                firstname: "Sébastien", lastname: "Kerbourc'h",
                image: "/restricted-assets/cdroms/members/sk.png",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor"
                    + "sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, conelit. Lorem ipsum"
                    + "dolor sit amet, conelit. Lorem ipsum dolor sit amet, conelit.et, conelit.",
                participation: [ParticipationType.JUNIOR, ParticipationType.JUNIOR, ParticipationType.JUNIOR,
                    ParticipationType.JUNIOR, ParticipationType.JUNIOR, ParticipationType.JUNIOR,
                    ParticipationType.JUNIOR, ParticipationType.NONE, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.SENIOR, ParticipationType.NONE,
                    ParticipationType.NONE, ParticipationType.SENIOR, ParticipationType.SENIOR]
            },
            {
                firstname: "Jan", lastname: "Kozakiewicz",
                image: "/restricted-assets/cdroms/members/sk.png",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor"
                    + "sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, conelit. Lorem ipsum"
                    + "dolor sit amet, conelit. Lorem ipsum dolor sit amet, conelit.et, conelit.",
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
                            {idx < members.length - 1 && <hr className="border border-2 w-25 m-auto hr"/>}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Team