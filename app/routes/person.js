import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PersonRoute extends Route {
  queryParams = {
    page: {
      refreshModel: true,
    },
  };
  @service store;
  model(params) {
    console.log(params);
    // // console.log('page id', page_id);
    // const rs = this.store
    //   .query('person', { page: { number: params.page } })
    //   .then(function (res) {
    //     return res.links;
    //   });
    // // console.log(rs);
    // const pages = this.store.query('person', {
    //   page: {
    //     number: params.page,
    //   },
    // });
    // ?page[number]=2
    return this.store.query('person', { page: { number: params.page } });
  }
}
