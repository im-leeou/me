declare module '*.svg?url' {
  import type { StaticImageData } from 'next/image';

  const content: StaticImageData;
  export default content;
}
