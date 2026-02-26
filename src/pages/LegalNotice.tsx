const LegalNotice = () => {
    return (
        <div style={{padding: "2rem", maxWidth: "800px", margin: "0 auto"}}>
            <h2>Mentions légales</h2>
            <h4>Éditeur du site</h4>
            <p>
                Le site est édité par SC Association, association loi 1901 déclarée sous le numéro RNA W923010069. Il
                partage du contenu lié à l’équipe CDROMS, qui participe à la Coupe de France de Robotique de Planète
                Sciences.
            </p>
            <h4>Hébergement</h4>
            <p>
                Le site est hébergé par <a href="https://pages.github.com">GitHub Pages</a>, service de <a href="https://github.com">GitHub,
                Inc</a>.<br/>
                Adresse : 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA<br/>
            </p>
            <h4>Propriété intellectuelle</h4>
            <p>
                Tout le contenu (textes, images, logos, codes) est la propriété de l’association et de ses auteurs et
                reste protégé par la législation française.<br/><br/>
                Le code source du projet est distribué sous licence <a href="https://github.com/CDROMS-Robotics/cdroms-robotics.github.io/blob/master/LICENSE">GPL</a>.<br/>
                Les newsletters et autres contenus textuels sont sous licence <a href="https://github.com/CDROMS-Robotics/cdroms-robotics.github.io/blob/master/LICENSE-CC">CC BY-NC-SA</a>.
            </p>
            <h4>Responsabilité</h4>
            <p>
                Les informations publiées sont fournies à titre indicatif.<br/>
                L’association ne peut être tenue responsable de l’usage du site, du code ou des contenus publiés.<br/>
            </p>
            <br/>
            <p className="fst-italic">
                Dernière mise à jour : 26/02/2025
            </p>
        </div>
    );
};

export default LegalNotice;
