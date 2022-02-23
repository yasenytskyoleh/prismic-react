import '../styles/globals.css';
import {PrismicClient} from '../prismic-config';
import NextApp, {AppInitialProps} from 'next/app';
import {Layout} from '../components';
import {LayoutProps} from '../components/layout';
import {fetchFooter, fetchMenu} from '../utils/queries';

export interface AppLayoutInitialProps extends AppInitialProps {
  props: LayoutProps;
}


export default class MyApp extends NextApp<AppLayoutInitialProps> {

  static async getInitialProps(): Promise<AppLayoutInitialProps> {
    const menu = (await fetchMenu()) || {};
    const footer = (await fetchFooter()) || {};
    return {
      pageProps: null,
      props: {
        menu: menu,
        footer: footer,
      },
    };
  }

  render() {
    const {Component, pageProps, props} = this.props;
    return (
      <Layout menu={props.menu} footer={props.footer}>
        <Component {...pageProps}/>
      </Layout>
    );
  }
}
