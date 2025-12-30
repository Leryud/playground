import { notFound } from 'next/navigation';
import { ExperimentViewer } from '@/components/ExperimentViewer';
import { getExperiment } from '@/lib/experiments/registry';
import '@/experiments';

interface ExperimentPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const { getAllExperiments } = await import('@/lib/experiments/registry');
  const experiments = getAllExperiments();
  return experiments.map((exp) => ({
    id: exp.metadata.id,
  }));
}

export default async function ExperimentPage({ params }: ExperimentPageProps) {
  const { id } = await params;
  const experiment = getExperiment(id);

  if (!experiment) {
    notFound();
  }

  return <ExperimentViewer experiment={experiment} />;
}
