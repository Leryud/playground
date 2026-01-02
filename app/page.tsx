import { ExperimentCard } from '@/components/ExperimentCard';
import { getAllExperiments, getAllTags } from '@/lib/experiments/registry';
import '@/experiments';

export default async function Home() {
  const experiments = getAllExperiments();
  const tags = getAllTags();

  return (
    <>
      <header className="border-b">
        <div className="container py-8">
          <h1>Experiment Playground</h1>
          <p className="text-lg text-gray-600">
            A collection of experimental components and ideas
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="tag tag-rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="container py-8">
        {experiments.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No experiments found yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 grid-cols-2 grid-cols-3 gap-6">
            {experiments.map((experiment) => (
              <ExperimentCard key={experiment.metadata.id} experiment={experiment} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
