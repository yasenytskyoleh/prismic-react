import {PrismicClient} from '../prismic-config';
import {PrismicResponseDto} from '../interfaces/prismic-response';
import {MenuProps} from '../components/menu';

export const fetchHomePage = async () => {
  return PrismicClient.getSingle('home-page');
};

export const fetchMenu = async (): Promise<PrismicResponseDto<MenuProps>> => {
  return PrismicClient.getSingle('menu');
};

export const fetchFooter = async () => {
  return PrismicClient.getSingle('footer');
};

export const fetchProductPage = async (uid: string) => {
  return PrismicClient.getByUID('product-page', uid);
};
export const fetchProductsPage = async () => {
  return PrismicClient.getAllByType('product-page');
};
