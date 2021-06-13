import path from 'path';
import { Express } from 'express';
import { RoutingControllersOptions, useExpressServer } from "routing-controllers";

export const routes = (app: Express): void => {
    const options: RoutingControllersOptions = {
      controllers: [path.join(__dirname, '..', '/controllers/**/*{.ts,.js}')],
      middlewares: [path.join(__dirname, '..', '/middlewares/**/*{.ts,.js}')],
    };
  
    useExpressServer(app, options);
}