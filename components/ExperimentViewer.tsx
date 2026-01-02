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
    <>
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-sm text-gray-600"
            >
              ← Back to Experiments
            </Link>
            <h1>{experiment.metadata.title}</h1>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            {experiment.metadata.description}
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {experiment.metadata.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <main className="container py-8 bg-gray-50">
        <IsolatedContainer id={experiment.metadata.id}>
          <ExperimentComponent />
        </IsolatedContainer>
      </main>
    </>
  );
}
