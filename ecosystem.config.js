module.exports = [{
  name: 'KeoVip-FE',
  exec_mode: 'cluster',
  instances: 1,
  script: 'yarn',
  args: "start",
  autorestart: true,
  watch: false,
  max_memory_restart: '2G',
  env: {
    NODE_ENV: 'production',
    PORT: 2278
  },
}]
