import { ExperimentCard } from '@/components/ExperimentCard';
import { getAllExperiments, getAllTags } from '@/lib/experiments/registry';
import '@/experiments';

export default async function Home() {
  const experiments = getAllExperiments();
  const tags = getAllTags();

  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Experiment Playground
          </h1>
          <p className="text-gray-600 text-lg">
            A collection of experimental components and ideas
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {experiments.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No experiments found yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiments.map((experiment) => (
              <ExperimentCard key={experiment.metadata.id} experiment={experiment} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
