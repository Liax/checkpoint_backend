import { Resolver, Query } from "type-graphql";
import { Country } from "../entity/Country";
import datasource from "../db";

@Resolver()
export class CountryResolver {
  @Query(() => [Country])
  async getCountries(): Promise<Country[]> {
    return await datasource.getRepository(Country).find({});
  }
}
