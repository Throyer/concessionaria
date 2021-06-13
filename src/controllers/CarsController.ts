import { Get, JsonController } from "routing-controllers";

@JsonController('/carros')
export default class CarsController {
    @Get()
    async index(): Promise<any[]> {
        return []
    }
}