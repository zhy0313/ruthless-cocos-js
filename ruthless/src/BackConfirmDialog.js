// Generated by CoffeeScript 1.10.0

/*
  返回游戏确认对话框
 */

(function() {
  this.BackConfirmDialog = Dialog.extend({
    btnAgain: null,
    btnBack: null,
    funOk: null,
    funCancel: null,
    ctor: function() {
      this._super();
      this.initBtnAgain();
      return this.initBtnBack();
    },
    initBtnAgain: function() {
      var self;
      this.btnAgain = new ccui.Button();
      this.btnAgain.loadTextureNormal(res.igBtnOk, ccui.Widget.LOCAL_TEXTURE);
      this.btnAgain.setPressedActionEnabled(true);
      this.btnAgain.setTouchEnabled(true);
      this.btnAgain.attr({
        x: this.dialogLayer.width / 2,
        y: this.dialogLayer.height / 2 + this.btnAgain.height / 2 + 25
      });
      this.dialogLayer.addChild(this.btnAgain, 5);
      self = this;
      return this.btnAgain.addTouchEventListener(function(touch, event) {
        var error, error1;
        if (event === ccui.Widget.TOUCH_ENDED) {
          LogTool.c("点击确认关闭按钮");
          try {
            if (typeof self.funOk === "function") {
              self.funOk();
            } else {
              LogTool.c("funOk is not a function");
            }
          } catch (error1) {
            error = error1;
            LogTool.c(error);
          }
          self.popDialog.hidden();
          return cc.director.popScene();
        }
      }, this.btnAgain);
    },
    initBtnBack: function() {
      var self;
      this.btnBack = new ccui.Button();
      this.btnBack.loadTextureNormal(res.igBtnCancel, ccui.Widget.LOCAL_TEXTURE);
      this.btnBack.setPressedActionEnabled(true);
      this.btnBack.setTouchEnabled(true);
      this.btnBack.attr({
        x: this.dialogLayer.width / 2,
        y: this.dialogLayer.height / 2 - this.btnBack.height / 2 - 25
      });
      this.dialogLayer.addChild(this.btnBack, 5);
      self = this;
      return this.btnBack.addTouchEventListener(function(touch, event) {
        var error, error1;
        if (event === ccui.Widget.TOUCH_ENDED) {
          LogTool.c("点击取消按钮");
          try {
            if (typeof self.funCancel === "function") {
              self.funCancel();
            } else {
              LogTool.c("funCancel is not a function");
            }
          } catch (error1) {
            error = error1;
            LogTool.c(error);
          }
          return self.popDialog.hidden();
        }
      }, this.btnBack);
    }
  });

}).call(this);

//# sourceMappingURL=BackConfirmDialog.js.map
