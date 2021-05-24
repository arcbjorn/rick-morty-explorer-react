import { makeAutoObservable } from 'mobx';

export interface ICharacter {
  id: number;
  name?: string;
  image?: string;
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

  addFavouriteCharacter = (index: number): void => {
    this.favouriteCharacters.push(this.characters[index]);
  }
}