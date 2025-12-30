export interface ExperimentMetadata {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category?: string;
  createdAt: Date;
  dependencies?: string[];
}

export interface Experiment {
  metadata: ExperimentMetadata;
  component: React.ComponentType;
}
