import { Resolver, Query, Mutation, Arg } from "type-graphql";
import datasource from "../db";
import Country, { CountryInput } from "../entity/Country";

@Resolver(Country)
export class CountryResolver {
  @Query(() => [Country])
  async getCountries(): Promise<Country[]> {
    return await datasource.getRepository(Country).find({});
  }

  @Query(() => Country)
  async getOneCountryByCode(@Arg("code") code: string): Promise<Country> {
    const countryToFind = await datasource.getRepository(Country).findOne({
      where: { code: code },
    });
    if (countryToFind === null) throw new Error("Country not found");
    return countryToFind;
  }

  @Mutation(() => Country)
  async createCountry(@Arg("data") data: CountryInput): Promise<Country> {
    if (data === null) throw new Error("No data in query");
    return await datasource.getRepository(Country).save(data);
  }
}
