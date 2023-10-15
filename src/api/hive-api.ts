import { Client } from "@hiveio/dhive";

const getClient = () => new Client(["https://api.hive.blog", "https://api.hivekings.com", "https://anyx.io", "https://api.openhive.network"]);

const overrideClient = (rpcNode: string) => new Client([rpcNode]);

const getAccount = async(username: string) => {
    return await api.getClient().database.getAccounts([username]);
};

const getAccounts = async (usernames: string[]) => {
    return await api.getClient().database.getAccounts(usernames);
};

export const api = { getClient, overrideClient, getAccount, getAccounts };