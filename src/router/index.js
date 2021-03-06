import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '../components/Dashboard.vue';
import AddRecordContainer from '../components/AddRecordContainer.vue';
import NewProject from '../components/NewProject.vue';
import ProjectPage from '../components/ProjectPage.vue';
import ProjectOverview from '../components/ProjectOverview.vue';
import ProjectSettings from '../components/ProjectSettings.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    props: true
  }, {
    path: '/new-project',
    name: 'new-project',
    component: NewProject
  }, {
    path: '/project/:projectId',
    component: Dashboard,
    props: true,
    children: [{
      path: '',
      component: ProjectPage,
      props: true,
      children: [{
        path: '',
        name: 'project-overview',
        props: true,
        component: ProjectOverview
      }, {
        path: 'settings',
        name: 'project-settings',
        props: true,
        component: ProjectSettings
      }, {
        path: 'add',
        name: 'add-record',
        component: AddRecordContainer,
        props: true
      }, {
        path: 'edit-record/:row',
        name: 'edit-record',
        component: AddRecordContainer,
        props: true
      }]
    }]
  }],
});
