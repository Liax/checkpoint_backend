import { Resolver, Query, Mutation, Arg } from "type-graphql";
import datasource from "../db";
import Country, { CountryInput } from "../entity/Country";

@Resolver(Country)
export class CountryResolver {
  @Query(() => [Country])
  async getCountries(): Promise<Country[]> {
    return await datasource.getRepository(Country).find({});
  }

  @Mutation(() => Country)
  async createCountry(@Arg("data") data: CountryInput): Promise<Country> {
    if (data === null) throw new Error("No data in query");
    return await datasource.getRepository(Country).save(data);
  }
}
