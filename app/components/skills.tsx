import React from "react";

const skills = [
    { category: "Frontend", items: ["Next.js", "React", "Tailwind CSS"]},
    { category: "Backend", items: ["Express", "Node.js"]},
    { category: "Database", items: ["MongoDB", "SQL", "Prisma"]},
    { category: "Tools", items: ["GitHub", "Postman"]},
]
export const Skill = () => {
    return (
        <section id="skills" className="py-6 max-w-2xl mx-auto  px-6">
            <h2 className="text-sm uppercase tracking-widest text-gray-800 mb-3">
                Skills
            </h2>
            <div className="space-y-8">
                {skills.map((group) => (
                    <div key={group.category}>
                        <p className="text-sm uppercase tracking-widest text-gray-700 mb-3">{group.category}</p>
                        <div className="flex flex-wrap gap-2">
                            {group.items.map((skill) => (
                                <span
                                key={skill}
                                className="px-3 py-1 text-sm border border-gray-200 rounded-full text-gray-700"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
           

        </section>
    )
}