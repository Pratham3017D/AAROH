import { useState } from "react";
import {
  Upload,
  Lightbulb,
  Target,
  Rocket,
  X,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

function SubmitInnovation() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    problem: "",
    solution: "",
    targetUsers: "",
  });

  const [prototype, setPrototype] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const categories = [
    "AI",
    "Smart Campus",
    "Sustainability",
    "Healthcare",
    "Education",
    "Agriculture",
    "Community",
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleCategorySelect = (category) => {
    setFormData((current) => ({
      ...current,
      category,
    }));

    setCategoryOpen(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setPrototype(file);
    }
  };

  const removeFile = () => {
    setPrototype(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    console.log("Innovation submitted:", {
      ...formData,
      prototype,
    });
  };

  if (submitted) {
    return (
      <main className="submit-page">
        <div className="submit-success">
          <div className="success-icon">
            <CheckCircle2 size={38} />
          </div>

          <span>AAROH / SUBMITTED</span>

          <h1>Your innovation is live.</h1>

          <p>
            Your idea has been successfully submitted to
            the AAROH innovation ecosystem.
          </p>

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);

              setFormData({
                title: "",
                category: "",
                problem: "",
                solution: "",
                targetUsers: "",
              });

              setPrototype(null);
              setCategoryOpen(false);
            }}
          >
            Submit Another Innovation
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="submit-page">
      <div className="submit-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <section className="submit-header">
          <span className="submit-eyebrow">
            AAROH / SUBMIT
          </span>

          <h1>
            Submit Your
            <span> Innovation.</span>
          </h1>

          <p>
            Turn your idea into something the AAROH
            community can discover, support, and build.
          </p>
        </section>


        {/* =========================================
            FORM
        ========================================= */}

        <form
          className="innovation-form"
          onSubmit={handleSubmit}
        >

          {/* =======================================
              IDEA
          ======================================= */}

          <div className="form-section">

            <div className="form-section-heading">
              <div className="form-icon">
                <Lightbulb size={18} />
              </div>

              <div>
                <span>01</span>
                <h2>Tell us about your idea</h2>
              </div>
            </div>


            {/* Title */}

            <div className="form-field">

              <label htmlFor="title">
                Idea Title
                <span>*</span>
              </label>

              <input
                id="title"
                name="title"
                type="text"
                placeholder="Give your innovation a clear name"
                value={formData.title}
                onChange={handleChange}
                required
              />

            </div>


            {/* Category */}

            <div className="form-field">

              <label htmlFor="category">
                Category
                <span>*</span>
              </label>


              <div className="custom-category-select">

                <button
                  type="button"
                  className={
                    formData.category
                      ? "category-select-trigger selected"
                      : "category-select-trigger"
                  }
                  onClick={() =>
                    setCategoryOpen((current) => !current)
                  }
                  aria-haspopup="listbox"
                  aria-expanded={categoryOpen}
                >

                  <span>
                    {formData.category ||
                      "Select a category"}
                  </span>

                  <ChevronDown
                    size={18}
                    className={
                      categoryOpen
                        ? "category-chevron open"
                        : "category-chevron"
                    }
                  />

                </button>


                {categoryOpen && (
                  <div
                    className="category-dropdown"
                    role="listbox"
                  >

                    {categories.map((category) => (
                      <button
                        type="button"
                        key={category}
                        className={
                          formData.category === category
                            ? "category-option active"
                            : "category-option"
                        }
                        onClick={() =>
                          handleCategorySelect(category)
                        }
                        role="option"
                        aria-selected={
                          formData.category === category
                        }
                      >

                        <span>
                          {category}
                        </span>

                        {formData.category ===
                          category && (
                          <CheckCircle2 size={16} />
                        )}

                      </button>
                    ))}

                  </div>
                )}

              </div>


              {/* Hidden input for HTML validation */}

              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                tabIndex={-1}
                className="category-validation-input"
                aria-hidden="true"
              />

            </div>

          </div>


          {/* =======================================
              PROBLEM
          ======================================= */}

          <div className="form-section">

            <div className="form-section-heading">

              <div className="form-icon">
                <Target size={18} />
              </div>

              <div>
                <span>02</span>
                <h2>Define the problem</h2>
              </div>

            </div>


            <div className="form-field">

              <label htmlFor="problem">
                Problem Statement
                <span>*</span>
              </label>

              <textarea
                id="problem"
                name="problem"
                placeholder="What problem does your innovation solve?"
                value={formData.problem}
                onChange={handleChange}
                rows="6"
                required
              />

            </div>

          </div>


          {/* =======================================
              SOLUTION
          ======================================= */}

          <div className="form-section">

            <div className="form-section-heading">

              <div className="form-icon">
                <Rocket size={18} />
              </div>

              <div>
                <span>03</span>
                <h2>Describe your solution</h2>
              </div>

            </div>


            <div className="form-field">

              <label htmlFor="solution">
                Proposed Solution
                <span>*</span>
              </label>

              <textarea
                id="solution"
                name="solution"
                placeholder="Explain how your innovation solves the problem..."
                value={formData.solution}
                onChange={handleChange}
                rows="7"
                required
              />

            </div>

          </div>


          {/* =======================================
              TARGET USERS
          ======================================= */}

          <div className="form-section">

            <div className="form-section-heading">

              <div className="form-icon">
                <Target size={18} />
              </div>

              <div>
                <span>04</span>
                <h2>Who is it for?</h2>
              </div>

            </div>


            <div className="form-field">

              <label htmlFor="targetUsers">
                Target Users
              </label>

              <input
                id="targetUsers"
                name="targetUsers"
                type="text"
                placeholder="Who will benefit from your innovation?"
                value={formData.targetUsers}
                onChange={handleChange}
              />

            </div>

          </div>


          {/* =======================================
              PROTOTYPE
          ======================================= */}

          <div className="form-section">

            <div className="form-section-heading">

              <div className="form-icon">
                <Upload size={18} />
              </div>

              <div>
                <span>05</span>
                <h2>Show what you've built</h2>
              </div>

            </div>


            <div className="form-field">

              <label>
                Upload Prototype
              </label>


              {!prototype ? (

                <label className="upload-box">

                  <Upload size={28} />

                  <strong>
                    Click to upload or drag & drop
                  </strong>

                  <span>
                    Image, document, PDF or prototype
                  </span>

                  <small>
                    Maximum file size: 20 MB
                  </small>

                  <input
                    type="file"
                    accept="image/*,.pdf,.doc,.docx,.zip"
                    onChange={handleFileChange}
                  />

                </label>

              ) : (

                <div className="uploaded-file">

                  <div>
                    <Upload size={18} />

                    <div>

                      <strong>
                        {prototype.name}
                      </strong>

                      <span>
                        {(
                          prototype.size /
                          1024 /
                          1024
                        ).toFixed(2)}
                        {" MB"}
                      </span>

                    </div>
                  </div>


                  <button
                    type="button"
                    onClick={removeFile}
                    aria-label="Remove file"
                  >
                    <X size={17} />
                  </button>

                </div>

              )}

            </div>

          </div>


          {/* =======================================
              SUBMIT
          ======================================= */}

          <div className="form-submit-area">

            <p>
              By submitting, you agree to share your
              innovation with the AAROH community.
            </p>

            <button
              type="submit"
              className="submit-innovation-btn"
            >
              Submit Innovation
              <Rocket size={18} />
            </button>

          </div>

        </form>

      </div>
    </main>
  );
}

export default SubmitInnovation;