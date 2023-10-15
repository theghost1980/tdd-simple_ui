import { Client } from "@hiveio/dhive";
import { api } from "../../api/hive-api";

describe('Hive Api tests', () => {
    //must create client and connect to a rpc node.
    it('must create dhive client', () => {
        const client = api.getClient();
        expect(client).toBeInstanceOf(Client);
    });

    it('Must override the rpc node', () => {
        const client = api.overrideClient("https://api.hive.blog");
        expect(client.address).toEqual(["https://api.hive.blog"]);
    });

    it('Must return hive user data', async() => {
        const userdata = await api.getAccount('keychain.tests');
        expect(userdata[0].name).toBe('keychain.tests');
    });

    it('Must return hive usernames data', async() => {
        const userDataList = await api.getAccounts(['theghost1980', 'keychain.tests']);
        expect(userDataList.length).toBeGreaterThan(0);
        expect(userDataList.length).toBe(2);
        expect(userDataList.find(item => item.name === 'theghost1980')).toBeDefined();
        expect(userDataList.find(item => item.name === 'theghost')).toBeUndefined();
    });
});