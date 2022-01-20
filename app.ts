import RemoteStorage from 'remotestoragejs';

const remoteStorage = new RemoteStorage();

remoteStorage.access.claim('example', 'r');
