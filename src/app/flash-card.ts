export class FlashCard {
  showDetail: boolean;
  constructor(public id: number, public title: string, public detail: string){
    this.showDetail = false;
  } 
}
