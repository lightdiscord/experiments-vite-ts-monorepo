import './style.css'

import { MESSAGE } from "two"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>${MESSAGE}</h1>
  </div>
`
