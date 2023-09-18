import { defineConfig } from 'dumi';

const repo = 'jwu114.github.io'
export default defineConfig({
  themeConfig: {
    editLink: false,
    logo: '/logo.png',
    lastUpdated: false,
    footer: `Copyright © 2023<br /> by Jiarui Wu`,
    nprogress: false,
    prefersColor: { default: 'auto' },
    socialLinks: {
      github: 'https://github.com/jwu114',
      linkedin: 'https://www.linkedin.com/in/jiarui-jerry-wu/',
    },
    nav: [{ title: 'Projects', link: '/projects' },
          { title: 'Contact', children: [{title: 'jwu114@u.rochester.edu'},{title: 'w670699337@gmail.com'}]}],
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/'
});