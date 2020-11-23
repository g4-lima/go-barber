import handlebars from 'handlebars';

import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';
import IMailTemplateProvier from '../models/IMailTemplateProvider';

class HandlebarsMailTemplateProvider implements IMailTemplateProvier {
    public async parse({
        template,
        variables,
    }: IParseMailTemplateDTO): Promise<string> {
        const parseTemplate = handlebars.compile(template);

        return parseTemplate(variables);
    }
}

export default HandlebarsMailTemplateProvider;
