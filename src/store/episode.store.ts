import { observable, action } from 'mobx';
// import { RootStoreModel } from './index';

export interface IEpisodeStore {
  id: string;
  name?: string;
}

export class EpisodeStore implements IEpisodeStore {
//   private rootStore: RootStoreModel;

  @observable id = '';
  @observable name = '';
  @observable pic = '';

//   constructor(rootStore?: RootStoreModel) {
//     this.rootStore = rootStore;
//   }

  @action getName = (name: string): void => {
    // if (rootStore.authStore.id) {
    //   this.name = name;
    // }
  }
}