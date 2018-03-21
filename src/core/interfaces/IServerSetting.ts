import { IBaseInterface } from "./IBase.interface";
interface IImport {
  [path: string]: Function[];
}
export interface IServerSettings extends IBaseInterface {
  port?: number | string;
  imports: IImport;
  [key: string]: any;
}