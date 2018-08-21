<template>
    <div>
        <div style="padding:20px">
            <h2>{{msg}}</h2>
            <i-Circle :percent="80">
                <span class="demo-Circle-inner" style="font-size:24px">80%</span>
            </i-Circle>
            <i-Circle :percent="100" stroke-color="#5cb85c">
                <Icon type="ios-checkmark" size="60" style="color:#5cb85c"></Icon>
            </i-Circle>
            <i-Circle :percent="35" stroke-color="#ff5500">
                <span class="demo-Circle-inner">
                    <Icon type="ios-close" size="50" style="color:#ff5500"></Icon>
                </span>
            </i-Circle>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "Charts Component"
    };
  }
};
</script>

