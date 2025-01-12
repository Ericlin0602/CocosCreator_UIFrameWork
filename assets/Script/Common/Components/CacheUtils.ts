import ResMgr from "../../UIFrame/ResMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CacheUtils extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    com: cc.Label = null;
    onLoad () {
        this.com = this.getComponent(cc.Label);
    }

    

    start () {

    }

    private passTime = 0;
    update (dt) {
        this.passTime += dt;
        if(this.passTime > 1) {
            this.passTime = 0;
            this.com.string = ResMgr.inst.computeTextureCache();
        }
        
    }
}
