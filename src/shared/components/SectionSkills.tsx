import type { ReactNode } from "react";

interface SectionSkillsProps {
  children: ReactNode;
}

const SectionSkills = ({ children }: SectionSkillsProps) => {
  return (
    <section className="flex flex-col pt-5 pb-10 min-h-[130px]">
      {children}
    </section>
  );
};

export default SectionSkills;