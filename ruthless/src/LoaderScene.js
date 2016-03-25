// Generated by CoffeeScript 1.10.0

/*
  进入游戏加载资源进度页面
 */

(function() {
  this.LoaderScene = cc.Scene.extend({
    _interval: null,
    _className: "LoaderScene",
    cb: null,
    target: null,
    _loadingLayer: null,
    init: function() {
      var self;
      self = this;
      self._loadingLayer = new LoadingLayer();
      self.addChild(self._loadingLayer, 0);
      return true;
    },
    onEnter: function() {
      var self;
      self = this;
      cc.Node.prototype.onEnter.call(self);
      return self.schedule(self._startLoading, 0.3);
    },
    onExit: function() {
      var self;
      self = this;
      cc.Node.prototype.onExit.call(self);
      return self._loadingLayer.setProgress(0);
    },
    initWithResources: function(resources, cb, target) {
      if (cc.isString(resources)) {
        resources = [resources];
      }
      this.resources = resources || [];
      this.cb = cb;
      return this.target = target;
    },
    updatePercent: function(loadedCount, count) {
      var percent;
      percent = (loadedCount / count * 100) | 0;
      percent = Math.min(percent, 100);
      return self._loadingLayer.setProgress(percent);
    },
    _startLoading: function() {
      var res, self;
      self = this;
      self.unschedule(self._startLoading);
      res = self.resources;
      self._length = res.length;
      self._count = 0;
      return self.schedule(function() {
        return cc.loader.load(res, function(result, count, loadedCount) {
          var percent;
          loadedCount += 1;
          percent = (loadedCount / count * 100) | 0;
          percent = Math.min(percent, 100);
          return self._loadingLayer.setProgress(percent);
        }, function() {
          if (self.cb) {
            return self.cb();
          }
        });
      }, THIS.loadResourceDelay);
    },
    _updateTransform: function() {
      this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
      return this._loadingLayer.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    }
  });

  LoaderScene.preload = function(resources, cb, target) {
    var _cc;
    _cc = cc;
    if (!_cc.loaderScene) {
      _cc.loaderScene = new LoaderScene();
      _cc.loaderScene.init();
      cc.eventManager.addCustomListener(cc.Director.EVENT_PROJECTION_CHANGED, function() {
        return _cc.loaderScene._updateTransform();
      });
    }
    _cc.loaderScene.initWithResources(resources, cb, target);
    cc.director.runScene(_cc.loaderScene);
    return _cc.loaderScene;
  };

}).call(this);

//# sourceMappingURL=LoaderScene.js.map
