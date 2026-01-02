import Link from 'next/link';
import { Experiment } from '@/lib/experiments/types';

interface ExperimentCardProps {
  experiment: Experiment;
}

export function ExperimentCard({ experiment }: ExperimentCardProps) {
  return (
    <Link
      href={`/experiments/${experiment.metadata.id}`}
      className="block"
    >
      <div className="experiment-card">
        <h3>{experiment.metadata.title}</h3>
        <p className="line-clamp-3">
          {experiment.metadata.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {experiment.metadata.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        {experiment.metadata.category && (
          <div className="category">
            Category: {experiment.metadata.category}
          </div>
        )}
      </div>
    </Link>
  );
}
