import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { name as App } from '../imports/components/app';
import { name as Navigation } from '../imports/components/navigation/navigation';
import { name as Home } from '../imports/components/home/home';
import { name as Layout } from '../imports/components/layout/layout';
import { name as Create } from '../imports/components/create/create';
import { name as Find } from '../imports/components/find/find';
import { name as Idea } from '../imports/components/idea/idea';
import { name as Category } from '../imports/components/category/category';
import { name as User } from '../imports/components/user/user';
import { name as HeaderSmall } from '../imports/components/header-small/header-small';
import { name as ImageUpload } from '../imports/components/image-upload/image-upload';

import { name as Admin } from '../imports/components/admin/admin';
import { name as AdminCategories } from '../imports/components/admin/categories/admin.categories';
import { name as AdminUsers } from '../imports/components/admin/users/admin.users';

angular
  .module('ideaPlate', [
    // Libs
    angularMeteor,
    uiRouter,
    'accounts.ui',

    // Components
    App,
    Navigation,
    Layout,
    Home,
    Create,
    Find,
    Idea,
    Category,
    User,
    HeaderSmall,
    ImageUpload,

    Admin,
    AdminCategories,
    AdminUsers,
  ])
  .config(config)
  .run(run);
 
function config($locationProvider, $urlRouterProvider, $stateProvider) {
  'ngInject';
 
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
};

function run($rootScope, $state) {
  'ngInject';
  
  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
      if (error === 'AUTH_REQUIRED' || error === 'ADMIN_REQUIRED') {
        $state.go('home');
      }
    }
  );
}