/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["rukminim1.flixcart.com","lh3.googleusercontent.com","www.jiomart.com","nest-frontend-v6.netlify.app","avatars.githubusercontent.com","i.ibb.co",'wp.alithemes.com'],
      },
      webpack: (config, { isServer }) => {
        // Add CSV loader for parsing CSV files
        config.module.rules.push({
          test: /\.csv$/,
          loader: 'csv-loader',
          options: {
            dynamicTyping: true,
            header: true,
            skipEmptyLines: true
          }
        })
    
        return config
      }
      
};

export default nextConfig;
