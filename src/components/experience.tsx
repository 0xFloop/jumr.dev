import clsx from "clsx";
import { motion } from "framer-motion";
import { FaDatabase } from "react-icons/fa";
import { GiProcessor } from "react-icons/gi";
import { IconType } from "react-icons/lib";
import {
  SiCplusplus,
  SiNextdotjs,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

interface Experience {
  note?: string;
  img: string;
  title: string;
  subtitle: string;
  stackIcons?: IconType[];
  period: [string, string];
  bullets: string[];
}

export const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      note: "Education",
      img: "https://www.bth.se/wp-content/uploads/2018/09/bthlogo_svart_platt.png",
      title: "Blekinge Institute of Technology",
      subtitle: "Master of Science in Software Engineering",
      stackIcons: [
        SiPython,
        SiCplusplus,
        SiTypescript,
        GiProcessor,
        FaDatabase,
      ],
      period: ["2020", "present"],
      bullets: [
        "I'm currently studying at Blekinge Institute of Technology learning all about Software Engineering, from low level programming, compilers, databases, to project management and software architecture.",
      ],
    },
    {
      note: "Open Source",
      img: "https://avatars.githubusercontent.com/u/108266839?s=200&v=4",
      title: "Create T3 App",
      subtitle: "Core OSS Maintainer",
      stackIcons: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiPrisma],
      period: ["Jun 22", "present"],
      bullets: [
        "The best way to start a full-stack, typesafe Next.js app",
        "Get started on your next idea without worrying about the comlpex project setup",
      ],
    },
    {
      note: "Open Source",
      img: "https://avatars.githubusercontent.com/u/78011399?s=200&v=4",
      title: "tRPC",
      subtitle: "Core OSS Contributor",
      stackIcons: [SiTypescript],
      period: ["Jul 22", "present"],
      bullets: [
        "Move Fast and Break Nothing. End-to-end typesafe APIs made easy.",
        "GraphQL alternative for fullstack TypeScript applications with an excellent developer experience",
      ],
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left md:flex-row"
    >
      <h3 className="section-title">Experience</h3>
      <div className="flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-accent-500/80">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.title} {...experience} />
        ))}
      </div>
    </motion.div>
  );
};

const ExperienceCard: React.FC<Experience> = (props) => {
  return (
    <article className="relative flex w-[500px] flex-shrink-0 snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        height={500}
        width={500}
        className="h-32 w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
        src={props.img}
        alt=""
      />

      {props.note && (
        <div
          className={clsx(
            "absolute right-7 top-0 rounded-lg bg-accent-500 p-4",
            {
              "bg-sky-800": props.note === "Education",
              "bg-red-900": props.note === "Open Source",
            },
          )}
        >
          {props.note}
        </div>
      )}

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-medium">{props.title}</h4>
        <p className="mt-1 text-2xl font-bold">{props.subtitle}</p>
        <div className="my-2 flex space-x-2">
          {props.stackIcons?.map((Icon, index) => (
            <Icon key={index} className="h-10 w-10" />
          ))}
        </div>

        <p className="py-5 uppercase text-gray-300">
          Start: {props.period[0]} | End: {props.period[1]}
        </p>

        <ul className="ml-5 list-disc space-y-4 text-lg">
          {props.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};
