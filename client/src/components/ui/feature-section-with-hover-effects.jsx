import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects({ data }) {
  const intialFeatures = [
    {
      title: "Expertise in Native & Flutter Development",
      description:
        "We specialize in iOS, Android, and Flutter, delivering high-quality native and cross-platform applications tailored to your needs.",
      icon: <IconTerminal2 />,
    },
    {
      title: "End-to-End App Development",
      description:
        "From idea validation to design, development, deployment, and maintenance, we handle everything to bring your vision to life.",
      icon: <IconEaseInOut />,
    },
    {
      title: "User-Centric UI/UX Design",
      description:
        "We create intuitive, visually appealing, and engaging interfaces that enhance user experience and retention.",
      icon: <IconHeart />,
    },
    {
      title: "Agile & Scalable Solutions",
      description:
        "We follow an agile development approach to ensure rapid iterations, scalability, and future-proof solutions.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Security & Performance Optimized",
      description:
        "We implement the latest security standards and performance optimizations to ensure your app is fast, secure, and reliable.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Continuous Support & Maintenance",
      description:
        "We offer post-launch support, regular updates, and performance monitoring to keep your app running smoothly.",
      icon: <IconHelp />,
    },
  ];

  const features = data || intialFeatures;

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}>
      {index < 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div
        className="mb-4 relative z-10 px-10 text-blue-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p
        className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
