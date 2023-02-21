/// <reference types="vite/client" />

declare module 'virtual:icons/*' {
    import type { FunctionalComponent, SVGAttributes } from 'vue'
    const component: FunctionalComponent<SVGAttributes>
    export default component
  }
  declare module '~icons/*' {
    import type { FunctionalComponent, SVGAttributes } from 'vue'
    const component: FunctionalComponent<SVGAttributes>
    export default component
  }
  


  declare module '*.glb' {
    const src: string
    export default src
}