/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverComponentsExternalPackages: ['sequelize', 'pino', 'pino-pretty']
    }

}

module.exports = nextConfig

