export interface CurrencyRate {
    base: string,
    date?: string,
    rates: {
        EUR: number,
        USD: number,
    },
    success: boolean,
    timestamp: number,
    retrievalTimestamp?: number
}

export interface CurrencyValue {
    base: string,
    value: number,
    regardingCode: string
}

export interface CurrencyForCard extends CurrencyValue {
    isFirst?: boolean
}