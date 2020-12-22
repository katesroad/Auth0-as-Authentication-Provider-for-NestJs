# Sample code for using auth0 as identity provider

## This sample code demostrates two ways

- Using middleware
  > /api path uses middleware for authentication
- Using JWT strategy
  > /guards uses JWT strategy togther with Nest.js Guards

## Configuration

Please create a config.ts under src directory in this format

```ts
// value comes from AppTest machine to machine type, call back is http://localhost:3000
export default function () {
  return {
    clientId: <Your ClientID>,
    domain: <Your Domain>
    audience: <Your audience>
  };
}
```

## References

- [Using Jwt strategy](https://auth0.com/blog/developing-a-secure-api-with-nestjs-adding-authorization/)

- [Using middleware](https://auth0.com/blog/modern-full-stack-development-with-nestjs-react-typescript-and-mongodb-part-1/)
