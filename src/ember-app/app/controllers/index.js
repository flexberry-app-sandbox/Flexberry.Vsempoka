import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.vsempoka.caption'),
          title: i18n.t('forms.application.sitemap.vsempoka.title'),
          children: [{
            link: 'i-i-s-vsempoka-список-контей-l',
            caption: i18n.t('forms.application.sitemap.vsempoka.i-i-s-vsempoka-список-контей-l.caption'),
            title: i18n.t('forms.application.sitemap.vsempoka.i-i-s-vsempoka-список-контей-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-vsempoka-список-барж-l',
            caption: i18n.t('forms.application.sitemap.vsempoka.i-i-s-vsempoka-список-барж-l.caption'),
            title: i18n.t('forms.application.sitemap.vsempoka.i-i-s-vsempoka-список-барж-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-vsempoka-формир-распред-l',
            caption: i18n.t('forms.application.sitemap.vsempoka.i-i-s-vsempoka-формир-распред-l.caption'),
            title: i18n.t('forms.application.sitemap.vsempoka.i-i-s-vsempoka-формир-распред-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-vsempoka-организация-l',
            caption: i18n.t('forms.application.sitemap.vsempoka.i-i-s-vsempoka-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.vsempoka.i-i-s-vsempoka-организация-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-vsempoka-пункт-погруз-l',
            caption: i18n.t('forms.application.sitemap.vsempoka.i-i-s-vsempoka-пункт-погруз-l.caption'),
            title: i18n.t('forms.application.sitemap.vsempoka.i-i-s-vsempoka-пункт-погруз-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-vsempoka-форм-рез-пост-l',
            caption: i18n.t('forms.application.sitemap.vsempoka.i-i-s-vsempoka-форм-рез-пост-l.caption'),
            title: i18n.t('forms.application.sitemap.vsempoka.i-i-s-vsempoka-форм-рез-пост-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-vsempoka-пункт-погрузки-l',
            caption: i18n.t('forms.application.sitemap.vsempoka.i-i-s-vsempoka-пункт-погрузки-l.caption'),
            title: i18n.t('forms.application.sitemap.vsempoka.i-i-s-vsempoka-пункт-погрузки-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-vsempoka-товары-l',
            caption: i18n.t('forms.application.sitemap.vsempoka.i-i-s-vsempoka-товары-l.caption'),
            title: i18n.t('forms.application.sitemap.vsempoka.i-i-s-vsempoka-товары-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-vsempoka-клиенты-l',
            caption: i18n.t('forms.application.sitemap.vsempoka.i-i-s-vsempoka-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.vsempoka.i-i-s-vsempoka-клиенты-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-vsempoka-докум-поставки-l',
            caption: i18n.t('forms.application.sitemap.vsempoka.i-i-s-vsempoka-докум-поставки-l.caption'),
            title: i18n.t('forms.application.sitemap.vsempoka.i-i-s-vsempoka-докум-поставки-l.title'),
            icon: 'tags',
            children: null
          }]
        }
      ]
    };
  }),
})