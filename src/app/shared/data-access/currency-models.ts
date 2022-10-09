//this is what is returned from our api call:
export interface CurrencyRate {
    base: string,
    date: string,
    rates: {
        //could have been like [key: number] : any for more options.
        EUR: number,
        USD: number,
    },
    success: boolean,
    timestamp: number,
    //our custom stuff to restrict the amount of api calls.
    retrievalTimestamp?: number
}

//this is for the card at the top
export interface CurrencyValue {
    base: string,
    value: number,
    regardingCode: string
}
export interface CurrencyForCard extends CurrencyValue {
    isFirst?: boolean
}

//our form interface
export class CurrencyCalculator {
    input!: number;
    inputOption!: string;
    output!: number;
    outputOption!: string;
}

//for the calculator directly.
export interface Rate {
    base: string,
    EUR: number,
    USD: number,
    [key: string]: any //to basically add "UAH with a rate 1" or whatever the base is.
}

