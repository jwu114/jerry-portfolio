import { defineConfig } from 'dumi';

const defaultPath = '/jwu114.github.io'
const baseUrl = process.env.NODE_ENV === 'production' ? defaultPath : '/';

const logo = `${baseUrl}/logo.png`;

export default defineConfig({
  base: defaultPath,
  publicPath: `${baseUrl}/`,
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
  locales: [{ id: 'en-US', name: 'English'}],
});
