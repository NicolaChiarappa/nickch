import type { Schema, Attribute } from '@strapi/strapi';

export interface SezioniParagrafo extends Schema.Component {
  collectionName: 'components_sezioni_paragrafos';
  info: {
    displayName: 'Paragrafo';
    icon: 'cube';
    description: '';
  };
  attributes: {
    Sottotitolo: Attribute.String;
    Testo: Attribute.Blocks & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'sezioni.paragrafo': SezioniParagrafo;
    }
  }
}
