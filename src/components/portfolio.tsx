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
          First-year student · Bengaluru, Karnataka
        </p>
        <h1 className="hero__title" id="hero-title">
          A curious mind,
          <br />
          <span>just getting</span>
          <br />
          <span className="hero__title-accent">started.</span>
        </h1>
        <p className="hero__name">
          I’m <strong>{portfolio.name}</strong>
          <span className="hero__divider">/</span>
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
        aria-label="Profile photo placeholder; add your photo at public/profile.jpg"
        className="hero-art"
        role="img"
      >
        <div className="hero-art__orbit hero-art__orbit--outer" />
        <div className="hero-art__orbit hero-art__orbit--inner" />
        <div className="hero-art__sun" />
        <div className="hero-art__card">
          <span className="hero-art__card-label">CURRENTLY</span>
          <span className="hero-art__card-title">learning to make</span>
          <span className="hero-art__card-accent">things that matter.</span>
          <span aria-hidden="true" className="hero-art__sparkle">
            ✳
          </span>
        </div>
        <div className="hero-art__caption">
          <span className="hero-art__caption-mark">a.</span>
          <span>Add your photo when you’re ready</span>
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
            <p>{portfolio.about.hobbies}</p>
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
            <article className="project-card" key={project.title}>
              <span aria-hidden="true" className="project-card__mark">
                ✳
              </span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul aria-label="Technologies used" className="project-card__tags">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              {project.href ? (
                <a
                  className="inline-link"
                  href={project.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View project <ArrowIcon />
                </a>
              ) : null}
            </article>
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
      <article className="education-card">
        <div className="education-card__seal" aria-hidden="true">
          <span>SE</span>
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
            EXPECTED GRADUATION <strong>{portfolio.education.graduation}</strong>
          </span>
        </div>
      </article>
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
          <p className="eyebrow contact-section__eyebrow">Have a good one in mind?</p>
          <h2 id="contact-title">
            Let’s start a
            <br />
            <span>conversation.</span>
          </h2>
          <p className="contact-section__copy">
            I’m always happy to connect, learn, and talk about ideas.
          </p>
          <a className="button button--light" href={`mailto:${portfolio.contact.email}`}>
            Send me an email <ArrowIcon />
          </a>
        </div>
        <div className="contact-links">
          <a href={`mailto:${portfolio.contact.email}`}>
            <span className="contact-links__label">EMAIL</span>
            <span className="contact-links__value">{portfolio.contact.email}</span>
            <ArrowIcon />
          </a>
          <a
            href={portfolio.contact.linkedin}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="contact-links__label">LINKEDIN</span>
            <span className="contact-links__value">Say hello on LinkedIn</span>
            <ArrowIcon />
          </a>
          <a
            href={portfolio.contact.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="contact-links__label">GITHUB</span>
            <span className="contact-links__value">Find me on GitHub</span>
            <ArrowIcon />
          </a>
        </div>
        <span aria-hidden="true" className="contact-section__sparkle">
          ✳
        </span>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-wrap site-footer__inner">
        <a className="wordmark wordmark--footer" href="#home">
          <span className="wordmark__mark">a.</span>
          <span>{portfolio.name}</span>
        </a>
        <p>Learning, growing, and figuring it out — one day at a time.</p>
        <a className="site-footer__top" href="#home">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
