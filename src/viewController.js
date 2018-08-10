import Augmented from "augmentedjs-next";

/**
 * A controller to handle a group of views.  The api is handled simular to views for use in a router.
 * @deprecated
 * @extends Augmented.Object
 */
class ViewController extends Augmented.Object {
  constructor(options) {
    super(options);
    if (options && options.views) {
      this._views = options.views;
    } else {
      this._views = [];
    }

    if (options && options.permissions) {
      this._permissions = options.permissions;
    } else {
      this._permissions = {
        include: [],
        exclude: []
      };
    }
    this.initialize(options);
  };
  /**
   * Permissions in the controller
   * @property permissions
   */

  /**
   * initialize - an API for the start of the controller.  It is intended to add initializers here
   */
  initialize(options) {
    return this;
  };
  /**
   * render - an API for the render of the controller.  It is intended to add view render methods here
   */
  render() {
    return this;
  };
  /**
   * remove - an API for the end of the controller.  It is intended to add view removal and cleanup here
   */
  remove() {
    return this;
  };
  /**
   * manageView - manage a view
   * @param {Presentation.View} view An instance of a view to manage
   */
  manageView(view) {
    this._views.push(view);
  };
  /**
   * removeAllViews - cleans up all views known (calling thier remove method)
   */
  removeAllViews() {
    const l = this._views.length;
    let i = 0;
    for (i = 0; i < l; i++) {
      this._views[i].remove();
    }
    this._views.splice(0);
  };
  /**
   * getViews - get the instances of the views known
   * @returns {Array} Returns an array of view instances
   */
  get views () {
    return this._views;
  };

  /**
   * Adds a permission to the controller
   * @param {string} permission The permission to add
   * @param {boolean} negative Flag to set a nagative permission (optional)
   */
  addPermission(permission, negative) {
    if (!negative) {
      negative = false;
    }
    if (permission !== null && !Array.isArray(permission)) {
      const p = (negative) ? this._permissions.exclude : this._permissions.include;
      p.push(permission);
    }
  };
  /**
   * Removes a permission to the controller
   * @param {string} permission The permission to remove
   * @param {boolean} negative Flag to set a nagative permission (optional)
   */
  removePermission(permission, negative) {
    if (!negative) {
      negative = false;
    }
    if (permission !== null && !Array.isArray(permission)) {
      const p = (negative) ? this._permissions.exclude : this._permissions.include;
      p.splice((p.indexOf(permission)), 1);
    }
  };
  /**
   * Sets the permissions to the controller
   * @param {array} permissions The permissions to set
   */
  set permissions(permissions) {
    /*if (!negative) {
      negative = false;
    }
    if (permissions !== null && Array.isArray(permissions)) {
      if (negative) {
        ç.exclude = permissions;
      } else {
        this._permissions.include = permissions;
      }
    }*/
    this._permissions = permissions;
  };
  /**
   * Gets the permissions to the controller<br/>
   * Return format:<br/>
   * <pre>{
   *     include: [],
   *     exclude: []
   * }</pre>
   *
   * @returns {object} The permissions in the controller
   */
  get permissions() {
    return this._permissions;
  };
  /**
   * Clears the permissions in the controller
   */
  clearPermissions() {
    this._permissions = {
      include: [],
      exclude: []
    };
  };
  /**
   * Matches a permission in the controller
   * @param {string} match The permissions to match
   * @param {boolean} negative Flag to set a nagative permission (optional)
   * @returns {boolean} Returns true if the match exists
   */
  matchesPermission(match, negative) {
    if (!negative) {
      negative = false;
    }
    const p = (negative) ? this._permissions.exclude : this._permissions.include;
    return (p.indexOf(match) !== -1);
  };
  /**
   * Callback to return if this controller can display
   * @returns {boolean} Returns true if this controller can display
   */
  canDisplay() {
    return true;
  };
};

export default ViewController;
