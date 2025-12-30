import Link from 'next/link';
import { Experiment } from '@/lib/experiments/types';

interface ExperimentCardProps {
  experiment: Experiment;
}

export function ExperimentCard({ experiment }: ExperimentCardProps) {
  return (
    <Link
      href={`/experiments/${experiment.metadata.id}`}
      className="block group"
    >
      <div className="experiment-card p-6 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-lg transition-all duration-200 cursor-pointer">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">
          {experiment.metadata.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {experiment.metadata.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {experiment.metadata.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        {experiment.metadata.category && (
          <div className="mt-3 text-xs text-gray-500">
            Category: {experiment.metadata.category}
          </div>
        )}
      </div>
    </Link>
  );
}
