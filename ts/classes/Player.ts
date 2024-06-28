import { IsPlayer } from '../js/isPlayer.js';

export class Play implements IsPlayer{
  constructor(
    public name: string,
    private age: number,
    public position: string,
    readonly team: string,
  ) { }
  
  play() {
    console.log("playing");
  }
}