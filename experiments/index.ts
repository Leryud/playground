import { registerExperiment } from '@/lib/experiments/registry';

import { Counter } from './counter/index';
import { metadata as counterMetadata } from './counter/metadata';

import { ColorPicker } from './color-picker/index';
import { metadata as colorPickerMetadata } from './color-picker/metadata';

import { TextTransformer } from './text-transformer/index';
import { metadata as textTransformerMetadata } from './text-transformer/metadata';

import { VideoBrush } from './video-brush/index';
import { metadata as videoBrushMetadata } from './video-brush/metadata';

registerExperiment({
  metadata: counterMetadata,
  component: Counter,
});

registerExperiment({
  metadata: colorPickerMetadata,
  component: ColorPicker,
});

registerExperiment({
  metadata: textTransformerMetadata,
  component: TextTransformer,
});

registerExperiment({
  metadata: videoBrushMetadata,
  component: VideoBrush,
});
