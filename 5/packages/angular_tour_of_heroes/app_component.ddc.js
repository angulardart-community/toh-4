define(['dart_sdk', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_tour_of_heroes/src/hero', 'packages/angular_tour_of_heroes/src/hero_service'], function(dart_sdk, lifecycle_hooks, hero, hero_service) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__hero = hero.src__hero;
  const src__hero_service = hero_service.src__hero_service;
  const _root = Object.create(null);
  const app_component = Object.create(_root);
  let ListOfHero = () => (ListOfHero = dart.constFn(core.List$(src__hero.Hero)))();
  const _heroService = Symbol('_heroService');
  const _getHeroes = Symbol('_getHeroes');
  app_component.AppComponent = class AppComponent extends core.Object {
    get title() {
      return this[title];
    }
    set title(value) {
      super.title = value;
    }
    get heroes() {
      return this[heroes];
    }
    set heroes(value) {
      this[heroes] = value;
    }
    get selectedHero() {
      return this[selectedHero];
    }
    set selectedHero(value) {
      this[selectedHero] = value;
    }
    [_getHeroes]() {
      return async.async(dart.void, (function* _getHeroes() {
        this.heroes = (yield this[_heroService].getAll());
      }).bind(this));
    }
    ngOnInit() {
      return this[_getHeroes]();
    }
    onSelect(hero) {
      return this.selectedHero = hero;
    }
  };
  (app_component.AppComponent.new = function(heroService) {
    this[title] = 'Tour of Heroes';
    this[heroes] = null;
    this[selectedHero] = null;
    this[_heroService] = heroService;
  }).prototype = app_component.AppComponent.prototype;
  dart.addTypeTests(app_component.AppComponent);
  const title = Symbol("AppComponent.title");
  const heroes = Symbol("AppComponent.heroes");
  const selectedHero = Symbol("AppComponent.selectedHero");
  app_component.AppComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(app_component.AppComponent, () => ({
    __proto__: dart.getMethods(app_component.AppComponent.__proto__),
    [_getHeroes]: dart.fnType(async.Future$(dart.void), []),
    ngOnInit: dart.fnType(dart.void, []),
    onSelect: dart.fnType(dart.void, [src__hero.Hero])
  }));
  dart.setFieldSignature(app_component.AppComponent, () => ({
    __proto__: dart.getFields(app_component.AppComponent.__proto__),
    title: dart.finalFieldType(core.String),
    [_heroService]: dart.finalFieldType(src__hero_service.HeroService),
    heroes: dart.fieldType(ListOfHero()),
    selectedHero: dart.fieldType(src__hero.Hero)
  }));
  dart.trackLibraries("packages/angular_tour_of_heroes/app_component.ddc", {
    "package:angular_tour_of_heroes/app_component.dart": app_component
  }, '{"version":3,"sourceRoot":"","sources":["app_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;IAgBQ;;;;;;IAEK;;;;;;IACN;;;;;;;AAIqB;AACxB,mBAAM,IAAG,MAAM,kBAAY,OAAO;MACpC;;;YAEmB,iBAAU;IAAE;aAEjB,IAAS;YAAK,kBAAY,GAAG,IAAI;;;6CAR7B,WAAY;IALxB,WAAK,GAAG;IAEH,YAAM;IACZ,kBAAY;IAEC,kBAAY,GAAZ,WAAY;EAAC","file":"app_component.ddc.js"}');
  // Exports:
  return {
    app_component: app_component
  };
});

//# sourceMappingURL=app_component.ddc.js.map
