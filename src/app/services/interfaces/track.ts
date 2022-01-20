import { Track } from './top-traks';

export interface TraksResponse {
  tracks: Tracks;
}

export interface Tracks {
  href:     string;
  items:    Track[];
  limit:    number;
  next:     string;
  offset:   number;
  previous: null;
  total:    number;
}
