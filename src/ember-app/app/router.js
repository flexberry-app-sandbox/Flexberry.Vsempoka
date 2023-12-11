import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-vsempoka-докум-поставки-l');
  this.route('i-i-s-vsempoka-докум-поставки-e',
  { path: 'i-i-s-vsempoka-докум-поставки-e/:id' });
  this.route('i-i-s-vsempoka-докум-поставки-e.new',
  { path: 'i-i-s-vsempoka-докум-поставки-e/new' });
  this.route('i-i-s-vsempoka-клиенты-l');
  this.route('i-i-s-vsempoka-клиенты-e',
  { path: 'i-i-s-vsempoka-клиенты-e/:id' });
  this.route('i-i-s-vsempoka-клиенты-e.new',
  { path: 'i-i-s-vsempoka-клиенты-e/new' });
  this.route('i-i-s-vsempoka-организация-l');
  this.route('i-i-s-vsempoka-организация-e',
  { path: 'i-i-s-vsempoka-организация-e/:id' });
  this.route('i-i-s-vsempoka-организация-e.new',
  { path: 'i-i-s-vsempoka-организация-e/new' });
  this.route('i-i-s-vsempoka-пункт-погруз-l');
  this.route('i-i-s-vsempoka-пункт-погруз-e',
  { path: 'i-i-s-vsempoka-пункт-погруз-e/:id' });
  this.route('i-i-s-vsempoka-пункт-погруз-e.new',
  { path: 'i-i-s-vsempoka-пункт-погруз-e/new' });
  this.route('i-i-s-vsempoka-пункт-погрузки-l');
  this.route('i-i-s-vsempoka-пункт-погрузки-e',
  { path: 'i-i-s-vsempoka-пункт-погрузки-e/:id' });
  this.route('i-i-s-vsempoka-пункт-погрузки-e.new',
  { path: 'i-i-s-vsempoka-пункт-погрузки-e/new' });
  this.route('i-i-s-vsempoka-список-барж-l');
  this.route('i-i-s-vsempoka-список-барж-e',
  { path: 'i-i-s-vsempoka-список-барж-e/:id' });
  this.route('i-i-s-vsempoka-список-барж-e.new',
  { path: 'i-i-s-vsempoka-список-барж-e/new' });
  this.route('i-i-s-vsempoka-список-контей-l');
  this.route('i-i-s-vsempoka-список-контей-e',
  { path: 'i-i-s-vsempoka-список-контей-e/:id' });
  this.route('i-i-s-vsempoka-список-контей-e.new',
  { path: 'i-i-s-vsempoka-список-контей-e/new' });
  this.route('i-i-s-vsempoka-товары-l');
  this.route('i-i-s-vsempoka-товары-e',
  { path: 'i-i-s-vsempoka-товары-e/:id' });
  this.route('i-i-s-vsempoka-товары-e.new',
  { path: 'i-i-s-vsempoka-товары-e/new' });
  this.route('i-i-s-vsempoka-форм-рез-пост-l');
  this.route('i-i-s-vsempoka-форм-рез-пост-e',
  { path: 'i-i-s-vsempoka-форм-рез-пост-e/:id' });
  this.route('i-i-s-vsempoka-форм-рез-пост-e.new',
  { path: 'i-i-s-vsempoka-форм-рез-пост-e/new' });
  this.route('i-i-s-vsempoka-формир-распред-l');
  this.route('i-i-s-vsempoka-формир-распред-e',
  { path: 'i-i-s-vsempoka-формир-распред-e/:id' });
  this.route('i-i-s-vsempoka-формир-распред-e.new',
  { path: 'i-i-s-vsempoka-формир-распред-e/new' });
});

export default Router;
