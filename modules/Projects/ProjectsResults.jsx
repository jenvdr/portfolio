import ProjectCard from "@components/projectCard";
export default function ProjectsResults({ firstThreePairs, remainingPairs }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:col-span-12 pt-10 lg:pt-20">
            {firstThreePairs.map((projectPair, i) => (
                <div
                    key={i}
                    className={`lg:col-span-12 flex max-md:flex-col gap-4 mb-4 w-full ${
                        i % 2 === 0 ? "" : ""
                    }`}
                >
                    {projectPair.map((project, j) => {
                        const isOddRow = i % 2 === 0;
                        const itemWidth =
                            (j === 0 && isOddRow) || (j === 1 && !isOddRow)
                                ? "lg:w-[40%]"
                                : "lg:w-[60%]";
                        const order =
                            (i * 2 + j) % 3 === 0 ? "default" : "reverse";
                        const indexVis =
                            i * 2 + j + 1 < 10
                                ? `0${i * 2 + j + 1}`
                                : i * 2 + j + 1;
                        return (
                            <ProjectCard
                                className={`not-visible left`}
                                key={project.key}
                                project={project}
                                order={order}
                                itemWidth={itemWidth}
                                indexVis={indexVis}
                            />
                        );
                    })}
                </div>
            ))}
            <div
                className={`lg:col-span-12 flex max-md:flex-col gap-4 mb-4 w-full`}
            >
                {remainingPairs.map((project, j) => {
                    const itemWidth =
                        j === 0 || j % 2 == 0 ? "lg:w-[40%]" : "lg:w-[60%]";
                    const order = j === 0 || j % 2 == 0 ? "default" : "reverse";
                    const indexVis =
                        j + 1 + 8 < 10 ? `0${j + 1 + 8}` : j + 1 + 8;
                    return (
                        <ProjectCard
                            className={`not-visible`}
                            key={project.key}
                            project={project}
                            order={order}
                            itemWidth={itemWidth}
                            indexVis={indexVis}
                        />
                    );
                })}
            </div>
        </div>
    );
}
