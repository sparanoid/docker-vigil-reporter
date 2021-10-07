import { VigilReporter } from 'vigil-reporter';

if (!process.env.TOKEN) {
  throw new Error('No token configured!');
}

const vigilReporter = new VigilReporter({
  url        : process.env.URL,
  token      : process.env.TOKEN,
  probe_id   : process.env.PROBE_ID,
  node_id    : process.env.NODE_ID,
  replica_id : process.env.REPLICA_ID,
  interval   : process.env.INTERVAL,
  console    : console
});

process.on('SIGINT', () => {
  process.exit();
});
