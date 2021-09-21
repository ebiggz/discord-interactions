export interface getCommandsOptions {
    commandID?: string;
    guildID?: string;
}

/**
 * 1 = Chat Input (Slash command)
 * 2 = User (A UI-based command that shows up when you right click or tap on a user)
 * 3 = Message (A UI-based command that shows up when you right click or tap on a message)
 */
type ApplicationCommandType = 1 | 2 | 3

// ApplicationCommand https://discord.com/developers/docs/interactions/slash-commands#applicationcommand
export interface ApplicationCommand {
    id: string;
    /** 
     * If not provided, 1 (slash command) is assumed.
     */
    type?: ApplicationCommandType;
    application_id: string;
    name: string;
    description: string;
    options?: ApplicationCommandOption[];
}

// ApplicationCommandOption https://discord.com/developers/docs/interactions/slash-commands#applicationcommandoption
export interface ApplicationCommandOption {
    name: string;
    description: string;
    type: number;
    default?: boolean;
    required?: boolean;
    choices?: ApplicationCommandOptionChoice[];
    options?: ApplicationCommandOption[];
}

// ApplicationCommandOptionType https://discord.com/developers/docs/interactions/slash-commands#applicationcommandoptiontype

//type ApplicationCommandOptionType = "SUB_COMMAND": 1 | "SUB_COMMAND_GROUP": 2 | "STRING": 3 | "INTEGER": 4 | "BOOLEAN": 5 |  "USER": 6 | "CHANNEL": 7 | "ROLE": 8;
export interface ApplicationCommandOptionChoice {
    name: string;
    value: string;
}
export interface ApplicationOptions {
    name: string;
    description: string;
    options?: ApplicationCommandOption[];
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
