<template>
  <div>
    <van-col span="18">
      <dl>
        <span class="twoNavimg">
          <van-image width="100%" height="100%" fit="fill" :src="newicon" />
        </span>
        <dt>
          <a href="###">抗感染类</a>
        </dt>
        <dd>
          <div class="fenimg">
            <div class="fen">
              <a href="###">抗生素</a>
              <a href="###">抗生素</a>
              <a href="###">抗生素</a>
              <a href="###">抗生素</a>
              <a href="###">抗生素</a>
            </div>
          </div>
        </dd>
      </dl>
    </van-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datalist: "阿莫西林",
      newicon: require("../../../assets/img/Category/pro.jpg")
    };
  },

  components: {},

  methods: {},

  created() {
    console.log(localStorage.getItem("type", 999));
  }
};
</script>

<style scoped>
dl .twoNavimg {
  width: 17rem;
  height: 6.5rem;
  display: block;
  margin-top: 0.5rem;
  margin-left: 0.3rem;
}
dl dt {
  margin-left: 0.3rem;
  margin-top: 1rem;
}
dl dt a {
  display: block;
  height: 0.917rem;
  font-size: 0.917rem;
  line-height: 0.917rem;
  font-weight: 700;
  color: #00d2c3;
}
dl dd .fenimg {
  width: 100%;
  margin-left: 0.3rem;
  margin-top: 0.5rem;
  overflow: hidden;
}
dl dd .fenimg .fen {
  min-width: 33.3%;
  float: left;
  overflow: hidden;
  text-align: left;
  margin-bottom: 0.133333rem;
}
dl dd .fenimg .fen a {
  display: block;
  float: left;
  height: 2rem;
  padding: 0.333333rem 1.43rem;
  border-radius: 1rem;
  text-align: center;
  font-size: 0.917rem;
  color: #666;
  background: #f5f5f5;
  margin-top: 0.3333rem;
}
</style>
