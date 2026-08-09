import { motion } from "framer-motion";
import {
  Layers3,
  CopyCheck,
  UsersRound,
  EyeOff,
  ArrowUpRight,
} from "lucide-react";

const problems = [
  {
    number: "01",
    icon: Layers3,
    title: "Scattered Projects",
    description:
      "Innovation gets buried across departments, semesters, and disconnected submissions.",
  },
  {
    number: "02",
    icon: CopyCheck,
    title: "Repeated Ideas",
    description:
      "Students unknowingly rebuild what already exists because past innovations are difficult to discover.",
  },
  {
    number: "03",
    icon: UsersRound,
    title: "Finding Teams",
    description:
      "Great ideas struggle to find the right people with the skills needed to bring them to life.",
  },
  {
    number: "04",
    icon: EyeOff,
    title: "Unseen Talent",
    description:
      "Recruiters rarely see what students actually build beyond a resume and a list of skills.",
  },
];

function WhyAaroh() {
  return (
    <section className="why-aaroh" id="features">
      <div className="why-aaroh-background">
        <div className="why-aaroh-glow why-aaroh-glow-one" />
        <div className="why-aaroh-glow why-aaroh-glow-two" />
        <div className="why-aaroh-grid" />
      </div>

      <div className="container why-aaroh-container">
        <motion.div
          className="why-aaroh-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="why-aaroh-heading">
            <span className="section-eyebrow">
              <span className="eyebrow-dot" />
              WHY AAROH
            </span>

            <h2>
              Great ideas shouldn't
              <span> disappear.</span>
            </h2>
          </div>

          <div className="why-aaroh-description">
            <p>
              Universities create thousands of ideas every year. But once a
              project is submitted, most of them become forgotten files.
            </p>

            <p>
              AAROH exists to change that — giving every innovation a place to
              be discovered, built, and remembered.
            </p>

            <div className="why-aaroh-arrow">
              <ArrowUpRight size={18} />
              <span>The problem we're solving</span>
            </div>
          </div>
        </motion.div>

        <div className="problem-grid">
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <motion.article
                className="problem-card"
                key={problem.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8 }}
              >
                <div className="problem-card-top">
                  <span className="problem-number">{problem.number}</span>

                  <div className="problem-icon">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>
                </div>

                <div className="problem-card-content">
                  <h3>{problem.title}</h3>

                  <p>{problem.description}</p>
                </div>

                <div className="problem-card-line" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyAaroh;