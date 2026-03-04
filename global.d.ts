// Global type declarations for the project

// Allow CSS file imports
declare module '*.css' {
  const content: void
  export default content
}

// Allow SVG imports
declare module '*.svg' {
  const content: string
  export default content
}

// Allow image imports
declare module '*.png' {
  const content: string
  export default content
}

declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.jpeg' {
  const content: string
  export default content
}
