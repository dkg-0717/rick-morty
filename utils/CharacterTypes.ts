export interface Character {
  id: number;
  name: string;
  gender: string;
  species: string;
  status: string;
  origin: Origin;
  image?: string;
  location: Location;
  episode: []
}

interface Location {
  name: string;
}

interface Origin {
  name: string;
}