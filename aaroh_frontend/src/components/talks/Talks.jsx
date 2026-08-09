import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Play,
  Quote,
  Sparkles,
  UsersRound,
  Hammer,
  Mic2,
} from "lucide-react";

const talkTypes = [
  {
    number: "01",
    icon: UsersRound,
    title: "Student Stories",
    description:
      "Real journeys, experiments, failures, breakthroughs, and lessons from students building their way forward.",
  },
  {
    number: "02",
    icon: Hammer,
    title: "Builder Sessions",
    description:
      "Practical conversations around turning ideas into projects, products, research, and working solutions.",
  },
  {
    number: "03",
    icon: Mic2,
    title: "Industry Perspectives",
    description:
      "Insights from people working at the intersection of technology, innovation, research, and opportunity.",
  },
];

function Talks() {
  return (
    <section className="talks-section" id="talks">
      <div className="talks-background">
        <div className="talks-grid" />

        <div className="talks-glow talks-glow-one" />
        <div className="talks-glow talks-glow-two" />

        <div className="talks-orb talks-orb-one" />
        <div className="talks-orb talks-orb-two" />
      </div>

      <div className="container talks-container">
        {/* Header */}
        <motion.div
          className="talks-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="section-eyebrow">
            <span className="eyebrow-dot" />
            AAROH TALKS
          </span>

          <h2>
            Ideas worth hearing.
            <span> Stories worth building.</span>
          </h2>

          <p>
            A space for conversations that challenge thinking, share
            experiences, and inspire students to turn curiosity into action.
          </p>
        </motion.div>

        {/* Featured Talk */}
        <motion.div
          className="talks-featured"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="talks-featured-glow" />

          <div className="talks-featured-top">
            <div className="talks-featured-label">
              <span className="talks-live-dot" />
              FEATURED CONVERSATION
            </div>

            <span className="talks-featured-number">01</span>
          </div>

          <div className="talks-featured-content">
            <div className="talks-quote-mark">
              <Quote size={30} strokeWidth={1.4} />
            </div>

            <div className="talks-featured-copy">
              <span className="talks-mini-label">
                AAROH / TALKS
              </span>

              <h3>
                Every great innovation
                <span> starts with a conversation.</span>
              </h3>

              <p>
                Ideas become stronger when they are questioned, shared,
                challenged, and built together.
              </p>

              <button className="talks-play-btn" type="button">
                <span className="talks-play-icon">
                  <Play size={16} fill="currentColor" />
                </span>

                <span>Explore Talks</span>

                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>

          {/* Decorative centre */}
          <div className="talks-stage">
            <div className="talks-stage-ring talks-stage-ring-one" />
            <div className="talks-stage-ring talks-stage-ring-two" />
            <div className="talks-stage-ring talks-stage-ring-three" />

            <motion.div
              className="talks-stage-core"
              animate={{
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles size={28} strokeWidth={1.4} />
            </motion.div>
          </div>
        </motion.div>

        {/* Talk Categories */}
        <div className="talks-types">
          {talkTypes.map((talk, index) => {
            const Icon = talk.icon;

            return (
              <motion.article
                className="talk-type-card"
                key={talk.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -7 }}
              >
                <div className="talk-type-top">
                  <span>{talk.number}</span>

                  <div className="talk-type-icon">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>
                </div>

                <h3>{talk.title}</h3>

                <p>{talk.description}</p>

                <div className="talk-type-line" />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          className="talks-bottom"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span />
          <p>
            Listen.
            <strong> Learn. Question. Build.</strong>
          </p>
          <span />
        </motion.div>
      </div>
    </section>
  );
}

export default Talks;