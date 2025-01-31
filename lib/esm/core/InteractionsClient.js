var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
const apiUrl = "https://discord.com/api/v9";
export class InteractionsClient {
    constructor(token, clientID) {
        if (!token) {
            throw new Error("discord-slash-commands-client | No token provided");
        }
        if (!clientID) {
            throw new Error("discord-slash-commands-client | No clientID provided");
        }
        this.token = token;
        this.clientID = clientID;
    }
    getCommands(options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof options !== "object")
                throw new Error("options must be of type object. Received: " + typeof options);
            if (options.commandID && typeof options.commandID !== "string")
                throw new Error("commandID received but wasn't of type string. received: " +
                    typeof options.commandID);
            if (options.guildID && typeof options.guildID !== "string")
                throw new Error("guildID received but wasn't of type string. received: " + typeof options.guildID);
            let url = options.guildID
                ? `${apiUrl}/applications/${this.clientID}/guilds/${options.guildID}/commands`
                : `${apiUrl}/applications/${this.clientID}/commands`;
            if (options.commandID)
                url += `/${options.commandID}`;
            const res = yield axios.get(url, {
                headers: { Authorization: `Bot ${this.token}` },
            });
            return res.data;
        });
    }
    createCommand(options, guildID) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof options !== "object")
                throw new Error("options must be of type object. Received: " + typeof options);
            if (!options.name || ((options.type == null || options.type == 1) && !options.description))
                throw new Error("options is missing name or description property!");
            const url = guildID
                ? `${apiUrl}/applications/${this.clientID}/guilds/${guildID}/commands`
                : `${apiUrl}/applications/${this.clientID}/commands`;
            const res = yield axios.post(url, options, {
                headers: { Authorization: `Bot ${this.token}` },
            });
            return res.data;
        });
    }
    editCommand(options, commandID, guildID) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof options !== "object")
                throw new Error("options must be of type object. Received: " + typeof options);
            if (typeof commandID !== "string")
                throw new Error("commandID must be of type string. Received: " + typeof commandID);
            if (!options.name)
                throw new Error("options is missing name property!");
            if (guildID && typeof guildID !== "string")
                throw new Error("guildID received but wasn't of type string. received: " + typeof guildID);
            const url = guildID
                ? `${apiUrl}/applications/${this.clientID}/guilds/${guildID}/commands/${commandID}`
                : `${apiUrl}/applications/${this.clientID}/commands/${commandID}`;
            const res = yield axios.patch(url, options, {
                headers: { Authorization: `Bot ${this.token}` },
            });
            return res.data;
        });
    }
    deleteCommand(commandID, guildID) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof commandID !== "string")
                throw new Error("commandID must be of type string. Received: " + typeof commandID);
            const url = guildID
                ? `${apiUrl}/applications/${this.clientID}/guilds/${guildID}/commands/${commandID}`
                : `${apiUrl}/applications/${this.clientID}/commands/${commandID}`;
            const res = yield axios.delete(url, {
                headers: { Authorization: `Bot ${this.token}` },
            });
            return res.data;
        });
    }
    getCommandPermissions(guildID, commandID) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof guildID !== "string")
                throw new Error("guildID must be of type string. Received: " + typeof guildID);
            if (commandID && typeof commandID !== "string")
                throw new Error("commandID received but wasn't of type string. received: " + typeof commandID);
            const url = commandID
                ? `${apiUrl}/applications/${this.clientID}/guilds/${guildID}/commands/${commandID}/permissions`
                : `${apiUrl}/applications/${this.clientID}/guilds/${guildID}/commands/permissions`;
            const res = yield axios.get(url, {
                headers: { Authorization: `Bot ${this.token}` },
            });
            return res.data;
        });
    }
    editCommandPermissions(permissions, guildID, commandID) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Array.isArray(permissions))
                throw new Error("permissions must be of type array. Received: " + typeof permissions);
            if (typeof guildID !== "string")
                throw new Error("guildID must be of type string. Received: " + typeof guildID);
            if (typeof commandID !== "string")
                throw new Error("commandID must be of type string. Received: " + typeof commandID);
            const url = `${apiUrl}/applications/${this.clientID}/guilds/${guildID}/commands/${commandID}/permissions`;
            const res = yield axios.put(url, { permissions: permissions }, {
                headers: { Authorization: `Bot ${this.token}` },
            });
            return res.data;
        });
    }
    showModal(interaction, modal) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${apiUrl}/interactions/${interaction.id}/${interaction.token}/callback`;
            yield axios.post(url, {
                type: 9,
                data: modal
            }, {
                headers: { Authorization: `Bot ${this.token}` },
            });
        });
    }
}
