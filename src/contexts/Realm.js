import React, { useEffect } from "react";
import * as Realm from "realm-web";

const atlasConfig = {
  appId: "application-0-eixux",
  appUrl:
    "https://realm.mongodb.com/groups/653bbde5a3376d5b13ef3e87/apps/65acc165c0164e00a20d8920",
  baseUrl: "https://realm.mongodb.com",
  clientApiBaseUrl: "https://us-east-1.aws.realm.mongodb.com",
  dataApiBaseUrl: "https://us-east-1.aws.data.mongodb-api.com",
  dataExplorerLink:
    "https://cloud.mongodb.com/links/653bbde5a3376d5b13ef3e87/explorer/eve/database/collection/find",
  dataSourceName: "mongodb-atlas",
};
const appId = atlasConfig.appId;

const { baseUrl } = atlasConfig;

function createApp(id) {
  return new Realm.App({ id, baseUrl });
}

const RealmContext = React.createContext(null);

export function RealmProvider({ children }) {
  const [app, setApp] = React.useState(createApp(appId));
  React.useEffect(() => {
    setApp(createApp(appId));
  }, [appId]);
  const [currentUser, setCurrentUser] = React.useState(app.currentUser);

  const logIn = React.useCallback(
    async (loginType, credentials) => {
      try {
        let userCredentials;
        switch (loginType) {
          case 'email':
            userCredentials = Realm.Credentials.emailPassword(credentials.email, credentials.password);
            break;
          case 'google':
            userCredentials = Realm.Credentials.google(credentials.googleToken);
            break;
          default:
            await app.logIn(
              Realm.Credentials.apiKey(
                "lf1rng39vQwaTUTJP3yHosOT6eQ57KLeYVGYKlJWkp8A1GGCyHjSFwzLZrdlNa0k"
              )
            );
        }

        app.logIn(userCredentials)
        
      } catch (err) {
        console.log(err)
        return;
      }
      setCurrentUser(app.currentUser);
    },
    [app]
  );
  useEffect(() => {
    if (!currentUser) {
      logIn();
    }
  }, [currentUser]);
  // Wrap the current user's logOut function to remove the logged out user from state
  const logOut = React.useCallback(async () => {
    try {
      const user = app.currentUser;
      await user?.logOut();
      await app.removeUser(user);
    } catch (err) {
      console.error(err);
    }
    // In this App there will only be one logged in user at a time, so
    // the new current user will be null. If you add support for
    // multiple simultaneous user logins, this updates to another logged
    // in account if one exists.
    setCurrentUser(app.currentUser);
  }, [app]);

  const signUp = React.useCallback(
    async (email, password) => {
      try {
        await app.emailPasswordAuth.registerUser(email, password);
      } catch (e) {
        console.log(err)
      }
    },
    [app]);

  // Override the App's currentUser & logIn properties + include the app-level logout function
  const appContext = React.useMemo(() => {
    return { ...app, currentUser, logIn, logOut, signUp };
  }, [app, currentUser, logIn, logOut, signUp]);

  return (
    <RealmContext.Provider value={appContext}>{children}</RealmContext.Provider>
  );
}

export function useRealm() {
  const app = React.useContext(RealmContext);
  if (!app) {
    throw new Error(
      `No App Services App found. Make sure to call useRealm() inside of a <RealmProvider />.`
    );
  }
  return app;
}
