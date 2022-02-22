import {createClient, getRepositoryEndpoint} from '@prismicio/client';
import {LinkResolverFunction} from '@prismicio/helpers';

export const apiEndpoint = getRepositoryEndpoint(process.env.repoName || '');
export const accessToken = process.env.access_token;

export const linkResolver: LinkResolverFunction = (doc) => {
  if(doc.type === 'uniform-page'){
    return `/${doc.uid}`
  }

  if(doc.type === 'product-page'){
    return `/product-page/${doc.uid}`
  }

  return '/';
};

export const PrismicClient = createClient(apiEndpoint, {accessToken});
