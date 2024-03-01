import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksHeroSection extends Schema.Component {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    Heding: Attribute.String;
    text: Attribute.Text;
    heroImage: Attribute.Media;
    button: Attribute.Component<'element.button-link', true>;
  };
}

export interface ElementButtonLink extends Schema.Component {
  collectionName: 'components_element_button_links';
  info: {
    displayName: 'Button Link';
  };
  attributes: {
    buttonTitle: Attribute.String;
    Link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.hero-section': BlocksHeroSection;
      'element.button-link': ElementButtonLink;
      'seo.meta-data': SeoMetaData;
    }
  }
}
