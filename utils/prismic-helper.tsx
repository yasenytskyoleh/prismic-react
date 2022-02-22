import Link from 'next/link';
import {linkResolver} from '../prismic-config';


// Helper function to convert Prismic Rich Text links to Next/Link components
export const customLink = (type: any, element: any, content: string, children: any, index: number) => (
  <Link key={index} href={linkResolver(element.data)}>
    <a>{content}</a>
  </Link>
);
