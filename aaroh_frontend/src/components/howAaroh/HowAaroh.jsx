import { motion } from "framer-motion";
import {
  Compass,
  UsersRound,
  Hammer,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const stages = [
  {
    number: "01",
    icon: Compass,
    title: "Discover",
    description:
      "Find ideas, projects, opportunities, and inspiration from across the innovation ecosystem.",
  },
  {
    number: "02",
    icon: UsersRound,
    title: "Collaborate",
    description:
      "Find the right people, discover complementary skills, and build teams around meaningful ideas.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Build",
    description:
      "Turn ideas into real projects, manage progress, and move from concept to working innovation.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Showcase",
    description:
      "Give every innovation a life beyond submission and make the work visible to the world.",
  },
];

function HowAaroh() {
  return (
    <section className="how-aaroh" id="how-it-works">
      <div className="how-aaroh-background">
        <div className="how-aaroh-glow how-aaroh-glow-one" />
        <div className="how-aaroh-glow how-aaroh-glow-two" />
      </div>

      <div className="container how-aaroh-container">
        <motion.div
          className="how-aaroh-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="section-eyebrow">
            <span className="eyebrow-dot" />
            HOW AAROH WORKS
          </span>

          <h2>
            From idea
            <span> to impact.</span>
          </h2>

          <p>
            AAROH connects every stage of the innovation journey — giving
            students the tools, people, and visibility to turn ideas into
            something meaningful.
          </p>
        </motion.div>

        <div className="innovation-path">
          <div className="innovation-line">
            <div className="innovation-line-progress" />
          </div>

          {stages.map((stage, index) => {
            const Icon = stage.icon;

            return (
              <motion.article
                className="innovation-stage"
                key={stage.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
              >
                <div className="innovation-stage-marker">
                  <div className="innovation-stage-icon">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>
                </div>

                <div className="innovation-stage-number">
                  {stage.number}
                </div>

                <h3>{stage.title}</h3>

                <p>{stage.description}</p>

                {index < stages.length - 1 && (
                  <ArrowRight className="innovation-stage-arrow" size={20} />
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowAaroh;