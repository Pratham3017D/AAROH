import { motion } from "framer-motion";
import {
  Lightbulb,
  Search,
  UsersRound,
  Hammer,
  GraduationCap,
  Presentation,
  Rocket,
} from "lucide-react";

const lifecycle = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Idea",
    description:
      "Every innovation starts with a spark. Capture ideas before they get lost.",
  },
  {
    number: "02",
    icon: Search,
    title: "Research",
    description:
      "Explore existing projects, research, and related ideas before building.",
  },
  {
    number: "03",
    icon: UsersRound,
    title: "Team",
    description:
      "Find people with the skills and interests needed to turn the idea into reality.",
  },
  {
    number: "04",
    icon: Hammer,
    title: "Build",
    description:
      "Develop the solution, track progress, and turn the concept into something real.",
  },
  {
    number: "05",
    icon: GraduationCap,
    title: "Faculty Review",
    description:
      "Get guidance, feedback, and validation from faculty throughout the journey.",
  },
  {
    number: "06",
    icon: Presentation,
    title: "Showcase",
    description:
      "Document the innovation and give the project a permanent place in the ecosystem.",
  },
  {
    number: "07",
    icon: Rocket,
    title: "Opportunity",
    description:
      "Move beyond submission toward hackathons, research, recruitment, startups, and impact.",
  },
];

function InnovationLifecycle() {
  return (
    <section className="innovation-lifecycle" id="lifecycle">
      <div className="lifecycle-background">
        <div className="lifecycle-glow lifecycle-glow-one" />
        <div className="lifecycle-glow lifecycle-glow-two" />
      </div>

      <div className="container lifecycle-container">

        {/* Header */}
        <motion.div
          className="lifecycle-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">
            <span className="eyebrow-dot" />
            INNOVATION LIFECYCLE
          </span>

          <h2>
            Every innovation
            <span> has a journey.</span>
          </h2>

          <p>
            AAROH keeps that journey alive — from the first spark of an idea
            to the opportunities that come after it.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="lifecycle-timeline">
          <div className="lifecycle-line">
            <div className="lifecycle-line-progress" />
          </div>

          {lifecycle.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 !== 0;

            return (
              <motion.div
                className={`lifecycle-item ${
                  isEven ? "lifecycle-item-even" : ""
                }`}
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
              >
                <div className="lifecycle-card">
                  <div className="lifecycle-card-top">
                    <span>{item.number}</span>

                    <div className="lifecycle-icon">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>

                <div className="lifecycle-node">
                  <div className="lifecycle-node-inner" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          className="lifecycle-bottom"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="lifecycle-bottom-line" />

          <p>
            A project doesn't end when it's submitted.
            <strong> That's where its next chapter begins.</strong>
          </p>

          <span className="lifecycle-bottom-line" />
        </motion.div>
      </div>
    </section>
  );
}

export default InnovationLifecycle;