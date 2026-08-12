import {
  ArrowRight,
  Award,
  Compass,
  GraduationCap,
  Lightbulb,
  Rocket,
  Search,
  Sparkles,
  Users,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

function Features() {
  const features = [
    {
      icon: Search,
      number: "01",
      title: "Discover",
      description:
        "Explore student innovations, ideas, projects, challenges, and opportunities from across the ecosystem.",
      action: "Explore ideas",
      link: "/explore",
    },
    {
      icon: Lightbulb,
      number: "02",
      title: "Submit Your Innovation",
      description:
        "Turn your idea into a structured innovation and give it a place where others can discover and support it.",
      action: "Submit innovation",
      link: "/submit",
    },
    {
      icon: Users,
      number: "03",
      title: "Collaborate",
      description:
        "Find students with complementary skills and build stronger projects together.",
      action: "Find collaborators",
      link: "/community",
    },
    {
      icon: Rocket,
      number: "04",
      title: "Build",
      description:
        "Move beyond ideas by developing real projects, experimenting with technology, and learning through creation.",
      action: "Start building",
      link: "/submit",
    },
    {
      icon: Award,
      number: "05",
      title: "Challenges",
      description:
        "Discover hackathons, competitions, challenges, and opportunities that push your ideas further.",
      action: "Explore challenges",
      link: "/challenges",
    },
    {
      icon: Sparkles,
      number: "06",
      title: "Showcase",
      description:
        "Give your work visibility and let students, universities, mentors, and opportunities discover what you have built.",
      action: "Explore innovations",
      link: "/explore",
    },
    {
      icon: GraduationCap,
      number: "07",
      title: "University Ecosystem",
      description:
        "Connect students, projects, communities, and innovation initiatives across universities.",
      action: "Explore ecosystem",
      link: "/explore",
    },
    {
      icon: UserRound,
      number: "08",
      title: "Innovation Profile",
      description:
        "Build a profile that represents more than a resume — your projects, skills, collaborations, and innovation journey.",
      action: "View profile",
      link: "/profile",
    },
  ];

  return (
    <main className="features-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="features-hero">

        <div className="features-glow features-glow-one" />
        <div className="features-glow features-glow-two" />

        <span className="features-eyebrow">
          AAROH FEATURES
        </span>

        <h1>
          Everything you need
          <span> to turn ideas into impact.</span>
        </h1>

        <p>
          AAROH brings discovery, collaboration, building,
          showcasing, and opportunities together in one
          student innovation ecosystem.
        </p>

      </section>


      {/* =====================================================
          FEATURE GRID
      ===================================================== */}

      <section className="features-grid">

        {features.map((feature) => {

          const Icon = feature.icon;

          return (
            <article
              className="feature-card"
              key={feature.number}
            >

              <div className="feature-card-top">

                <span className="feature-number">
                  {feature.number}
                </span>

                <div className="feature-icon">
                  <Icon size={21} />
                </div>

              </div>

              <h2>
                {feature.title}
              </h2>

              <p>
                {feature.description}
              </p>

              <Link
                to={feature.link}
                className="feature-link"
              >
                {feature.action}
                <ArrowRight size={15} />
              </Link>

            </article>
          );
        })}

      </section>


      {/* =====================================================
          ECOSYSTEM FLOW
      ===================================================== */}

      <section className="features-flow">

        <div className="features-section-heading">

          <span>
            THE AAROH ECOSYSTEM
          </span>

          <h2>
            One journey.
            <strong> Multiple possibilities.</strong>
          </h2>

          <p>
            AAROH connects every stage of a student's
            innovation journey so an idea can keep moving
            forward.
          </p>

        </div>


        <div className="features-flow-track">

          <div className="features-flow-item">
            <Search size={20} />
            <span>Discover</span>
          </div>

          <ArrowRight className="features-flow-arrow" size={20} />

          <div className="features-flow-item">
            <Lightbulb size={20} />
            <span>Ideate</span>
          </div>

          <ArrowRight className="features-flow-arrow" size={20} />

          <div className="features-flow-item">
            <Users size={20} />
            <span>Collaborate</span>
          </div>

          <ArrowRight className="features-flow-arrow" size={20} />

          <div className="features-flow-item">
            <Rocket size={20} />
            <span>Build</span>
          </div>

          <ArrowRight className="features-flow-arrow" size={20} />

          <div className="features-flow-item">
            <Sparkles size={20} />
            <span>Showcase</span>
          </div>

          <ArrowRight className="features-flow-arrow" size={20} />

          <div className="features-flow-item">
            <Award size={20} />
            <span>Grow</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          HIGHLIGHT
      ===================================================== */}

      <section className="features-highlight">

        <div className="features-highlight-content">

          <span>
            MORE THAN A PLATFORM
          </span>

          <h2>
            Your innovation journey
            <br />
            starts here.
          </h2>

          <p>
            Whether you have an idea, a skill, a project,
            or simply the curiosity to build something —
            AAROH gives you a place to begin.
          </p>

          <Link
            to="/submit"
            className="features-cta"
          >
            Start Building
            <ArrowRight size={17} />
          </Link>

        </div>

        <div className="features-highlight-visual">

          <div className="features-orbit orbit-one">
            <span>IDEA</span>
          </div>

          <div className="features-orbit orbit-two">
            <span>BUILD</span>
          </div>

          <div className="features-core">
            <Sparkles size={25} />
            <span>AAROH</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="features-bottom-cta">

        <span>
          READY TO BUILD?
        </span>

        <h2>
          Don't just have an idea.
          <strong> Do something with it.</strong>
        </h2>

        <Link
          to="/submit"
          className="features-bottom-button"
        >
          Get Started
          <ArrowRight size={17} />
        </Link>

      </section>

    </main>
  );
}

export default Features;