import { Get, JsonController } from "routing-controllers";
import { createQueryBuilder, getRepository } from "typeorm";
import { Veiculo } from "../models/Veiculo";

@JsonController('/carros')
export default class CarsController {

    @Get()
    async index(): Promise<Veiculo[]> {
        return createQueryBuilder(Veiculo, 'veiculo')
            .innerJoinAndSelect('veiculo.modelo', 'modelo')
            .innerJoinAndSelect('veiculo.opcionais', 'opcional')
            .innerJoinAndSelect('modelo.marca', 'marca')
            .getMany()
    }
}