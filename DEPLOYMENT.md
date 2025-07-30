# GitHub Pages Deployment Guide

## Setup Instructions

### 1. Repository Setup
1. Push your code to a GitHub repository
2. Go to your repository settings on GitHub
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"

### 2. Custom Domain Setup (www.shopifly.dev)
The project is configured to use the custom domain `www.shopifly.dev`:
- **CNAME file**: Located in `public/CNAME` with the domain name
- **DNS Configuration**: Point your domain's DNS to GitHub Pages:
  - Create a CNAME record: `www.shopifly.dev` → `[your-username].github.io`
  - Or use A records pointing to GitHub Pages IPs:
    - 185.199.108.153
    - 185.199.109.153
    - 185.199.110.153
    - 185.199.111.153

### 3. Automatic Deployment
The project is configured with GitHub Actions for automatic deployment:
- Every push to the `main` branch will trigger a build and deployment
- The workflow file is located at `.github/workflows/deploy.yml`

### 4. Manual Deployment (Alternative)
You can also deploy manually using the npm script:
```bash
npm run deploy
```

### 5. Apache Server Configuration

#### Option A: Using .htaccess (Shared Hosting)
The `.htaccess` file is included in the project root and will be deployed automatically. It provides:
- Client-side routing support for React Router
- Security headers
- Static asset caching
- Gzip compression

#### Option B: Virtual Host Configuration (VPS/Dedicated Server)
Use the `apache-vhost.conf` file for full server control:

1. **Copy the built files to your server**:
   ```bash
   # After running npm run build
   scp -r dist/* user@your-server:/var/www/shopifly/dist/
   ```

2. **Configure Apache Virtual Host**:
   ```bash
   # Copy the virtual host configuration
   sudo cp apache-vhost.conf /etc/apache2/sites-available/shopifly.conf
   
   # Enable the site
   sudo a2ensite shopifly.conf
   
   # Enable required Apache modules
   sudo a2enmod rewrite
   sudo a2enmod ssl
   sudo a2enmod headers
   sudo a2enmod deflate
   sudo a2enmod expires
   
   # Restart Apache
   sudo systemctl restart apache2
   ```

3. **SSL Certificate Setup**:
   ```bash
   # Using Let's Encrypt (recommended)
   sudo certbot --apache -d shopifly.dev -d www.shopifly.dev
   
   # Or update the SSL certificate paths in the virtual host file
   ```

### 6. Configuration Details
- **Base Path**: The Vite config uses `/` as the base path for custom domain
- **Build Output**: The `dist` folder contains the built files
- **GitHub Actions**: Automatically builds and deploys on push to main branch
- **Custom Domain**: Configured for www.shopifly.dev

### 7. Accessing Your Site
After deployment and DNS configuration, your site will be available at:
```
https://www.shopifly.dev
```

## Troubleshooting

- **404 Errors**: 
  - Check that the .htaccess file is being served
  - Ensure Apache mod_rewrite is enabled
  - Verify the DocumentRoot path in virtual host
- **Assets Not Loading**: 
  - Check that all asset paths are relative
  - Verify the base path in `vite.config.ts`
- **Build Failures**: Check the Actions tab in your GitHub repository for error details
- **DNS Issues**: 
  - Use `dig www.shopifly.dev` to verify DNS propagation
  - DNS changes can take up to 48 hours to propagate globally
- **SSL Issues**: 
  - Ensure certificate paths are correct in virtual host
  - Check certificate validity with `openssl x509 -in cert.crt -text -noout`

## Server Requirements

- Apache 2.4+
- PHP not required (static site)
- SSL certificate for HTTPS
- Modules: mod_rewrite, mod_ssl, mod_headers, mod_deflate, mod_expires