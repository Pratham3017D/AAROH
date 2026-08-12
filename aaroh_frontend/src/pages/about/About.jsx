import {
  ArrowRight,
  Compass,
  Lightbulb,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";

function About() {
  const journey = [
    {
      number: "01",
      icon: Lightbulb,
      title: "Discover",
      text: "Find ideas, challenges, opportunities, and people who are building something meaningful.",
    },
    {
      number: "02",
      icon: Rocket,
      title: "Build",
      text: "Turn your ideas into real projects and learn by creating things that matter.",
    },
    {
      number: "03",
      icon: Users,
      title: "Connect",
      text: "Find teammates, mentors, collaborators, and students who share your interests.",
    },
    {
      number: "04",
      icon: Sparkles,
      title: "Showcase",
      text: "Create your innovation identity and let the community discover what you have built.",
    },
    {
      number: "05",
      icon: Compass,
      title: "Grow",
      text: "Discover competitions, opportunities, communities, and pathways for your next step.",
    },
  ];

  return (
    <section className="about-section" id="about">

      {/* =====================================================
          HERO
      ===================================================== */}

      <div className="about-hero">

        <div className="about-orb about-orb-one" />
        <div className="about-orb about-orb-two" />

        <span className="about-eyebrow">
          ABOUT AAROH
        </span>

        <h2>
          Student ideas deserve
          <span> more than a classroom.</span>
        </h2>

        <p>
          AAROH is a student innovation ecosystem designed
          to help ideas move beyond notebooks and classrooms
          into real projects, collaborations, communities,
          and opportunities.
        </p>

      </div>


      {/* =====================================================
          PROBLEM / SOLUTION
      ===================================================== */}

      <div className="about-problem-grid">

        <article className="about-problem-card">

          <span className="about-card-label">
            THE PROBLEM
          </span>

          <h3>
            Great ideas often stop before they begin.
          </h3>

          <p>
            Students have ideas, skills, and ambition.
            But finding the right teammates, guidance,
            visibility, and opportunities can be difficult.
          </p>

          <div className="about-problem-flow">

            <span>IDEA</span>
            <ArrowRight size={15} />
            <span>NO TEAM</span>
            <ArrowRight size={15} />
            <span>NO GUIDANCE</span>
            <ArrowRight size={15} />
            <span>ABANDONED</span>

          </div>

        </article>


        <article className="about-solution-card">

          <span className="about-card-label">
            THE AAROH APPROACH
          </span>

          <h3>
            From idea to impact.
          </h3>

          <p>
            AAROH brings the pieces together so students
            can discover, build, connect, showcase, and grow
            within one ecosystem.
          </p>

          <div className="about-solution-highlight">
            <Sparkles size={18} />

            <span>
              One ecosystem. One innovation journey.
            </span>
          </div>

        </article>

      </div>


      {/* =====================================================
          JOURNEY
      ===================================================== */}

      <div className="about-journey">

        <div className="about-section-heading">

          <div>
            <span>THE AAROH JOURNEY</span>

            <h3>
              From curiosity to creation.
            </h3>
          </div>

          <p>
            Every great innovation starts with a first step.
            AAROH gives students the ecosystem to keep moving.
          </p>

        </div>


        <div className="about-journey-grid">

          {journey.map((item) => {

            const Icon = item.icon;

            return (
              <article
                className="about-journey-card"
                key={item.number}
              >

                <div className="about-journey-top">

                  <span className="about-journey-number">
                    {item.number}
                  </span>

                  <div className="about-journey-icon">
                    <Icon size={19} />
                  </div>

                </div>

                <h4>
                  {item.title}
                </h4>

                <p>
                  {item.text}
                </p>

              </article>
            );
          })}

        </div>

      </div>


      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <div className="about-philosophy">

        <span className="about-eyebrow">
          OUR PHILOSOPHY
        </span>

        <h3>
          Build.
          <span> Connect.</span>
          <strong> Inspire.</strong>
        </h3>

        <p>
          We believe students shouldn't just consume
          technology. They should have the space, people,
          and opportunities to create it.
        </p>

      </div>


      {/* =====================================================
          VISION
      ===================================================== */}

      <div className="about-vision">

        <div className="about-vision-content">

          <span className="about-card-label">
            OUR VISION
          </span>

          <h3>
            Every student should
            have a place to build.
          </h3>

          <p>
            A future where a student's idea doesn't depend
            on who they already know, where they study,
            or whether they have a platform to showcase it.
          </p>

        </div>


        

      </div>


      {/* =====================================================
          CTA
      ===================================================== */}

      <div className="about-cta">

        <div>

          <span>
            HAVE AN IDEA?
          </span>

          <h3>
            Don't keep it in your notebook.
          </h3>

        </div>

        <a
          href="/submit"
          className="about-cta-button"
        >
          Start Building
          <ArrowRight size={17} />
        </a>

      </div>

    </section>
  );
}

export default About;