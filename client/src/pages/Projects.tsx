import { projects } from "@/data/projects";

const sourceHome = "https://sanjanachawla.framer.website";
const instagram = "https://www.instagram.com/sanjana.chawlaa/";

function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#selected-work">
        Skip to selected work
      </a>
      <header className="site-header">
        <a className="site-wordmark" href="/projects" aria-label="Sanjana Chawla — Work">
          SANJANA CHAWLA
        </a>
        <nav className="primary-nav" aria-label="Main navigation">
          <a href="/projects">WORK</a>
          <a href={`${sourceHome}/#about`}>ABOUT</a>
          <a href={`${sourceHome}/#contact`}>CONTACT</a>
        </nav>
        <span className="header-year">©2025</span>
      </header>
    </>
  );
}

function ProjectGallery() {
  return (
    <section
      className="project-gallery"
      id="selected-work"
      aria-label="Selected photography projects"
    >
      <ol className="project-list">
        {projects.map((project, index) => (
          <li className="project-list-item" key={project.slug}>
            <article className="project-entry">
              <a
                className="project-link"
                href={project.href}
                aria-label={`View ${project.name}${project.category ? ` — ${project.category}` : ""} project on the original portfolio`}
              >
                <figure className="project-figure">
                  <img
                    className="project-image"
                    src={project.image}
                    alt={project.alt}
                    width={project.width}
                    height={project.height}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    decoding="async"
                    draggable={false}
                    sizes="(max-width: 1232px) calc(100vw - 64px), 1168px"
                  />
                  <figcaption className="project-caption">
                    <h2 className="project-name">{project.name}</h2>
                    {project.category && (
                      <p className="project-category">{project.category}</p>
                    )}
                  </figcaption>
                </figure>
              </a>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-content">
        <div className="footer-topline">
          <a className="footer-social" href={instagram} target="_blank" rel="noreferrer">
            INSTAGRAM
          </a>
          <span className="footer-location">INDIA</span>
          <h2 className="footer-prompt">
            Do you like
            <br />
            What you see?
          </h2>
        </div>
        <div className="footer-bottomline">
          <span className="footer-copy">2025 ® Sanjana chawla</span>
          <a className="connect-link" href={instagram} target="_blank" rel="noreferrer">
            Let's connect
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Projects() {
  return (
    <div className="portfolio-page" id="top">
      <SiteHeader />
      <main>
        <section className="work-intro" aria-labelledby="page-title">
          <h1 id="page-title">Work we’re proud of</h1>
          <p>
            Over the years I completed hundreds of projects with several clients. Here is a selection
            of the best ones.
          </p>
        </section>
        <ProjectGallery />
      </main>
      <div className="end-mark" aria-hidden="true">
        <img src="/signature.svg" alt="" width="130" height="130" />
      </div>
      <SiteFooter />
    </div>
  );
}
