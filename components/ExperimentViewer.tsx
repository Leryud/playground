'use client';

import { Experiment } from '@/lib/experiments/types';
import { IsolatedContainer } from '@/lib/isolation/isolated-container';
import Link from 'next/link';

interface ExperimentViewerProps {
  experiment: Experiment;
}

export function ExperimentViewer({ experiment }: ExperimentViewerProps) {
  const ExperimentComponent = experiment.component;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              ← Back to Experiments
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">
              {experiment.metadata.title}
            </h1>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            {experiment.metadata.description}
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {experiment.metadata.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <IsolatedContainer id={experiment.metadata.id}>
          <ExperimentComponent />
        </IsolatedContainer>
      </main>
    </div>
  );
}
