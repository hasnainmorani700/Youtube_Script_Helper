
export type Tab = 'Script' | 'Image' | 'Veo' | 'Manual' | 'API';

export interface ApiKey {
  id: string;
  name: string;
  key: string;
  isEnabled: boolean;
}

export interface ManualPrompt {
  subject: { description: string; emotion: string };
  context: { location: string; time_of_day: string; lighting: string };
  action: string;
  style: { visual: string; genre: string };
  camera: { movement: string; composition: string; lens_effects: string };
  ambiance: { audio: string; music: string; sound_effects: string };
  dialogue: { text: string; delivery: string; no_subtitles: boolean };
  negatives: string[]; // Stored as a simple array, will be joined for textarea
}
