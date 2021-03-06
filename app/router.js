import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("projects", function() {
    this.route("project", { path: ":project_id" });
  });
  this.resource("visuals", function() {
    this.route("visual", { path: ":visual_id" });
  });
  this.route("contact");
});

export default Router;
