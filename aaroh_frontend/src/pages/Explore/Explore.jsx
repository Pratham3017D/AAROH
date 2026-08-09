import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Heart,
  MessageCircle,
  Bookmark,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import innovations from "../../data/innovations";

function Explore() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [saved, setSaved] = useState([]);

  const categories = [
    "All",
    "AI",
    "Smart Campus",
    "Sustainability",
    "Healthcare",
    "Education",
    "Agriculture",
    "Community",
  ];

  /* ---------------------------------------------
     FILTER INNOVATIONS
  --------------------------------------------- */

  const filteredInnovations = useMemo(() => {
    return innovations.filter((innovation) => {
      const matchesCategory =
        activeCategory === "All" ||
        innovation.category === activeCategory;

      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        innovation.title.toLowerCase().includes(searchText) ||
        innovation.description.toLowerCase().includes(searchText) ||
        innovation.creator.toLowerCase().includes(searchText) ||
        innovation.category.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  /* ---------------------------------------------
     SAVE / UNSAVE INNOVATION
  --------------------------------------------- */

  const toggleSave = (id) => {
    setSaved((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <main className="explore-page">
      <div className="explore-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <section className="explore-header">
          <div>
            <span className="explore-eyebrow">
              <Sparkles size={14} />
              AAROH / EXPLORE
            </span>

            <h1>
              Discover ideas.
              <span> Find what's next.</span>
            </h1>

            <p>
              Explore innovative projects built by students,
              discover new ideas, and find opportunities to
              collaborate.
            </p>
          </div>

          <Link
            to="/submit"
            className="explore-submit-btn"
          >
            Submit Innovation
            <ArrowUpRight size={18} />
          </Link>
        </section>

        {/* =========================================
            SEARCH + FILTERS
        ========================================= */}

        <section className="explore-controls">

          {/* Search */}
          <div className="explore-search">
            <Search size={20} />

            <input
              type="text"
              placeholder="Search innovations, creators, categories..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />
          </div>

          {/* Categories */}
          <div className="explore-categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "category-btn active"
                    : "category-btn"
                }
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {category}
              </button>
            ))}
          </div>

        </section>

        {/* =========================================
            TRENDING INNOVATIONS
        ========================================= */}

        {activeCategory === "All" && !search && (
          <section className="explore-trending">

            <div className="explore-section-heading">
              <div>
                <span>FEATURED</span>
                <h2>Trending Innovations</h2>
              </div>

              <p>
                What students are building right now.
              </p>
            </div>

            <div className="trending-grid">

              {innovations
                .filter(
                  (innovation) => innovation.trending
                )
                .slice(0, 3)
                .map((innovation) => (
                  <Link
                    key={innovation.id}
                    to={`/innovation/${innovation.id}`}
                    className="trending-card"
                  >
                    <div className="trending-card-top">

                      <span>
                        {innovation.category}
                      </span>

                      <ArrowUpRight size={18} />

                    </div>

                    <h3>
                      {innovation.title}
                    </h3>

                    <p>
                      {innovation.description}
                    </p>

                    <div className="trending-card-bottom">

                      <span>
                        {innovation.creator}
                      </span>

                      <span>
                        ♥ {innovation.likes}
                      </span>

                    </div>
                  </Link>
                ))}

            </div>

          </section>
        )}

        {/* =========================================
            ALL INNOVATIONS
        ========================================= */}

        <section className="explore-ideas">

          <div className="explore-section-heading">

            <div>
              <span>DISCOVER</span>

              <h2>
                {search || activeCategory !== "All"
                  ? "Search Results"
                  : "All Innovations"}
              </h2>
            </div>

            <p>
              {filteredInnovations.length} innovations
            </p>

          </div>

          {/* =======================================
              INNOVATION CARDS
          ======================================= */}

          {filteredInnovations.length > 0 ? (

            <div className="innovation-grid">

              {filteredInnovations.map(
                (innovation) => (
                  <article
                    className="innovation-card"
                    key={innovation.id}
                  >

                    {/* Card Top */}
                    <div className="innovation-card-top">

                      <span className="innovation-category">
                        {innovation.category}
                      </span>

                      <button
                        type="button"
                        className={
                          saved.includes(
                            innovation.id
                          )
                            ? "save-btn saved"
                            : "save-btn"
                        }
                        onClick={() =>
                          toggleSave(
                            innovation.id
                          )
                        }
                        aria-label={
                          saved.includes(
                            innovation.id
                          )
                            ? "Remove from saved"
                            : "Save innovation"
                        }
                      >
                        <Bookmark
                          size={18}
                          fill={
                            saved.includes(
                              innovation.id
                            )
                              ? "currentColor"
                              : "none"
                          }
                        />
                      </button>

                    </div>

                    {/* Title */}
                    <h3>
                      {innovation.title}
                    </h3>

                    {/* Description */}
                    <p>
                      {innovation.description}
                    </p>

                    {/* Technologies */}
                    <div className="technology-list">

                      {innovation.technologies.map(
                        (technology) => (
                          <span key={technology}>
                            {technology}
                          </span>
                        )
                      )}

                    </div>

                    {/* Card Footer */}
                    <div className="innovation-card-footer">

                      {/* Creator */}
                      <div className="creator-info">

                        <div className="creator-avatar">
                          {innovation.creator.charAt(
                            0
                          )}
                        </div>

                        <div>
                          <strong>
                            {innovation.creator}
                          </strong>

                          <span>
                            {innovation.team}
                          </span>
                        </div>

                      </div>

                      {/* Stats */}
                      <div className="innovation-stats">

                        <span>
                          <Heart size={15} />
                          {innovation.likes}
                        </span>

                        <span>
                          <MessageCircle size={15} />
                          {innovation.comments}
                        </span>

                      </div>

                    </div>

                    {/* =================================
                        VIEW INNOVATION
                    ================================= */}

                    <Link
                      to={`/innovation/${innovation.id}`}
                      className="view-innovation"
                    >
                      <span>
                        View Innovation
                      </span>

                      <span className="view-innovation-arrow">
                        <ArrowUpRight size={17} />
                      </span>
                    </Link>

                  </article>
                )
              )}

            </div>

          ) : (

            /* =======================================
               NO RESULTS
            ======================================= */

            <div className="empty-results">

              <Search size={30} />

              <h3>
                No innovations found
              </h3>

              <p>
                Try another search term or choose a
                different category.
              </p>

            </div>

          )}

        </section>

      </div>
    </main>
  );
}

export default Explore;