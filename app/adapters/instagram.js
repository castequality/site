import DS from "ember-data";
import ENV from "../config/environment";
import request from "ic-ajax";

var client_id = ENV.APP.INSTAGRAM.client_id;
var user = ENV.APP.INSTAGRAM.user;

export default DS.RESTAdapter.extend({
  findRecord() {
    var url = "https://api.instagram.com/v1/users/" + user +
              "/media/recent/?client_id=" + client_id;

    return request({
      url: url,
      dataType: "jsonp"
    }).then(response => {
      return { instagram: response.data[0] };
    });
  }
});
