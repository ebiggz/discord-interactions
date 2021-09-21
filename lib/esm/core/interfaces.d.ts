export interface getCommandsOptions {
    commandID?: string;
    guildID?: string;
}
/**
 * 1 = Chat Input (Slash command)
 * 2 = User (A UI-based command that shows up when you right click or tap on a user)
 * 3 = Message (A UI-based command that shows up when you right click or tap on a message)
 */
declare type ApplicationCommandType = 1 | 2 | 3;
export interface ApplicationCommand {
    id: string;
    type: ApplicationCommandType;
    application_id: string;
    name: string;
    description: string;
    options?: ApplicationCommandOption[];
    default_permission: boolean;
}
export interface ApplicationCommandOption {
    name: string;
    description: string;
    type: number;
    default?: boolean;
    required?: boolean;
    choices?: ApplicationCommandOptionChoice[];
    options?: ApplicationCommandOption[];
}
export interface ApplicationCommandOptionChoice {
    name: string;
    value: string;
}
export interface ApplicationOptions {
    name: string;
    description: string;
    options?: ApplicationCommandOption[];
    default_permission?: boolean;
    /**
     * If not provided, 1 (slash command) is assumed.
     */
    type?: ApplicationCommandType;
}
/**
 * Application command permissions allow you to enable or disable commands for specific users or roles within a guild.
 * {@link https://discord.com/developers/docs/interactions/slash-commands#applicationcommandpermissions See discord docs}
 */
export interface ApplicationCommandPermissions {
    /** Id of the role or user */
    id: string;
    /** The type of permission (1 = Role, 2 = User) */
    type: 1 | 2;
    /** `true` to allow, `false` to disallow */
    permission: boolean;
}
/**
 * Returned when fetching the permissions for a command in a guild.
 * {@link https://discord.com/developers/docs/interactions/slash-commands#guildapplicationcommandpermissions See discord docs}
 */
export interface GuildApplicationCommandPermissions {
    /** Id of the command */
    id: string;
    /** Id of the application the command belongs to */
    application_id: string;
    /** Id of the guild */
    guild_id: string;
    /** Array of ApplicationCommandPermissions */
    permissions: ApplicationCommandPermissions[];
}
export {};
