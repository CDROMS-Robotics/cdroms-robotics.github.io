import * as React from "react";
import Eurobot from "../components/Eurobot.tsx";

const Participations: React.FC = () => {
    return (
        <div className="container d-flex flex-column gap-5 mt-auto mb-auto">
            <Eurobot
                year={2026}
                description="Pour notre seconde année, l’objectif est d’apporter quelques améliorations au robot
                principal et au PAMI principal. Les petits PAMIs prennent un grand coup de neuf avec une architecture
                entièrement revue."
                logo="/restricted-assets/cdfr/2026.png"
                points={[undefined, undefined, undefined, undefined, undefined]}
                result={0}
                leaderboard={0}
                partners={[
                    {
                        logo: "/restricted-assets/partners/savants_fous.png",
                        name: "Les Savants Fous",
                        url: "https://www.lessavantsfous.fr/contact-paris.html"
                    }
                ]}
            />
            <Eurobot
                year={2025}
                description="Pour notre première participation, l’objectif était de construire une base roulante
                robuste, qui pourrait être réutilisée d’une année à l’autre. C’est chose faite : le robot principal
                et notre PAMI principal sont basés sur la même architecture (électronique, mécanique et informatique)
                et ont tous les deux très bien fonctionné ! En bonus, des petits PAMIs ont même pu participer à
                 certains matchs."
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