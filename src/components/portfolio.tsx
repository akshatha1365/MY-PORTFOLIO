import Image from "next/image";
import { portfolio } from "@/data/portfolio";

function SectionHeading({
  eyebrow,
  id,
  title,
  number,
}: {
  eyebrow: string;
  id: string;
  title: string;
  number: string;
}) {
  return (
    <div className="section-heading">
      <span className="section-heading__number">{number}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-heading__title" id={id}>
          {title}
        </h2>
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="15"
      viewBox="0 0 16 16"
      width="15"
    >
      <path
        d="M3.333 12.667 12.667 3.333M4 3.333h8.667V12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="hero section-wrap" id="home">
      <div className="hero__copy">
        <p className="eyebrow hero__eyebrow">
          <span className="availability-dot" />
          Exploring <span aria-hidden="true">·</span> Learning{" "}
          <span aria-hidden="true">·</span> Building
        </p>
        <h1 className="hero__title" id="hero-title">
          Akshatha
          <br />
          <span className="hero__title-accent">Kulkarni.</span>
        </h1>
        <p className="hero__motto">Learning today. Building tomorrow.</p>
        <p className="hero__name">
          {portfolio.title}
        </p>
        <p className="hero__intro">{portfolio.introduction}</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#about">
            About Me <span aria-hidden="true">↓</span>
          </a>
          <a className="button button--text" href="#contact">
            Contact Me <ArrowIcon />
          </a>
        </div>
      </div>

      <div
        aria-label={
          portfolio.profileImage
            ? `${portfolio.name}'s profile photo`
            : `Profile photo placeholder with the initials ${portfolio.profilePlaceholder}`
        }
        className="hero-art"
        role="img"
      >
        <div className="hero-art__orbit hero-art__orbit--outer" />
        <div className="hero-art__orbit hero-art__orbit--inner" />
        <div className="hero-art__sun" />
        <div className="hero-art__portrait">
          {portfolio.profileImage ? (
            <Image
              alt=""
              className="hero-art__photo"
              fill
              priority
              sizes="(max-width: 680px) 60vw, 30vw"
              src={portfolio.profileImage}
            />
          ) : (
            <>
              <span className="hero-art__portrait-initials">
                {portfolio.profilePlaceholder}
              </span>
              <span className="hero-art__portrait-label">YOUR PHOTO HERE</span>
            </>
          )}
        </div>
        <div className="hero-art__caption">
          <span className="hero-art__caption-mark">{portfolio.initials}</span>
          <span>Curiosity in progress</span>
        </div>
        <span aria-hidden="true" className="hero-art__asterisk">
          ✳
        </span>
        <span aria-hidden="true" className="hero-art__orbit-dot" />
      </div>

      <a aria-label="Scroll to learn more" className="hero__scroll" href="#about">
        <span className="hero__scroll-line" />
        Scroll to explore
      </a>
    </section>
  );
}

