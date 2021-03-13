import { getRepository } from 'typeorm';

import { Clients } from '../models/Clients.model';

class ClientsService {

    public newClient = async (idUser: number, name: string, adress: string, phone: string): Promise<any> => {

        const repository = getRepository(Clients);

        let query;

        try {
            query = await repository.save({idUser, name, adress, phone});
        } catch (err) {
            return err
        }

        return query

    }

};

export default new ClientsService();