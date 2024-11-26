import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const logo = (
  <>
    <link rel="icon" href="/favicon.png" type="image/png" />
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M14.683 14.828a4.055 4.055 0 0 1-1.272.858a4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62a5.963 5.963 0 0 0 2.148.903a6.035 6.035 0 0 0 3.542-.35a6.048 6.048 0 0 0 1.907-1.284c.272-.271.52-.571.734-.889l-1.658-1.119a4.147 4.147 0 0 1-.489.592z M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 2c2.953 0 5.531 1.613 6.918 4H5.082C6.469 5.613 9.047 4 12 4zm0 16c-4.411 0-8-3.589-8-8c0-.691.098-1.359.264-2H5v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h.736c.166.641.264 1.309.264 2c0 4.411-3.589 8-8 8z"
      />
    </svg>
    <span style={{ marginLeft: '.4em', fontWeight: 900, fontSize: 20 }}>berenickt</span>
  </>
)

/***
 * @see https://nextra.site/docs/docs-theme/theme-configuration
 */
const config: DocsThemeConfig = {
  logo,
  project: {
    link: 'https://github.com/berenickt',
  },
  useNextSeoProps() {
    const { route } = useRouter()
    if (route !== '/') {
      return {
        titleTemplate: '%s - berenickt',
      }
    }
  },
  darkMode: true,
  banner: {
    key: 'berenickt-release',
    text: '🎉 berenickt 블로그에 온 걸 환영합니다. 🎉',
  },
  navigation: {
    prev: true,
    next: true,
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  search: {
    placeholder: '검색어를 입력해주세요.',
  },
  footer: {
    text: `Berenickt Dev Blog © 2022~`,
  },
  // themeSwitch: {
  //   useOptions() {
  //     return {
  //       light: '라이트',
  //       dark: '다크',
  //       system: '시스템',
  //     }
  //   },
  // },
  // toc: {
  //   backToTop: true,
  // },
  editLink: {
    text: '',
  },
  feedback: {
    content: null,
  },
}

export default config