export function AboutSection() {
  return (
    <section
      aria-labelledby="about-title"
      className="section-wrap section section--about"
      id="about"
    >
      <SectionHeading
        eyebrow="A little about me"
        id="about-title"
        number="01"
        title="Still learning. Always curious."
      />
      <div className="about-grid">
        <div className="about-grid__intro">
          <p className="about-lead">{portfolio.about.introduction}</p>
          <p className="about-note">
            There’s a lot I’m excited to learn. This space will grow right along
            with me.
          </p>
        </div>
        <div className="about-details">
          <div className="about-detail">
            <span className="detail-label">CURIOUS ABOUT</span>
            <div className="interest-list">
              {portfolio.about.interests.map((interest) => (
                <span className="interest-pill" key={interest}>
                  {interest}
                </span>
              ))}
            </div>
          </div>
          <div className="about-detail">
            <span className="detail-label">OUTSIDE THE CLASSROOM</span>
            <p>
              {portfolio.about.hobbies.length > 0
                ? portfolio.about.hobbies.join(", ")
                : "Add your personal interests here when you’re ready."}
            </p>
          </div>
          <div className="about-detail">
            <span className="detail-label">LOOKING AHEAD</span>
            <p>{portfolio.about.aspiration}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section
      aria-labelledby="skills-title"
      className="section-wrap section section--soft"
      id="skills"
    >
      <SectionHeading
        eyebrow="My growing toolkit"
        id="skills-title"
        number="02"
        title="Learning as I go."
      />
      <p className="section-intro">
        I’m at the start of my technical journey. Here’s what I’m exploring so
        far — and there’s plenty more to learn.
      </p>
      <div className="skills-grid">
        {portfolio.skills.map((skill) => (
          <article className="skill-card" key={skill.title}>
            <div className="skill-card__top">
              <span className="skill-card__mark">{skill.mark}</span>
              <span aria-hidden="true" className="skill-card__arrow">
                ↗
              </span>
            </div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <ul className="skill-card__list">
              {skill.items.map((item) => (
                <li key={item}>
                  <span aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function JourneySection() {
  return (
    <section
      aria-labelledby="journey-title"
      className="section-wrap section section--journey"
      id="journey"
    >
      <div className="journey-layout">
        <div className="journey-layout__intro">
          <SectionHeading
            eyebrow="One step at a time"
            id="journey-title"
            number="03"
            title="The learning journey."
          />
          <p className="section-intro">
            No rush to have it all figured out. I’m building a strong
            foundation, staying curious, and making room to grow.
          </p>
          <span aria-hidden="true" className="journey-doodle">
            ↗
          </span>
        </div>
        <ol className="journey-list">
          {portfolio.learning.map((item) => (
            <li className="journey-item" key={item.number}>
              <span className="journey-item__number">{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <span aria-hidden="true" className="journey-item__sparkle">
                ✳
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section
      aria-labelledby="projects-title"
      className="section-wrap section section--projects"
      id="projects"
    >
      <SectionHeading
        eyebrow="A work in progress"
        id="projects-title"
        number="04"
        title="Projects, eventually."
      />
      {portfolio.projects.length > 0 ? (
        <div className="projects-grid">
          {portfolio.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      ) : (
        <div className="projects-panel">
          <div aria-hidden="true" className="projects-panel__illustration">
            <span className="project-orbit project-orbit--one" />
            <span className="project-orbit project-orbit--two" />
            <span className="project-star">✳</span>
            <span className="project-seed">a.</span>
          </div>
          <div className="projects-panel__copy">
            <span className="projects-panel__label">CHAPTER ONE · IN PROGRESS</span>
            <h3>My journey into building projects starts here!</h3>
            <p>
              I’m learning the building blocks now. When a project is ready, it
              will find a home here.
            </p>
            <a className="inline-link" href="#journey">
              Follow my learning journey <ArrowIcon />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof portfolio.projects)[number];
}) {
  return (
    <article className="project-card">
      {project.image ? (
        <div className="project-card__image">
          <Image
            alt={`${project.title} project preview`}
            fill
            sizes="(max-width: 680px) 100vw, (max-width: 900px) 50vw, 33vw"
            src={project.image}
          />
        </div>
      ) : null}
      <div className="project-card__top">
        <span aria-hidden="true" className="project-card__mark">
          ✳
        </span>
        {project.status ? (
          <span className="project-card__status">{project.status}</span>
        ) : null}
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.technologies.length > 0 ? (
        <ul aria-label="Technologies used" className="project-card__tags">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      ) : null}
      <div className="project-card__links">
        {project.githubHref ? (
          <a
            className="inline-link"
            href={project.githubHref}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub <ArrowIcon />
          </a>
        ) : null}
        {project.demoHref ? (
          <a
            className="inline-link"
            href={project.demoHref}
            rel="noopener noreferrer"
            target="_blank"
          >
            Live demo <ArrowIcon />
          </a>
        ) : null}
      </div>
    </article>
  );
}

export function EducationSection() {
  return (
    <section
      aria-labelledby="education-title"
      className="section-wrap section section--soft section--education"
      id="education"
    >
      <SectionHeading
        eyebrow="Where I’m learning"
        id="education-title"
        number="05"
        title="My education."
      />
      <div className="education-list">
        <article className="education-card">
          <div className="education-card__seal" aria-hidden="true">
            <span>SEA</span>
            <span>COLLEGE</span>
          </div>
          <div className="education-card__main">
            <p className="education-card__eyebrow">
              {portfolio.education.shortName} <span>·</span> {portfolio.education.location}
            </p>
            <h3>{portfolio.education.college}</h3>
            <p>
              {portfolio.education.degree} in {portfolio.education.branch}
            </p>
          </div>
          <div className="education-card__status">
            <span className="education-card__year">{portfolio.education.year}</span>
            <span className="education-card__expected">
              Expected graduation <strong>{portfolio.education.graduation}</strong>
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}

export function PucSection() {
  return (
    <section
      aria-labelledby="puc-title"
      className="section-wrap section section--soft section--puc"
      id="puc"
    >
      <div className="puc-heading">
        <SectionHeading
          eyebrow="Pre-university education"
          id="puc-title"
          number="06"
          title="My PUC results."
        />
        <p className="puc-heading__intro">
          {portfolio.puc.board} <span aria-hidden="true">·</span>{" "}
          {portfolio.puc.course}
        </p>
      </div>
      <div className="puc-card">
        <div className="puc-card__college">
          <span className="puc-card__label">PUC COLLEGE</span>
          <h3>{portfolio.puc.college}</h3>
        </div>
        <div className="puc-results">
          {[portfolio.puc.firstYear, portfolio.puc.secondYear].map((year) => (
            <article className="puc-result" key={year.label}>
              <span className="puc-card__label">{year.label}</span>
              <strong>
                {year.marks} <span>/ {year.maximum}</span>
              </strong>
              <span className="puc-result__percentage">
                {((year.marks / year.maximum) * 100).toFixed(2)}%
              </span>
              <span className="puc-result__distinction">Distinction</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CertificationsSection() {
  return (
    <section
      aria-labelledby="certifications-title"
      className="section-wrap section section--certifications"
      id="certifications"
    >
      <SectionHeading
        eyebrow="Learning milestones"
        id="certifications-title"
        number="07"
        title="Certifications."
      />
      {portfolio.certifications.length > 0 ? (
        <div className="certifications-grid">
          {portfolio.certifications.map((certification) => (
            <article className="certification-card" key={certification.issuer}>
              {certification.image ? (
                <div className="certification-card__preview">
                  <Image
                    alt={`${certification.title ?? certification.issuer} certificate preview`}
                    fill
                    sizes="(max-width: 680px) 100vw, (max-width: 900px) 50vw, 33vw"
                    src={certification.image}
                  />
                </div>
              ) : (
                <span
                  aria-hidden="true"
                  className="certification-card__mark"
                >
                  ✳
                </span>
              )}
              <span className="certification-card__issuer">
                {certification.issuer}
              </span>
              <h3>
                {certification.title ?? "Certificate details coming soon"}
              </h3>
              {!certification.title ? (
                <p className="certification-card__placeholder">
                  Add the certificate name and image when they’re available.
                </p>
              ) : null}
              {certification.completedAt ? (
                <span className="certification-card__year">
                  {certification.completedAt}
                </span>
              ) : null}
              {certification.certificateUrl || certification.image ? (
                <a
                  className="inline-link"
                  href={certification.certificateUrl ?? certification.image}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View certificate <ArrowIcon />
                </a>
              ) : null}
              {certification.credentialUrl ? (
                <a
                  className="inline-link"
                  href={certification.credentialUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Verify credential <ArrowIcon />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      ) : (
        <div className="certifications-empty">
          <span aria-hidden="true" className="certifications-empty__mark">
            ✳
          </span>
          <div>
            <h3>Every new skill starts with curiosity.</h3>
            <p>
              I’m building my foundations now. As I complete courses and earn
              certifications, I’ll share them here.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export function ContactSection() {
  return (
    <section
      aria-labelledby="contact-title"
      className="contact-section"
      id="contact"
    >
      <div className="section-wrap contact-section__inner">
        <div>
          <p className="eyebrow contact-section__eyebrow">
            Have an idea or an interesting problem?
          </p>
          <h2 id="contact-title">
            Let’s
            <br />
            <span>connect.</span>
          </h2>
          <p className="contact-section__copy">
            I’d love to hear what you’re curious about, the ideas you’re
            exploring, or a problem you’d like to solve.
          </p>
          <a className="button button--light" href={`mailto:${portfolio.contact.email}`}>
            Tell me about it <ArrowIcon />
          </a>
        </div>
        <div className="contact-links">
          <a href={`mailto:${portfolio.contact.email}`}>
            <span className="contact-links__icon" aria-hidden="true">
              @
            </span>
            <span className="contact-links__label">EMAIL</span>
            <span className="contact-links__value">{portfolio.contact.email}</span>
            <ArrowIcon />
          </a>
          {portfolio.contact.linkedin ? (
            <a
              href={portfolio.contact.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="contact-links__icon" aria-hidden="true">
                in
              </span>
              <span className="contact-links__label">LINKEDIN</span>
              <span className="contact-links__value">Say hello on LinkedIn</span>
              <ArrowIcon />
            </a>
          ) : null}
          {portfolio.contact.github ? (
            <a
              href={portfolio.contact.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="contact-links__icon" aria-hidden="true">
                &lt;/&gt;
              </span>
              <span className="contact-links__label">GITHUB</span>
              <span className="contact-links__value">Find me on GitHub</span>
              <ArrowIcon />
            </a>
          ) : null}
        </div>
        <span aria-hidden="true" className="contact-section__sparkle">
          ✳
        </span>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Journey", href: "#journey" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "PUC Results", href: "#puc" },
    { label: "Certificates", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];
  const socialLinks = [
    portfolio.contact.linkedin
      ? { label: "LinkedIn", href: portfolio.contact.linkedin }
      : null,
    portfolio.contact.github
      ? { label: "GitHub", href: portfolio.contact.github }
      : null,
  ].filter((link) => link !== null);

  return (
    <footer className="site-footer">
      <div className="section-wrap site-footer__inner">
        <a className="wordmark wordmark--footer" href="#home">
          <span className="wordmark__mark">AK</span>
          <span>{portfolio.name}</span>
        </a>
        <p>Learning, growing and exploring technology.</p>
        <nav aria-label="Footer navigation" className="site-footer__links">
          {footerLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <nav aria-label="Social links" className="site-footer__socials">
          {socialLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {link.label} ↗
            </a>
          ))}
        </nav>
        <a className="site-footer__top" href="#home">
          © {new Date().getFullYear()} · Back to top ↑
        </a>
      </div>
    </footer>
  );
}
