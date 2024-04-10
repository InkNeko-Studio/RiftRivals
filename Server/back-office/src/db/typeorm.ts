import { DataSource } from "typeorm"
import { User } from './entities/user.entity';
import { Profile } from './entities/profile.entity';
import { Wallet } from './entities/wallet.entity';
import { CharacterBase } from "./entities/character-base.entity";

const ConnectionDS = new DataSource({
    type: 'postgres',
    //host: 'rift-rivals-database',
    host: 'localhost',
    port: 5432,
    password: 'riftpassword',
    username: 'riftuser',
    database: 'riftdb',
    entities: [User, Profile, Wallet, CharacterBase],
    synchronize: true,
    logging: true,
});

export const useConnection = async (): Promise<DataSource> => {
    if (!ConnectionDS.isInitialized) {
        await ConnectionDS.initialize()
            .then(() => {
                console.log("Data Source has been initialized!")
            })
            .catch((err) => {
                console.error("Error during Data Source initialization", err)
            })
    }
    
    return ConnectionDS;
}