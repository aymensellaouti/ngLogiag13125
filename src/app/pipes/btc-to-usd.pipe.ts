import { Pipe, PipeTransform } from '@angular/core';
const BTC_2_USD = 107772;
@Pipe({
  name: 'btcToUsd',
  standalone: true
})
export class BtcToUsdPipe implements PipeTransform {

  transform(amount: number, isBtc2Usd = true): number {
    return isBtc2Usd ? amount * BTC_2_USD : amount / BTC_2_USD;
  }

}
