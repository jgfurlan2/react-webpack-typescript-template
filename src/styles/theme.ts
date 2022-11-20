import { lighten, shade, transparentize } from 'polished'

export const colors = {
  'blue-100': lighten(0.4, '#0d6efd'),
  'blue-200': lighten(0.3, '#0d6efd'),
  'blue-300': lighten(0.2, '#0d6efd'),
  'blue-400': lighten(0.1, '#0d6efd'),
  'blue-500': '#0d6efd',
  'blue-600': shade(0.1, '#0d6efd'),
  'blue-700': shade(0.2, '#0d6efd'),
  'blue-800': shade(0.3, '#0d6efd'),
  'blue-900': shade(0.4, '#0d6efd'),

  cyan: '#0dcaf0',

  'gray-0': lighten(1, '#131416'),
  'gray-100': lighten(0.737894528, '#131416'),
  'gray-200': lighten(0.52706752, '#131416'),
  'gray-300': lighten(0.3764768, '#131416'),
  'gray-400': lighten(0.268912, '#131416'),
  'gray-500': lighten(0.19208, '#131416'),
  'gray-600': lighten(0.1372, '#131416'),
  'gray-700': lighten(0.098, '#131416'),
  'gray-800': lighten(0.07, '#131416'),
  'gray-900': lighten(0.05, '#131416'),
  'gray-1000': '#131416',

  'green-100': lighten(0.4, '#198754'),
  'green-200': lighten(0.3, '#198754'),
  'green-300': lighten(0.2, '#198754'),
  'green-400': lighten(0.1, '#198754'),
  'green-500': '#198754',
  'green-600': shade(0.1, '#198754'),
  'green-700': shade(0.2, '#198754'),
  'green-800': shade(0.3, '#198754'),
  'green-900': shade(0.4, '#198754'),

  indigo: '#6610f2',
  pink: '#d63384',
  purple: '#6f42c1',

  'red-100': lighten(0.4, '#dc3545'),
  'red-200': lighten(0.3, '#dc3545'),
  'red-300': lighten(0.2, '#dc3545'),
  'red-400': lighten(0.1, '#dc3545'),
  'red-500': '#dc3545',
  'red-600': shade(0.1, '#dc3545'),
  'red-700': shade(0.2, '#dc3545'),
  'red-800': shade(0.3, '#dc3545'),
  'red-900': shade(0.4, '#dc3545'),

  teal: '#20c997',

  'yellow-100': lighten(0.4, '#ffc107'),
  'yellow-200': lighten(0.3, '#ffc107'),
  'yellow-300': lighten(0.2, '#ffc107'),
  'yellow-400': lighten(0.1, '#ffc107'),
  'yellow-500': '#ffc107',
  'yellow-600': shade(0.1, '#ffc107'),
  'yellow-700': lighten(0.1, '#fd7e14'),
  'yellow-800': '#fd7e14',
  'yellow-900': shade(0.1, '#fd7e14')
}

export const measurements = {
  'spacing-1': '4px',
  'spacing-2': '8px',
  'spacing-3': '12px',
  'spacing-4': '16px',
  'spacing-5': '20px',
  'spacing-6': '24px',

  'font-size-1': '12px',
  'font-size-2': '14px',
  'font-size-3': '16px',
  'font-size-4': '20px',
  'font-size-5': '24px',
  'font-size-6': '28px',
  'font-size-7': '32px'
}

export const theme = {
  themeName: 'dark',
  ...colors,
  ...measurements,
  shadow: `0 0 4px 4px ${transparentize(0.9, colors['gray-1000'])}`,
  'font-code': '"Roboto Mono", monospace',
  'font-regular': 'Roboto, sans-serif',
  'font-semibold': '"Roboto Semibold", sans-serif',
  'font-bold': '"Roboto Bold", sans-serif'
}
