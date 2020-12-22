# README

## Backend side configuration

- After creating an API by selecting the API section, an Application Test Application will be made automatically.
  > 1.  You can use the **Test** function to get a test version access_token for testing purpose
- Using the clientID, domain, and audience created by Test Application at the backend side.
- Notice, at the Test application, you have to set the callback URL as frontend URL

## Frontend side configuration

Create a new version of the Application by selecting the application section and configure the audience as a backend API URL path.

- Configure

> 1.  Allowed Callback URLs
> 2.  Allowed Web Origins
> 3.  Allowed Logout URLs

Feel free to use a different URL if your Application is in production already.

- Configure auth_config.json

```ts
{
  "domain": "{DOMAIN}",
  "clientId": "{CLIENT_ID}",
  "audience": "{API_IDENTIFIER}"
}
```

## Common errors

- 1. The "/" gets omitted when using domain to config jwksUri

```ts
jwtksUri: `https://${domain}/.well-known/jwks.json`;
```

- 2. Get **jwt malformed** error as forgetting config audience for SPA
