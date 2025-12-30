import { Experiment } from './types';

const experiments: Map<string, Experiment> = new Map();

export function registerExperiment(experiment: Experiment): void {
  experiments.set(experiment.metadata.id, experiment);
}

export function getExperiment(id: string): Experiment | undefined {
  return experiments.get(id);
}

export function getAllExperiments(): Experiment[] {
  return Array.from(experiments.values());
}

export function getExperimentsByTag(tag: string): Experiment[] {
  return getAllExperiments().filter((exp) =>
    exp.metadata.tags.includes(tag)
  );
}

export function getExperimentsByCategory(category: string): Experiment[] {
  return getAllExperiments().filter(
    (exp) => exp.metadata.category === category
  );
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  getAllExperiments().forEach((exp) => {
    exp.metadata.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

export function getAllCategories(): string[] {
  const categorySet = new Set<string>();
  getAllExperiments().forEach((exp) => {
    if (exp.metadata.category) {
      categorySet.add(exp.metadata.category);
    }
  });
  return Array.from(categorySet).sort();
}
