import ViewController from "./viewController.js";

const renderPromise = (clazz) => {
  return new Promise( (resolve, reject) => {
    const t = clazz.render();
    if (t) {
      resolve(clazz);
    } else {
      reject(new Error("Error rendering!"));
    }
  });
};

const removePromise = (clazz) => {
  return new Promise( (resolve, reject) => {
    const t = clazz.remove();
    if (t) {
      resolve(clazz);
    } else {
      reject(new Error("Error removing!"));
    }
  });
};

/**
 * A managed controller that automatically sets up the components
 * Data can be passed to every view by passing using 'options'
 * @param {object} options Options to pass to all views managed
 * @extends ViewController
 * @deprecated
 */
class ManagedController extends ViewController {
  constructor(options) {
    super(options);
  };

  initialize(options) {
    //console.debug(`initialize Options ${options}`);
    if (this._views && this._views.length > 0) {
      if (!this._instances) {
        this._instances = [];
      }
      /*
      if (!this._renderChain) {
        this._renderChain = [];
      }
      if (!this._removeChain) {
        this._removeChain = [];
      }
      */
      const l = this._views.length;
      let i = 0;
      for (i = 0; i < l; i++) {
        const clazz = this._views[i];
        const cleanOptions = options;
        cleanOptions.views = null;
        const instance = new clazz(cleanOptions);
        this._instances.push(instance);
        //this._renderChain.push(renderPromise(instance));
        //this._removeChain.push(removePromise(this, instance));
      }
    }
    return this;
  };

  render() {
    const l = this._instances.length;
    let i = 0;
    for (i = 0; i < l; i++) {
      const instance = this._instances[i];
      renderPromise(instance);
    }
    /*if (!this._renderChain) {
      Promise.all(this._renderChain);
    }*/
    return this;
  };

  remove() {
    const l = this._instances.length;
    let i = 0;
    for (i = 0; i < l; i++) {
      const instance = this._instances[i];
      removePromise(instance);
    }
    /*if (!this._removeChain) {
      Promise.all(this._removeChain);
    }*/
    this._instances.splice(0);
    return this;
  };
};

export default ManagedController;
