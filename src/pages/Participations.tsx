import * as React from "react";
import Eurobot from "../components/Eurobot.tsx";

const Participations: React.FC = () => {
    // TODO text
    return (
        <div className="container d-flex flex-column gap-5 mt-auto mb-auto">
            <Eurobot
                year={2026}
                description="Loresit amedolor sit amet, consectetur adipissit amem ipsum dolor
                    sit amet, cosit amepiscing etetur adipislit. Lorem ipsum dolor sit sit ameit. Lorem ipsum
                    dolor sit amet, coneltetur adipisisit amepsum dolor sit ametetur adipist, conelit.et, conelit."
                logo="/restricted-assets/cdfr/2026.png"
                points={[undefined, undefined, undefined, undefined, undefined]}
                result={0}
                leaderboard={0}
                partners={[]}
            />
            <Eurobot
                year={2025}
                description="Loresit amedolor sit amet, consectetur adipissit amem ipsum dolor
                    sit amet, cosit amepiscing etetur adipislit. Lorem ipsum dolor sit sit ameit. Lorem ipsum
                    dolor sit amet, coneltetur adipisisit amepsum dolor sit ametetur adipist, conelit.et, conelit."
                logo="/restricted-assets/cdfr/2025.png"
                points={[null, 56, 71, 60, 75]}
                result={45}
                leaderboard={115}
                partners={[
                    {
                        logo: "/restricted-assets/partners/savants_fous.png",
                        name: "Les Savants Fous",
                        url: "https://www.lessavantsfous.fr/contact-paris.html"
                    },
                    {
                        logo: "/restricted-assets/partners/vanves.png",
                        name: "Mairie Vanves",
                        url: "https://www.vanves.fr/"
                    }
                ]}
            />
        </div>
    )
}

export default Participations