import { DataSource } from "typeorm";

export default new DataSource({
  type: "sqlite",
  database: "./continentdb.sqlite",
  synchronize: true,
  entities: [],
});
