import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';
import IMailTemplateProvier from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailTemplateProvier {
    public async parse({ template }: IParseMailTemplateDTO): Promise<string> {
        return template;
    }
}

export default FakeMailTemplateProvider;
