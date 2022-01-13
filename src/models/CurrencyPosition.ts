import DefaultModel from "./DefaultModel";

export default interface ICurrencyPosition extends DefaultModel{
    coin:string;
    openPosition:string;
    cam:string;
    positionWithoutContract: string;
    diffWithoutContract: string;
    positionWithContract: string;
    diffWithContract: string;
    date: string;
}