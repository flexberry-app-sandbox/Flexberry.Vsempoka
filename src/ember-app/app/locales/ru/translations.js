import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISVsempokaДокумПоставкиLForm from './forms/i-i-s-vsempoka-докум-поставки-l';
import IISVsempokaКлиентыLForm from './forms/i-i-s-vsempoka-клиенты-l';
import IISVsempokaОрганизацияLForm from './forms/i-i-s-vsempoka-организация-l';
import IISVsempokaПунктПогрузLForm from './forms/i-i-s-vsempoka-пункт-погруз-l';
import IISVsempokaПунктПогрузкиLForm from './forms/i-i-s-vsempoka-пункт-погрузки-l';
import IISVsempokaСписокБаржLForm from './forms/i-i-s-vsempoka-список-барж-l';
import IISVsempokaСписокКонтейLForm from './forms/i-i-s-vsempoka-список-контей-l';
import IISVsempokaТоварыLForm from './forms/i-i-s-vsempoka-товары-l';
import IISVsempokaФормРезПостLForm from './forms/i-i-s-vsempoka-форм-рез-пост-l';
import IISVsempokaФормирРаспредLForm from './forms/i-i-s-vsempoka-формир-распред-l';
import IISVsempokaДокумПоставкиEForm from './forms/i-i-s-vsempoka-докум-поставки-e';
import IISVsempokaКлиентыEForm from './forms/i-i-s-vsempoka-клиенты-e';
import IISVsempokaОрганизацияEForm from './forms/i-i-s-vsempoka-организация-e';
import IISVsempokaПунктПогрузEForm from './forms/i-i-s-vsempoka-пункт-погруз-e';
import IISVsempokaПунктПогрузкиEForm from './forms/i-i-s-vsempoka-пункт-погрузки-e';
import IISVsempokaСписокБаржEForm from './forms/i-i-s-vsempoka-список-барж-e';
import IISVsempokaСписокКонтейEForm from './forms/i-i-s-vsempoka-список-контей-e';
import IISVsempokaТоварыEForm from './forms/i-i-s-vsempoka-товары-e';
import IISVsempokaФормРезПостEForm from './forms/i-i-s-vsempoka-форм-рез-пост-e';
import IISVsempokaФормирРаспредEForm from './forms/i-i-s-vsempoka-формир-распред-e';
import IISVsempokaДокумПоставкиModel from './models/i-i-s-vsempoka-докум-поставки';
import IISVsempokaКлиентыModel from './models/i-i-s-vsempoka-клиенты';
import IISVsempokaОрганизацияModel from './models/i-i-s-vsempoka-организация';
import IISVsempokaПунктПогрузModel from './models/i-i-s-vsempoka-пункт-погруз';
import IISVsempokaПунктПогрузкиModel from './models/i-i-s-vsempoka-пункт-погрузки';
import IISVsempokaСписокБаржModel from './models/i-i-s-vsempoka-список-барж';
import IISVsempokaСписокКонтейModel from './models/i-i-s-vsempoka-список-контей';
import IISVsempokaТЧИнфОЗаказеModel from './models/i-i-s-vsempoka-т-ч-инф-о-заказе';
import IISVsempokaТоварыModel from './models/i-i-s-vsempoka-товары';
import IISVsempokaФормРезПостModel from './models/i-i-s-vsempoka-форм-рез-пост';
import IISVsempokaФормирРаспредModel from './models/i-i-s-vsempoka-формир-распред';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-vsempoka-докум-поставки': IISVsempokaДокумПоставкиModel,
    'i-i-s-vsempoka-клиенты': IISVsempokaКлиентыModel,
    'i-i-s-vsempoka-организация': IISVsempokaОрганизацияModel,
    'i-i-s-vsempoka-пункт-погруз': IISVsempokaПунктПогрузModel,
    'i-i-s-vsempoka-пункт-погрузки': IISVsempokaПунктПогрузкиModel,
    'i-i-s-vsempoka-список-барж': IISVsempokaСписокБаржModel,
    'i-i-s-vsempoka-список-контей': IISVsempokaСписокКонтейModel,
    'i-i-s-vsempoka-т-ч-инф-о-заказе': IISVsempokaТЧИнфОЗаказеModel,
    'i-i-s-vsempoka-товары': IISVsempokaТоварыModel,
    'i-i-s-vsempoka-форм-рез-пост': IISVsempokaФормРезПостModel,
    'i-i-s-vsempoka-формир-распред': IISVsempokaФормирРаспредModel
  },

  'application-name': 'Vsempoka',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Vsempoka',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Vsempoka',
          title: 'Vsempoka'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        vsempoka: {
          caption: 'Vsempoka',
          title: 'Vsempoka',
          'i-i-s-vsempoka-список-контей-l': {
            caption: 'Список контей',
            title: ''
          },
          'i-i-s-vsempoka-список-барж-l': {
            caption: 'Список барж',
            title: ''
          },
          'i-i-s-vsempoka-формир-распред-l': {
            caption: 'Формир распред',
            title: ''
          },
          'i-i-s-vsempoka-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-vsempoka-пункт-погруз-l': {
            caption: 'Пункт погруз',
            title: ''
          },
          'i-i-s-vsempoka-форм-рез-пост-l': {
            caption: 'Форм рез пост',
            title: ''
          },
          'i-i-s-vsempoka-пункт-погрузки-l': {
            caption: 'Пункт погрузки',
            title: ''
          },
          'i-i-s-vsempoka-товары-l': {
            caption: 'Товары',
            title: ''
          },
          'i-i-s-vsempoka-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-vsempoka-докум-поставки-l': {
            caption: 'Докум поставки',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-vsempoka-докум-поставки-l': IISVsempokaДокумПоставкиLForm,
    'i-i-s-vsempoka-клиенты-l': IISVsempokaКлиентыLForm,
    'i-i-s-vsempoka-организация-l': IISVsempokaОрганизацияLForm,
    'i-i-s-vsempoka-пункт-погруз-l': IISVsempokaПунктПогрузLForm,
    'i-i-s-vsempoka-пункт-погрузки-l': IISVsempokaПунктПогрузкиLForm,
    'i-i-s-vsempoka-список-барж-l': IISVsempokaСписокБаржLForm,
    'i-i-s-vsempoka-список-контей-l': IISVsempokaСписокКонтейLForm,
    'i-i-s-vsempoka-товары-l': IISVsempokaТоварыLForm,
    'i-i-s-vsempoka-форм-рез-пост-l': IISVsempokaФормРезПостLForm,
    'i-i-s-vsempoka-формир-распред-l': IISVsempokaФормирРаспредLForm,
    'i-i-s-vsempoka-докум-поставки-e': IISVsempokaДокумПоставкиEForm,
    'i-i-s-vsempoka-клиенты-e': IISVsempokaКлиентыEForm,
    'i-i-s-vsempoka-организация-e': IISVsempokaОрганизацияEForm,
    'i-i-s-vsempoka-пункт-погруз-e': IISVsempokaПунктПогрузEForm,
    'i-i-s-vsempoka-пункт-погрузки-e': IISVsempokaПунктПогрузкиEForm,
    'i-i-s-vsempoka-список-барж-e': IISVsempokaСписокБаржEForm,
    'i-i-s-vsempoka-список-контей-e': IISVsempokaСписокКонтейEForm,
    'i-i-s-vsempoka-товары-e': IISVsempokaТоварыEForm,
    'i-i-s-vsempoka-форм-рез-пост-e': IISVsempokaФормРезПостEForm,
    'i-i-s-vsempoka-формир-распред-e': IISVsempokaФормирРаспредEForm
  },

});

export default translations;
