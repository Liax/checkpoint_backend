import { DataSource } from "typeorm";
import Country from "./entity/Country";

export default new DataSource({
  type: "sqlite",
  database: "./continentdb.sqlite",
  synchronize: true,
  entities: [Country],
  logging: true,
});
