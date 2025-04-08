export interface Game {
  id: number;
  name: string;
  description?: string;
  released?: string;
  rating?: number;
  background_image?: string;
  platforms?: {
    platform: {
      id: number;
      name: string;
      slug: string;
    };
  }[];
}
