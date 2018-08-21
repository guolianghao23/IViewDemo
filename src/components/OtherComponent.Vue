<template>
    <div>
        <div style="padding:20px">
            <h2>{{msg}}</h2>
            <Affix>
                <span class="demo-affix">Fixed at the top</span>
            </Affix>
            <Affix :offset-top="50">
                <span class="demo-affix">Fixed at the top 50px from the top</span>
            </Affix>
            <Spin></Spin>
            <Button type="primary" @click="handleSpinShow">整页显示，3秒后关闭</Button>
            <Button type="primary" @click="handleSpinCustom">自定义显示内容</Button>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "Other Component"
    };
  },
  methods: {
    handleSpinShow: function() {
      this.$Spin.show();
      setTimeout(() => {
        this.$Spin.hide();
      }, 3000);
    },
    handleSpinCustom: function() {
      this.$Spin.show({
        render: h => {
          return h("div", [
            h("Icon", {
              class: "demo-spin-icon-load",
              props: {
                type: "ios-loading",
                size: 18
              }
            }),
            h("div", "Loading")
          ]);
        }
      });
      setTimeout(() => {
        this.$Spin.hide();
      }, 3000);
    }
  }
};
</script>

