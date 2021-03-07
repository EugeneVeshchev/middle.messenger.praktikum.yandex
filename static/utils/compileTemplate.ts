export default function compileTemplate<TProps>(template: string, props: TProps = {} as TProps): string {
    const compile = Handlebars.compile(template);
    return compile(props);
}