import { DataSource, DataSourceOptions} from 'typeorm';

const Config: DataSourceOptions ={
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || ""),
  username: process.env.DB_USER || "",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "",
  synchronize: true,
  logging: false,
  entities: [],
  subscribers: [],
  migrations: [],
};

export const AppDataSource: DataSource = new DataSource(Config);