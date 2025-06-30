# Deployment Guide - IT-Мечта Website

## Production Build

The project is configured for production deployment with optimized builds.

### Build Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start
```

### Build Process

1. **Client Build** (`npm run build:client`):

   - Creates optimized React SPA in `dist/spa/`
   - Includes code splitting, minification, and tree shaking
   - Generates static assets with hashed filenames

2. **Server Build** (`npm run build:server`):
   - Bundles Express server in `dist/server/`
   - Excludes Node.js built-ins and external dependencies
   - Creates ES modules for modern Node.js

### Production Files Structure

```
dist/
├── spa/
│   ├── index.html
│   ├── assets/
│   │   ├── index-[hash].js
│   │   ├── index-[hash].css
│   │   └── ...
└── server/
    └── production.mjs
```

### Deployment Options

#### 1. Traditional Server (VPS/Dedicated)

```bash
# On your server
git clone <repository>
cd <project-folder>
npm install
npm run build
npm start
```

#### 2. Docker Deployment

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY dist ./dist
EXPOSE 3000
CMD ["npm", "start"]
```

#### 3. Static Hosting + API

- Deploy `dist/spa/*` to static hosting (Vercel, Netlify, etc.)
- Deploy `dist/server/*` to serverless (Vercel Functions, AWS Lambda)

### Environment Variables

No environment variables required for basic functionality.

### Performance Optimizations

- ✅ Code splitting by routes
- ✅ CSS optimization and minification
- ✅ Image optimization ready
- ✅ Tree shaking for unused code
- ✅ Gzip compression (configure on server)

### Security Considerations

- ✅ CORS configured
- ✅ No sensitive data in client code
- ✅ Form validation on both client and server
- ✅ Security headers (configure on reverse proxy)

### Monitoring

- Check `/api/ping` endpoint for health monitoring
- Monitor client errors in browser console
- Set up server logging in production

### SSL Certificate

Configure SSL certificate on your web server (nginx/apache) or use services like Cloudflare.

### CDN Configuration (Optional)

Point CDN to `dist/spa/assets/` for static assets optimization.
