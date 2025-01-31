import { ApplicationCommand, ApplicationCommandPermissions, ApplicationOptions, getCommandsOptions, GuildApplicationCommandPermissions } from "./interfaces";
export declare class InteractionsClient {
    private token;
    clientID: string;
    constructor(token: string, clientID: string);
    getCommands(options?: getCommandsOptions): Promise<ApplicationCommand[] | ApplicationCommand>;
    createCommand(options: ApplicationOptions, guildID?: string): Promise<ApplicationCommand>;
    editCommand(options: ApplicationOptions, commandID: string, guildID?: string): Promise<ApplicationCommand>;
    deleteCommand(commandID: string, guildID?: string): Promise<boolean>;
    getCommandPermissions(guildID: string, commandID?: string): Promise<GuildApplicationCommandPermissions[] | GuildApplicationCommandPermissions>;
    editCommandPermissions(permissions: ApplicationCommandPermissions[], guildID: string, commandID: string): Promise<GuildApplicationCommandPermissions>;
    showModal(interaction: any, modal: any): Promise<void>;
}
