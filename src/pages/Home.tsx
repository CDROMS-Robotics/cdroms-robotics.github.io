import * as React from "react";


const Home: React.FC = () => {
    return (
        <>
            <img style={{
                height: "calc(100vh - 42px)",
                minWidth: "100vw",
                width: "auto",
                objectFit: "cover",
                objectPosition: "30% 40%",
            }} src="/assets/home.jpg" alt="image"/>
            <div className="container mb-5">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-8">
                        <div className="mb-5" style={{textAlign: "justify"}}>
                            <h1 className="text-center mb-5">Qui sommes-nous ?</h1>
                            Après sept ans de <a href="https://www.coupederobotique.fr/levenement/la-coupe-junior/">Coupe
                            de France de Robotique Junior</a>, dont quelques qualifications au
                            niveau national, trois anciens membres du Club de Robotique de Vanves, encore animés par la
                            flamme de la compétition, décident de se relancer dans l’aventure avec la Coupe de France
                            Senior. Née de l'union de membres motivés, CDROMS se présente pour la première fois à la
                            Coupe de France de Robotique 2025.
                            <br/><br/>
                            Forts de notre expérience accumulée en Junior, nous avons au moins une certitude : la
                            maîtrise des actions de base et la robustesse technique de nos systèmes finissent toujours
                            par porter leurs fruits. Au sein de l’équipe, chacun participe à sa manière : avec ses
                            envies et ses compétences. Cela va de la conception de PCB à la programmation de robots, en
                            passant par l’usinage des systèmes et l’assemblage de robots.
                        </div>
                        <div>
                            <h1 className="text-center mb-5">Nos réseaux</h1>
                            <div
                                className="d-flex justify-content-start gap-3 align-items-center justify-content-evenly">

                                <div>
                                    <a className="text-decoration-none text-reset d-flex flex-column align-items-center"
                                       href="https://github.com/CDROMS-Robotics"
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        <img src="/restricted-assets/logos/github.svg" width="75px"
                                             alt="GitHub logo"/><br/>
                                        GitHub
                                    </a>
                                </div>
                                {/*<div>*/}
                                {/*    <a className="text-decoration-none text-reset d-flex flex-column align-items-center"*/}
                                {/*       href=""*/}
                                {/*       target="_blank"*/}
                                {/*       rel="noopener noreferrer">*/}
                                {/*        <img src="/restricted-assets/logos/instagram.svg" width="75px" alt="Instagram logo"/><br/>*/}
                                {/*        Instagram*/}
                                {/*    </a>*/}
                                {/*</div>*/}
                                <div>
                                    <a className="text-decoration-none text-reset d-flex flex-column align-items-center"
                                       href="https://www.youtube.com/@CDROMS-Robotics"
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        <img src="/restricted-assets/logos/youtube.svg" width="75px"
                                             alt="YouTube logo"/><br/>
                                        YouTube
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Home;