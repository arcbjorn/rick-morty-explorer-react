import { action, makeAutoObservable } from 'mobx';

export interface ICharacter {
  id: string;
  name?: string;
  pic?: string;
  gender?: string,
  status?: string;
}

export interface ICharacterStore {
  characters: ICharacter[];
  favouriteCharacters: ICharacter[];
  pageNumber: number;
}

export class CharacterStore implements ICharacterStore {

  characters: ICharacter[] = [];
  favouriteCharacters: ICharacter[] = [];
  pageNumber: number = 1;

  constructor() {
    makeAutoObservable(this);
  }

  @action getName = (name: string): void => {
    // if (rootStore.authStore.id) {
    //   this.name = name;
    // }
  }
}