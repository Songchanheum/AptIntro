import * as React from 'react'
import {Global} from '@emotion/react'

export const Fonts = () => (
  <Global
    styles={`
      @font-face{ font-family:ng; src:url(NanumGothic.eot); src:local(※), url(NanumGothic.woff2) format(‘woff2’) }
      /* latin-ext */
      @font-face {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCGPrcVIT9d0c-dYA.woff) format('woff');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      `}
  />
)
