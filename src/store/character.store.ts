import { makeAutoObservable } from "mobx";

export interface ICharacter {
  id: number;
  name: string;
  image: string;
  gender: string;
  status: string;
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

  addFavouriteCharacter = (id: number): void => {
    const selected = this.characters.find((c) => c.id === id);
    if (!selected) return console.log("Character not found in the list");
    if (!this.favouriteCharacters.includes(selected)) {
      this.favouriteCharacters.push(selected);
    }
  };
}
