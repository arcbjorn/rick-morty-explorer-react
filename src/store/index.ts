/**
 * Import all your stores
 */
import { CharacterStore } from './character.store';
 import { LocationStore } from './location.store';
 import { EpisodeStore } from './episode.store';
 
 /**
  * Root Store Class
  */
 export class RootStore {
   characterStore: CharacterStore;
   locationStore: LocationStore;
   episodeStore: EpisodeStore;
 
   constructor() {
     this.characterStore = new CharacterStore();
     this.locationStore = new LocationStore();
     this.episodeStore = new EpisodeStore(); // easy communication with `this`
   }
 }