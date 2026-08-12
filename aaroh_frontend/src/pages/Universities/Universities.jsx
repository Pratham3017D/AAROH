import {
  ArrowRight,
  Building2,
  Compass,
  GraduationCap,
  Lightbulb,
  Rocket,
  Search,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

function Universities() {
  const benefits = [
    {
      icon: Lightbulb,
      title: "Discover Innovation",
      text: "Discover promising student ideas, projects, and innovations emerging across campuses.",
    },
    {
      icon: Users,
      title: "Connect Students",
      text: "Help students find collaborators, communities, mentors, and opportunities.",
    },
    {
      icon: Rocket,
      title: "Support Projects",
      text: "Create an environment where students can turn ideas into meaningful projects.",
    },
    {
      icon: Compass,
      title: "Create Opportunities",
      text: "Promote hackathons, challenges, events, clubs, and innovation programs.",
    },
  ];

  return (
    <main className="universities-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="universities-hero">

        <div className="universities-glow universities-glow-one" />
        <div className="universities-glow universities-glow-two" />

        <span className="universities-eyebrow">
          AAROH FOR UNIVERSITIES
        </span>

        <h1>
          Build a campus
          <span> where innovation grows.</span>
        </h1>

        <p>
          AAROH connects universities with student innovation,
          projects, communities, challenges, and opportunities
          through one connected ecosystem.
        </p>

        <div className="universities-hero-actions">

          <Link
            to="/submit"
            className="universities-primary-btn"
          >
            Start an Initiative
            <ArrowRight size={17} />
          </Link>

          <a
            href="#university-benefits"
            className="universities-secondary-btn"
          >
            Explore Benefits
          </a>

        </div>

      </section>


      {/* =====================================================
          CAMPUS ECOSYSTEM
      ===================================================== */}

      <section className="university-ecosystem">

        <div className="university-section-heading">

          <span>
            THE CAMPUS ECOSYSTEM
          </span>

          <h2>
            Connect the people
            <strong> behind innovation.</strong>
          </h2>

          <p>
            A university is more than classrooms. AAROH brings
            students, projects, clubs, mentors, and opportunities
            into one connected space.
          </p>

        </div>


        <div className="university-ecosystem-grid">

          <div className="university-ecosystem-card student-card">
            <div className="university-card-icon">
              <GraduationCap size={22} />
            </div>

            <h3>Students</h3>

            <p>
              Discover ideas, build projects, find teammates,
              and showcase your work.
            </p>
          </div>


          <div className="university-ecosystem-card project-card">
            <div className="university-card-icon">
              <Rocket size={22} />
            </div>

            <h3>Projects</h3>

            <p>
              Give student innovations visibility and connect
              them with the right people.
            </p>
          </div>


          <div className="university-ecosystem-card community-card">
            <div className="university-card-icon">
              <Users size={22} />
            </div>

            <h3>Communities</h3>

            <p>
              Bring clubs, technical communities, events,
              and student initiatives together.
            </p>
          </div>


          <div className="university-ecosystem-card opportunity-card">
            <div className="university-card-icon">
              <Search size={22} />
            </div>

            <h3>Opportunities</h3>

            <p>
              Surface hackathons, challenges, programs,
              and pathways for students to grow.
            </p>
          </div>

        </div>

      </section>


      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section
        className="university-benefits"
        id="university-benefits"
      >

        <div className="university-section-heading">

          <span>
            WHY UNIVERSITIES
          </span>

          <h2>
            Turn student potential
            <strong> into visible impact.</strong>
          </h2>

        </div>


        <div className="university-benefits-grid">

          {benefits.map((benefit) => {

            const Icon = benefit.icon;

            return (
              <article
                className="university-benefit-card"
                key={benefit.title}
              >

                <div className="university-benefit-icon">
                  <Icon size={20} />
                </div>

                <h3>
                  {benefit.title}
                </h3>

                <p>
                  {benefit.text}
                </p>

              </article>
            );
          })}

        </div>

      </section>


      {/* =====================================================
          UNIVERSITY JOURNEY
      ===================================================== */}

      <section className="university-journey">

        <div className="university-section-heading">

          <span>
            HOW IT WORKS
          </span>

          <h2>
            From campus idea
            <strong> to campus impact.</strong>
          </h2>

        </div>


        <div className="university-journey-track">

          <div className="university-step">
            <span>01</span>

            <div>
              <Lightbulb size={19} />
            </div>

            <h3>Discover</h3>

            <p>
              Find student ideas and emerging innovations.
            </p>
          </div>


          <ArrowRight
            className="university-step-arrow"
            size={20}
          />


          <div className="university-step">
            <span>02</span>

            <div>
              <Users size={19} />
            </div>

            <h3>Connect</h3>

            <p>
              Bring students, mentors, and communities together.
            </p>
          </div>


          <ArrowRight
            className="university-step-arrow"
            size={20}
          />


          <div className="university-step">
            <span>03</span>

            <div>
              <Rocket size={19} />
            </div>

            <h3>Build</h3>

            <p>
              Support students as they turn ideas into projects.
            </p>
          </div>


          <ArrowRight
            className="university-step-arrow"
            size={20}
          />


          <div className="university-step">
            <span>04</span>

            <div>
              <Building2 size={19} />
            </div>

            <h3>Impact</h3>

            <p>
              Showcase innovation and create opportunities.
            </p>
          </div>

        </div>

      </section>


      {/* =====================================================
          VISION
      ===================================================== */}

      <section className="university-vision">

        <div className="university-vision-content">

          <span>
            THE BIGGER PICTURE
          </span>

          <h2>
            Every campus has
            <strong> ideas worth discovering.</strong>
          </h2>

          <p>
            AAROH aims to create a connected student innovation
            network where great ideas can travel beyond the
            boundaries of a single classroom or campus.
          </p>

          <Link
            to="/explore"
            className="university-vision-btn"
          >
            Explore Innovations
            <ArrowRight size={16} />
          </Link>

        </div>

        <div className="university-vision-visual">

          <div className="university-visual-ring ring-one" />
          <div className="university-visual-ring ring-two" />

          <div className="university-visual-core">
            <Building2 size={28} />
            <span>AAROH</span>
            <small>CONNECTED CAMPUSES</small>
          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="university-bottom-cta">

        <span>
          FORWARD-THINKING CAMPUSES
        </span>

        <h2>
          Let's build a stronger
          <strong> innovation culture.</strong>
        </h2>

        <p>
          Give your students a place to discover,
          collaborate, build, and showcase.
        </p>

        <Link
          to="/submit"
          className="university-cta-btn"
        >
          Get Started
          <ArrowRight size={17} />
        </Link>

      </section>

    </main>
  );
}

export default Universities;