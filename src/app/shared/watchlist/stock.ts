export class Stock {
  constructor(public metaInfo: object[],
              public pgr: object[],
              public fundamentalData: object,
              public status: string) {
  }

  getStockSymbol(): number {
    return this.metaInfo[0]['symbol'];
  }

  getStockName(): string {
    return this.metaInfo[0]['name'];
  }

  getListRating(): number {
    return this.metaInfo[0]['listRating'];
  }

  getIndustryName(): string {
    return this.metaInfo[0]['industry_name']
  }

  getChange(): number {
    return this.metaInfo[0]['Change'];
  }

  getFundamentalData(): object {
    return this.fundamentalData;
  }

  getPGR(): string {
    return this.pgr[0]['PGR Value'];
  }

  getFinancials(): object[] {
    return this.pgr[1]['Financials'];
  }

  getEarnings(): object[] {
    return this.pgr[2]['Earnings'];
  }

  getTechnicals(): object[] {
    return this.pgr[3]['Technicals'];
  }

  getExperts(): object[] {
    return this.pgr[4]['Experts'];
  }

  getCorrectedPgr(): object {
    return this.pgr[5]['Corrected PGR Value'];
  }

  getPGRStats(): object {
    return this.pgr[6];
  }
}
