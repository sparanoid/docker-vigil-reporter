# Docker Vigil Reporter

[Vigil Reporter for Node](https://github.com/valeriansaliou/node-vigil-reporter) in Docker

- [Docker Hub](https://hub.docker.com/r/sparanoid/vigil-reporter)
- [ghcr.io](https://github.com/users/sparanoid/packages/container/package/vigil-reporter)

## Usage

Prepare your `.env` file (or you can pass environment variables directly from commands):

```ini
URL=https://status.example.com/
TOKEN=YOUR_TOKEN_SECRET
PROBE_ID=relay
NODE_ID=socket-client
REPLICA_ID=192.168.1.10
INTERVAL=30
```

```bash
# Docker Hub
docker run --env-file=.env sparanoid/vigil-reporter:latest

# GitHub Container Registry
docker run --env-file=.env ghcr.io/sparanoid/vigil-reporter:latest
```

## Development

```
yarn install
yarn start
```

## Known Issues

Metrics may be incorrect since probe is running inside the container.

## License

MIT
