import {LinkField, RichTextField} from '@prismicio/types';
import {SliceComponentPropsDto} from './index';
import React from 'react';
import {PrismicRichText} from '@prismicio/react';
import {DocLink, ProductPreview} from '../components';
import {ProductPreviewInfoDto} from './interfaces';

export interface ProductPreviewItemDto {
  topProduct: ProductPreviewInfoDto;
  productLink: LinkField;
}


interface ProductListWithCtaPrimary {
  readonly description: RichTextField;
  readonly link: LinkField;
  readonly title: RichTextField;
}

type ProductListWithCtaProps = SliceComponentPropsDto<ProductPreviewItemDto, ProductListWithCtaPrimary>;

interface ProductListWithCtaState {
  readonly items: ProductPreviewItemDto[];
  readonly primary: ProductListWithCtaPrimary;
}

export default class ProductListWithCta extends React.Component<ProductListWithCtaProps, ProductListWithCtaState> {
  constructor(props: ProductListWithCtaProps) {
    super(props);
    const {primary, items} = props.slice;
    this.state = {items, primary};
  }

  render() {
    return (
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="text-2xl font-extrabold tracking-tight text-gray-900">
            {this.state?.primary?.title &&
							<PrismicRichText field={this.state.primary.title}/>
            }
          </div>
          <div className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
            {
              <DocLink link={this.state.primary.link}>
                <PrismicRichText field={this.state.primary.description}/>
              </DocLink>
            }
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {
            this.state.items.map(item => {
              return <DocLink key={item.topProduct.id} link={item.productLink} linkClass="group relative">
                <ProductPreview data={item.topProduct}/>
              </DocLink>;
            })
          }
        </div>
      </div>
    );
  }
}
