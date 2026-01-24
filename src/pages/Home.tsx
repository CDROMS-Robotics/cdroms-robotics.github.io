import * as React from "react";
import LoremIpsum from "../components/LoremIpsum.tsx";


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
            {/*TODO home.jpg*/}
            <div className="container mb-5">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-8">
                        <div className="mb-5" style={{textAlign: "justify"}}>
                            {/*TODO Qui nous sommes*/}
                            <h1 className="text-center mb-5">Qui nous sommes</h1>
                            <LoremIpsum/>
                            <LoremIpsum/>
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
                                        <img src="/restricted-assets/logos/github.svg" width="75px" alt="GitHub logo"/><br/>
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
                                        <img src="/restricted-assets/logos/youtube.svg" width="75px" alt="YouTube logo"/><br/>
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