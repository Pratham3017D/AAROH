import { Link, useParams } from "react-router-dom";

import {
  ArrowLeft,
  ArrowUpRight,
  Bookmark,
  Heart,
  MessageCircle,
  Users,
  CheckCircle2,
  Code2,
  ExternalLink,
  Target,
  Lightbulb,
  Globe2,
} from "lucide-react";

import innovations from "../../data/innovations";

function InnovationDetails() {
  const { id } = useParams();

  const innovation = innovations.find(
    (item) => item.id === Number(id)
  );

  /* ---------------------------------------------
     PROJECT NOT FOUND
  --------------------------------------------- */

  if (!innovation) {
    return (
      <main className="innovation-details-page">
        <div className="innovation-not-found">

          <span>AAROH / 404</span>

          <h1>
            Innovation not found.
          </h1>

          <p>
            The innovation you're looking for doesn't
            exist or may have been removed.
          </p>

          <Link to="/explore">
            <ArrowLeft size={17} />
            Back to Explore
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="innovation-details-page">

      <div className="innovation-details-container">

        {/* =========================================
            BACK
        ========================================= */}

        <Link
          to="/explore"
          className="innovation-back"
        >
          <ArrowLeft size={17} />
          Back to Explore
        </Link>


        {/* =========================================
            HERO
        ========================================= */}

        <section className="innovation-detail-hero">

          <div className="innovation-detail-main">

            <div className="innovation-detail-category">
              {innovation.category}
            </div>

            <h1>
              {innovation.title}
            </h1>

            <p className="innovation-detail-description">
              {innovation.description}
            </p>


            {/* Creator */}

            <div className="innovation-detail-creator">

              <div className="detail-avatar">
                {innovation.creator.charAt(0)}
              </div>

              <div>
                <span>
                  Created by
                </span>

                <strong>
                  {innovation.creator}
                </strong>
              </div>


              <div className="creator-divider" />


              <div>
                <span>
                  Team
                </span>

                <strong>
                  {innovation.team}
                </strong>
              </div>

            </div>

          </div>


          {/* Action Card */}

          <div className="innovation-action-card">

            <div className="action-card-label">
              INNOVATION
            </div>

            <div className="action-card-status">
              <CheckCircle2 size={17} />
              Active Project
            </div>


            <button
              type="button"
              className="collaborate-btn"
            >
              <Users size={18} />
              Collaborate
            </button>


            <div className="action-links">

              <button type="button">
                <Heart size={17} />
                {innovation.likes}
              </button>

              <button type="button">
                <MessageCircle size={17} />
                {innovation.comments}
              </button>

              <button type="button">
                <Bookmark size={17} />
                Save
              </button>

            </div>

          </div>

        </section>


        {/* =========================================
            PROJECT CONTENT
        ========================================= */}

        <section className="innovation-detail-grid">


          {/* =======================================
              LEFT CONTENT
          ======================================= */}

          <div className="innovation-detail-content">


            {/* Problem */}

            <article className="detail-section">

              <span className="detail-section-number">
                01
              </span>

              <div>

                <div className="detail-title-row">
                  <Target size={20} />
                  <h2>
                    The Problem
                  </h2>
                </div>

                <p>
                  {innovation.problem}
                </p>

              </div>

            </article>


            {/* Solution */}

            <article className="detail-section">

              <span className="detail-section-number">
                02
              </span>

              <div>

                <div className="detail-title-row">
                  <Lightbulb size={20} />
                  <h2>
                    Proposed Solution
                  </h2>
                </div>

                <p>
                  {innovation.solution}
                </p>

              </div>

            </article>


            {/* Target Users */}

            <article className="detail-section">

              <span className="detail-section-number">
                03
              </span>

              <div>

                <div className="detail-title-row">
                  <Users size={20} />
                  <h2>
                    Target Users
                  </h2>
                </div>

                <p>
                  {innovation.targetUsers}
                </p>

              </div>

            </article>


            {/* Impact */}

            <article className="detail-section">

              <span className="detail-section-number">
                04
              </span>

              <div>

                <div className="detail-title-row">
                  <Globe2 size={20} />
                  <h2>
                    Expected Impact
                  </h2>
                </div>

                <p>
                  {innovation.impact}
                </p>

              </div>

            </article>


            {/* Technologies */}

            <article className="detail-section">

              <span className="detail-section-number">
                05
              </span>

              <div>

                <div className="detail-title-row">
                  <Code2 size={20} />
                  <h2>
                    Technology Stack
                  </h2>
                </div>


                <div className="detail-tech-list">

                  {innovation.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}

                </div>

              </div>

            </article>


            {/* Team */}

            <article className="detail-section">

              <span className="detail-section-number">
                06
              </span>

              <div>

                <div className="detail-title-row">
                  <Users size={20} />
                  <h2>
                    Team
                  </h2>
                </div>


                <div className="detail-team-list">

                  {innovation.teamMembers.map(
                    (member, index) => (
                      <div
                        className="detail-team-member"
                        key={member}
                      >

                        <div className="team-member-avatar">
                          {member.charAt(0)}
                        </div>

                        <div>
                          <strong>
                            {member}
                          </strong>

                          <span>
                            {index === 0
                              ? "Project Lead"
                              : "Team Member"}
                          </span>
                        </div>

                      </div>
                    )
                  )}

                </div>

              </div>

            </article>

          </div>


          {/* =======================================
              SIDEBAR
          ======================================= */}

          <aside className="innovation-detail-sidebar">


            {/* Stats */}

            <div className="detail-sidebar-card">

              <span>
                PROJECT STATS
              </span>

              <div className="project-stat">

                <strong>
                  {innovation.likes}
                </strong>

                <small>
                  Likes
                </small>

              </div>


              <div className="project-stat">

                <strong>
                  {innovation.comments}
                </strong>

                <small>
                  Comments
                </small>

              </div>


              <div className="project-stat">

                <strong>
                  {innovation.technologies.length}
                </strong>

                <small>
                  Technologies
                </small>

              </div>

            </div>


            {/* Links */}

            <div className="detail-sidebar-card">

              <span>
                PROJECT LINKS
              </span>


              <a
                href={innovation.demo}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={17} />

                Live Demo

                <ArrowUpRight size={15} />
              </a>


              <a
                href={innovation.repository}
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={17} />

                Repository

                <ArrowUpRight size={15} />
              </a>

            </div>


            {/* Collaboration */}

            <div className="detail-sidebar-card collaboration-card">

              <span>
                WANT TO BUILD?
              </span>

              <h3>
                Have something to contribute?
              </h3>

              <p>
                Connect with the team and help take
                this innovation further.
              </p>


              <button type="button">

                Join the Team

                <ArrowUpRight size={16} />

              </button>

            </div>

          </aside>

        </section>

      </div>

    </main>
  );
}

export default InnovationDetails;