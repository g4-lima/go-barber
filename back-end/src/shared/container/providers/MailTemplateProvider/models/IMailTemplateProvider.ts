import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';

export default interface IMailTmeplateProvider {
    parse(data: IParseMailTemplateDTO): Promise<string>;
}
