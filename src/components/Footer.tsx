import {RiCopyleftLine} from "react-icons/ri";

const Footer: React.FC = () => {
    return (
        <footer className="d-flex flex-column w-100 p-0 colored-bg footer" style={{fontSize: "13px"}}>
            <div className="d-flex align-items-center gap-1 justify-content-center mt-1">
                <a href="https://github.com/CDROMS-Robotics" target="_blank" rel="noopener noreferrer">GitHub</a>
                •
                {/*<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-1 ms-1">Instagram</a>*/}
                {/*•*/}
                <a href="https://www.youtube.com/@CDROMS-Robotics" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
            <div className="d-flex align-items-center gap-1 justify-content-center mt-1 mb-1">
                <p className="m-0"><RiCopyleftLine height={13} color="white"/> CDROMS {new Date().getFullYear()}</p>
                •
                <a target="_blank" href="https://github.com/CDROMS-Robotics/cdroms-robotics.github.io">
                    Code source
                </a>
                •
                <a href="/#/legal-notice">Mentions Légales</a>
            </div>
        </footer>
    )
}

export default Footer
