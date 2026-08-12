import {
  Award,
  CalendarDays,
  CheckCircle2,
  Code2,
  Edit3,
  ExternalLink,
  Flame,
  Globe,
  GraduationCap,
  Lightbulb,
  MapPin,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";


function Profile() {

  /* =====================================================
     SKILLS
     ===================================================== */

  const skills = [
    "React",
    "JavaScript",
    "C++",
    "Python",
    "HTML & CSS",
    "Git",
    "GitHub",
    "Node.js",
    "UI/UX",
  ];


  /* =====================================================
     INNOVATIONS
     ===================================================== */

  const innovations = [
    {
      title: "AAROH",
      category: "Student Innovation Ecosystem",
      description:
        "A unified ecosystem where students learn, build, collaborate, showcase their work, and discover opportunities.",
      status: "Building",
      tags: ["React", "Vite", "Innovation"],
    },

    {
      title: "PromptDoctor AI",
      category: "Artificial Intelligence",
      description:
        "An AI-powered platform that analyzes prompts and helps users improve their prompt quality.",
      status: "Building",
      tags: ["AI", "React", "Gemini"],
    },

    {
      title: "CalcView",
      category: "Developer Tool",
      description:
        "An interactive mathematical graphing experience designed to make mathematical concepts easier to explore.",
      status: "Completed",
      tags: ["Next.js", "TypeScript"],
    },
  ];


  /* =====================================================
     INNOVATION STRENGTH
     ===================================================== */

  const innovationStrength = [
    {
      subject: "Problem Solving",
      value: 88,
      fullMark: 100,
    },

    {
      subject: "Technical",
      value: 82,
      fullMark: 100,
    },

    {
      subject: "UI/UX",
      value: 68,
      fullMark: 100,
    },

    {
      subject: "Collaboration",
      value: 86,
      fullMark: 100,
    },

    {
      subject: "Leadership",
      value: 72,
      fullMark: 100,
    },

    {
      subject: "Project Management",
      value: 79,
      fullMark: 100,
    },

    {
      subject: "Research",
      value: 74,
      fullMark: 100,
    },

    {
      subject: "Presentation",
      value: 84,
      fullMark: 100,
    },
  ];


  /* =====================================================
     ACHIEVEMENTS
     ===================================================== */

  const achievements = [
    {
      icon: Rocket,
      title: "Innovation Builder",
      description:
        "Building real-world projects around technology and student innovation.",
    },

    {
      icon: Code2,
      title: "Developer Journey",
      description:
        "Exploring modern frontend development and strengthening programming fundamentals.",
    },

    {
      icon: Users,
      title: "Community Mindset",
      description:
        "Interested in collaboration, peer learning, and building with other students.",
    },
  ];


  /* =====================================================
     ACTIVITIES
     ===================================================== */

  const activities = [
    {
      icon: Lightbulb,
      title: "Started building AAROH",
      description:
        "Working on a student innovation ecosystem for learning, building and collaboration.",
      time: "Recently",
    },

    {
      icon: Code2,
      title: "Built PromptDoctor AI",
      description:
        "Created an AI-powered prompt improvement platform using React and Gemini.",
      time: "Recently",
    },

    {
      icon: Users,
      title: "Joined the student community",
      description:
        "Started connecting with students and exploring collaborative opportunities.",
      time: "2026",
    },
  ];


  return (
    <main className="profile-page">

      <div className="profile-container">


        {/* =====================================================
            PROFILE HERO
        ===================================================== */}

        <section className="profile-hero">

          <div className="profile-hero-glow profile-glow-one" />

          <div className="profile-hero-glow profile-glow-two" />


          <div className="profile-hero-content">


            {/* Avatar */}

            <div className="profile-avatar">

              <span>
                PR
              </span>

              <div className="profile-online">
                <CheckCircle2 size={13} />
              </div>

            </div>


            {/* Identity */}

            <div className="profile-identity">

              <div className="profile-name-row">

                <h1>
                  Pratham Rathore
                </h1>

                <span className="profile-badge">

                  <CheckCircle2 size={13} />

                  Student Builder

                </span>

              </div>


              <p className="profile-username">
                @prathamrathore
              </p>


              <p className="profile-description">
                Computer Science student building products,
                exploring technology, and turning ideas into
                meaningful innovations.
              </p>


              <div className="profile-meta">

                <span>
                  <GraduationCap size={16} />
                  Computer Science & Engineering
                </span>

                <span>
                  <MapPin size={16} />
                  Parul University
                </span>

                <span>
                  <CalendarDays size={16} />
                  Joined 2026
                </span>

              </div>

            </div>


            {/* Actions */}

            <div className="profile-actions">

              <button className="profile-edit-btn">

                <Edit3 size={16} />

                Edit Profile

              </button>


              <div className="profile-socials">

                <a
                  href="#"
                  aria-label="Personal website"
                >
                  <Globe size={18} />
                </a>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            STATS
        ===================================================== */}

        <section className="profile-stats">

          <div className="profile-stat">

            <Lightbulb size={20} />

            <div>
              <strong>12</strong>
              <span>Innovations</span>
            </div>

          </div>


          <div className="profile-stat">

            <Users size={20} />

            <div>
              <strong>08</strong>
              <span>Collaborations</span>
            </div>

          </div>


          <div className="profile-stat">

            <Award size={20} />

            <div>
              <strong>05</strong>
              <span>Achievements</span>
            </div>

          </div>


          <div className="profile-stat">

            <Rocket size={20} />

            <div>
              <strong>06</strong>
              <span>Projects</span>
            </div>

          </div>

        </section>


        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <section className="profile-main-grid">


          {/* ===================================================
              LEFT COLUMN
          =================================================== */}

          <div className="profile-left">


            {/* ABOUT */}

            <article className="profile-card">

              <div className="profile-card-heading">

                <div>
                  <span>IDENTITY</span>
                  <h2>About me</h2>
                </div>

                <Sparkles size={19} />

              </div>


              <p className="profile-about-text">
                I'm a Computer Science student interested in
                software development, artificial intelligence,
                product building and innovation.
              </p>


              <p className="profile-about-text profile-about-second">
                I enjoy learning by building real projects,
                experimenting with new technologies, and
                connecting with people who are excited about
                creating something meaningful.
              </p>

            </article>


            {/* SKILLS */}

            <article className="profile-card">

              <div className="profile-card-heading">

                <div>
                  <span>EXPERTISE</span>
                  <h2>Skills & technologies</h2>
                </div>

                <Code2 size={19} />

              </div>


              <div className="profile-skills">

                {skills.map((skill) => (

                  <span
                    className="profile-skill"
                    key={skill}
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </article>


            {/* INNOVATIONS */}

            <article className="profile-card">

              <div className="profile-card-heading">

                <div>
                  <span>BUILT BY ME</span>
                  <h2>My innovations</h2>
                </div>

                <a href="#innovations">

                  View all

                  <ExternalLink size={14} />

                </a>

              </div>


              <div className="profile-innovations">

                {innovations.map((innovation) => (

                  <div
                    className="profile-innovation"
                    key={innovation.title}
                  >

                    <div className="innovation-icon">
                      <Lightbulb size={20} />
                    </div>


                    <div className="innovation-content">

                      <div className="innovation-title-row">

                        <div>

                          <span className="innovation-category">
                            {innovation.category}
                          </span>

                          <h3>
                            {innovation.title}
                          </h3>

                        </div>


                        <span
                          className={`innovation-status ${
                            innovation.status === "Building"
                              ? "building"
                              : "completed"
                          }`}
                        >
                          {innovation.status}
                        </span>

                      </div>


                      <p>
                        {innovation.description}
                      </p>


                      <div className="innovation-tags">

                        {innovation.tags.map((tag) => (

                          <span key={tag}>
                            {tag}
                          </span>

                        ))}

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </article>


            {/* ACTIVITY */}

            <article className="profile-card">

              <div className="profile-card-heading">

                <div>
                  <span>RECENT ACTIVITY</span>
                  <h2>Innovation journey</h2>
                </div>

                <Flame size={19} />

              </div>


              <div className="profile-activity">

                {activities.map((activity, index) => {

                  const Icon = activity.icon;

                  return (

                    <div
                      className="profile-activity-item"
                      key={activity.title}
                    >

                      <div className="activity-line">

                        <div className="activity-icon">
                          <Icon size={16} />
                        </div>

                        {index !== activities.length - 1 && (
                          <span className="activity-connector" />
                        )}

                      </div>


                      <div className="activity-content">

                        <div className="activity-title-row">

                          <h3>
                            {activity.title}
                          </h3>

                          <span>
                            {activity.time}
                          </span>

                        </div>


                        <p>
                          {activity.description}
                        </p>

                      </div>

                    </div>

                  );

                })}

              </div>

            </article>

          </div>


          {/* ===================================================
              RIGHT COLUMN
          =================================================== */}

          <aside className="profile-right">


            {/* LOOKING FOR */}

            <article className="profile-card profile-looking-card">

              <span className="profile-mini-label">
                CURRENTLY LOOKING FOR
              </span>


              <h2>
                People who want to
                <span> build.</span>
              </h2>


              <p>
                Open to collaborating with students,
                developers, designers and researchers
                on meaningful projects.
              </p>


              <div className="looking-tags">

                <span>Developers</span>
                <span>Designers</span>
                <span>Researchers</span>
                <span>Builders</span>

              </div>

            </article>


            {/* =================================================
                NEW — INNOVATION STRENGTH
            ================================================= */}

            <article className="profile-card profile-strength-card">

              <div className="profile-card-heading">

                <div>

                  <span>INNOVATION PROFILE</span>

                  <h2>
                    Innovation Strength
                  </h2>

                </div>

                <Sparkles size={19} />

              </div>


              <div className="strength-chart">

                <ResponsiveContainer
                  width="100%"
                  height={330}
                >

                  <RadarChart
                    data={innovationStrength}
                    cx="50%"
                    cy="50%"
                    outerRadius="72%"
                  >

                    <PolarGrid
                      stroke="rgba(246, 238, 223, 0.10)"
                    />

                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{
                        fill: "#a9afc1",
                        fontSize: 10,
                      }}
                    />

                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, 100]}
                      tick={false}
                      axisLine={false}
                    />

                    <Radar
                      name="Innovation Strength"
                      dataKey="value"
                      stroke="#d14b82"
                      fill="#d14b82"
                      fillOpacity={0.24}
                      strokeWidth={2}
                    />

                  </RadarChart>

                </ResponsiveContainer>

              </div>


              <div className="strength-footer">

                <div>
                  <strong>81%</strong>

                  <span>
                    Overall strength
                  </span>
                </div>


                <span className="strength-status">
                  Growing
                </span>

              </div>

            </article>


            {/* ACHIEVEMENTS */}

            <article className="profile-card">

              <div className="profile-card-heading">

                <div>

                  <span>MILESTONES</span>

                  <h2>
                    Achievements
                  </h2>

                </div>

                <Award size={19} />

              </div>


              <div className="profile-achievements">

                {achievements.map(
                  ({ icon: Icon, title, description }) => (

                    <div
                      className="profile-achievement"
                      key={title}
                    >

                      <div className="achievement-icon">
                        <Icon size={18} />
                      </div>


                      <div>

                        <h3>
                          {title}
                        </h3>

                        <p>
                          {description}
                        </p>

                      </div>

                    </div>

                  )
                )}

              </div>

            </article>


            {/* BUILDING WITH */}

            <article className="profile-card profile-building-card">

              <div className="profile-card-heading">

                <div>

                  <span>COLLABORATION</span>

                  <h2>
                    Building with others
                  </h2>

                </div>

                <Users size={19} />

              </div>


              <p className="building-description">
                Great ideas become stronger when different
                skills come together.
              </p>


              <div className="collaboration-roles">

                <div>

                  <span className="role-number">
                    01
                  </span>

                  <span>
                    Developers
                  </span>

                </div>


                <div>

                  <span className="role-number">
                    02
                  </span>

                  <span>
                    Designers
                  </span>

                </div>


                <div>

                  <span className="role-number">
                    03
                  </span>

                  <span>
                    Researchers
                  </span>

                </div>

              </div>

            </article>


            {/* AAROH IDENTITY */}

            <article className="profile-aaroh-card">

              <div className="profile-aaroh-icon">
                <Sparkles size={20} />
              </div>


              <div>

                <span>
                  AAROH IDENTITY
                </span>

                <h3>
                  Build. Connect. Inspire.
                </h3>

                <p>
                  Your profile is more than a resume.
                  It's your innovation journey.
                </p>

              </div>

            </article>

          </aside>

        </section>

      </div>

    </main>
  );
}


export default Profile;