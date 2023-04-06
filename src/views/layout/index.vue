<template>
  <div>
    <div class="imgbox">
      <div class="handlebox">
        <div class="btnbox">
          <van-button round plain type="info">English</van-button>
        </div>
        <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
        <img
          is-link
          @click="showPopup"
          src="@/assets/image/myicon.png"
          alt=""
        />
        <van-popup position="right" :style="{ width: '60%',height:'100%'}" v-model="show"
          >内容</van-popup>
      </div>
    </div>
    <van-grid :gutter="20" :border="false" :column-num="2">
      <van-grid-item text="云打印" to="/layout/print">
        <van-image width="47" height="47" :src="img1" />
        <p>云打印</p>
      </van-grid-item>
      <van-grid-item to="/layout/printList">
        <van-image width="47" height="47" :src="img2" />
        <p>打印列表</p>
      </van-grid-item>
      <van-grid-item to="/layout/useList">
        <van-image width="47" height="47" :src="img3" />
        <p>使用记录</p>
      </van-grid-item>
      <van-grid-item to="/layout/printLocal">
        <van-image width="47" height="47" :src="img4" />
        <p>打印地点</p>
      </van-grid-item>
      <van-grid-item to="/layout/scanList">
        <van-image width="47" height="47" :src="img5" />
        <p>扫描文件下载</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
import img1 from "@/assets/image/entry-icon1.png";
import img2 from "@/assets/image/entry-icon2.png";
import img3 from "@/assets/image/entry-icon3.png";
import img4 from "@/assets/image/entry-icon4.png";
import img5 from "@/assets/image/entry-icon5.png";
export default {
  data() {
    return {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
      img5: img5,
      show: false,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  },
};
</script>
<style lang="less" scoped>
.imgbox {
  background: url("@/assets/image/banner.jpg") center center no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 225px;
  padding: 10px 2px 10px 5px;
  box-sizing: border-box;
  margin-bottom: 20px;
  .handlebox {
    display: flex;
    align-content: center;
    align-items: center;
    button {
      width: 62.5px;
      height: 25px;
    }
    .btnbox {
      flex: 1;
    }
    img {
      width: 34px;
      height: 34px;
    }
  }
}
.van-grid-item {
  height: 115px;
  p {
    font-size: 12px;
    color: white;
  }
}

/deep/ .van-grid-item__content {
  background: linear-gradient(93deg, #f19a69 0%, #ee8866 100%);
  border-radius: 10px;
}
/deep/ .van-grid-item:nth-child(2) .van-grid-item__content {
  background: linear-gradient(91deg, #a098f7 0%, #84b2f8 100%);
}
/deep/ .van-grid-item:nth-child(3) .van-grid-item__content {
  background: linear-gradient(93deg, #ef8482 0%, #e05e7c 99%);
}
/deep/ .van-grid-item:nth-child(4) .van-grid-item__content {
  background: linear-gradient(93deg, #b4bfce 0%, #8e9daf 100%);
}
/deep/ .van-grid-item:nth-child(5) .van-grid-item__content {
  background: linear-gradient(91deg, #f7cb6b 0%, #fbba80 100%);
}
</style>