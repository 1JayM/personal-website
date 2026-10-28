import Image from "next/image";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import CertificationCard from "@/components/CertificationCard";
import { projects } from "@/data/projects";
import { certifications } from "@/data/certifications";

const experiences = [
  {
    role: "Grader",
    company: "Oakville STEM Learning",
    period: "Jan 2024 – Jul 2025",
    description:
      "Reviewed student work, assessed assignments, and supported learning through consistent and constructive feedback.",
    skills: ["Evaluation", "Communication", "Attention to detail"],
  },
  {
    role: "Academic Peer Tutor",
    company: "Garth Webb Secondary School",
    period: "Feb 2025 – Jun 2025",
    description:
      "Helped fellow students understand course concepts, work through problems, and build confidence in their studies.",
    skills: ["Tutoring", "Problem solving", "Collaboration"],
  },
  {
    role: "Camp Coach",
    company: "Oakville Soccer Club",
    period: "Jul 2023",
    description:
      "Supported soccer camp activities for children aged 8–9, helping maintain a positive, organized, and engaging environment.",
    skills: ["Leadership", "Teamwork", "Coaching"],
  },
];

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <Navbar />

      <main>
        <section className="hero section-container" id="home">
          <Reveal className="hero-content">
            <p className="hero-eyebrow">
              <span className="status-dot" />
              STUDENT · BUSINESS · TECHNOLOGY
            </p>

            <h1>Jay Mardikar</h1>

            <p className="hero-description">
              Hey, I&apos;m Jay and I&apos;m an ambitious STEM student at the University of Toronto
              Mississauga. I enjoy business, economics, and technology, and I&apos;m always looking
              for opportunities to learn and grow.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-secondary" href="#contact">
                Get in touch
              </a>
            </div>

            <div className="hero-meta">
              <span>Based in Oakville, Canada</span>
              <span className="meta-separator">/</span>
              <span>Open to opportunities</span>
            </div>
          </Reveal>

          <Reveal className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="hero-photo">
              <Image src="/profile.jpg" alt="Jay Mardikar" width={500} height={500} />
            </div>
          </Reveal>
        </section>

        <section className="section section-container" id="about">
          <Reveal>
            <SectionHeading
              eyebrow="ABOUT ME"
              title="A summary of who I am."
              description="I enjoy learning how things work, solving problems, and finding ways to turn ideas into something practical."
            />
          </Reveal>

          <div className="about-grid">
            <Reveal className="about-main">
              <p>
                I&apos;m a university student exploring the connection between business and
                technology. I&apos;m interested in how data, software, and analytical thinking can
                help people make better decisions.
              </p>
              <p>
                Outside of coursework, I build personal projects, develop new technical skills, and
                look for opportunities to learn from real-world challenges.
              </p>
            </Reveal>

            <Reveal className="about-details">
              <div className="detail-item">
                <span className="detail-label">Currently studying</span>
                <strong>University of Toronto Mississauga</strong>
              </div>
              <div className="detail-item">
                <span className="detail-label">Areas of interest</span>
                <strong>Finance, Economics, and Technology</strong>
              </div>
              <div className="detail-item">
                <span className="detail-label">Outside the screen</span>
                <strong>Fitness, Cricket, Badminton</strong>
              </div>
            </Reveal>
          </div>

          <Reveal className="skills-panel">
            <p className="skills-title">SKILLS I&apos;M DEVELOPING</p>
            <div className="skill-pills">
              {[
                "Python",
                "Java",
                "JavaFX",
                "React",
                "TypeScript",
                "Streamlit",
                "Excel",
                "Problem Solving",
                "Communication",
              ].map((skill) => (
                <span className="skill-pill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="section section-container" id="experience">
          <Reveal>
            <SectionHeading
              eyebrow="EXPERIENCE"
              title="Learning by doing."
              description="Experiences that helped me build communication, leadership, and problem-solving skills."
            />
          </Reveal>

          <div className="experience-list">
            {experiences.map((experience, index) => (
              <Reveal key={experience.company} className="experience-item">
                <div className="experience-index">{String(index + 1).padStart(2, "0")}</div>

                <div className="experience-main">
                  <div className="experience-heading">
                    <div>
                      <h3>{experience.role}</h3>
                      <p className="experience-company">{experience.company}</p>
                    </div>
                    <span className="experience-period">{experience.period}</span>
                  </div>

                  <p className="experience-description">{experience.description}</p>

                  <div className="tag-list">
                    {experience.skills.map((skill) => (
                      <span className="tag" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section section-container" id="projects">
          <Reveal>
            <SectionHeading
              eyebrow="PROJECTS"
              title="My projects."
              description="A selection of things I've built while exploring software development and technology."
            />
          </Reveal>

          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <Reveal key={project.title}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          {projects.some((project) => !project.featured) && (
            <div className="more-projects">
              <p>More experiments and projects are in progress.</p>
            </div>
          )}
        </section>

        <section className="section section-container" id="certifications">
          <Reveal>
            <SectionHeading
              eyebrow="CERTIFICATIONS"
              title="Learning beyond the classroom."
              description="Job simulations and learning experiences that help me explore professional skills."
            />
          </Reveal>

          <div className="certifications-grid">
            {certifications.map((certification) => (
              <Reveal key={certification.name}>
                <CertificationCard certification={certification} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-container">
            <Reveal className="contact-inner">
              <p className="section-eyebrow">LET&apos;S CONNECT</p>
              <p className="contact-description">
                I&apos;m always open to connecting with people, exploring opportunities, and
                discussing interesting ideas.
              </p>

              <div className="contact-actions">
                <a className="button button-primary" href="mailto:jaydevmardikar@gmail.com">
                  Send me an email <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="button button-secondary"
                  href="https://www.linkedin.com/in/jay-mardikar-a0a054280/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="button button-secondary"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume <span aria-hidden="true">↗</span>
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-container footer-inner">
          <a className="footer-logo" href="#home">
            JM<span>.</span>
          </a>
          <p>© 2026 Jay Mardikar</p>
        </div>
      </footer>
    </>
  );
}
