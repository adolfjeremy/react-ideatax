module.exports = {
  apps: [
    {
      name: 'inertia-ssr',
      script: 'bootstrap/ssr/ssr.js', // Target langsung ke Node.js build, bukan via artisan
      instances: 'max',               // Akan menyesuaikan otomatis (karena 1 Core, akan jadi 1 instance)
      exec_mode: 'cluster',           // Mode cluster untuk stabilitas dan zero-downtime reload
      watch: false,
      max_memory_restart: '500M',     // Cegah memory leak (OOM) yang biasa terjadi di SSR
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
