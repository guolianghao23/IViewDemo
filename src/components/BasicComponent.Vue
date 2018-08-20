<template>
    <div>
        <div style="padding:20px">
            <h2>{{msg}}</h2>
            <Button>default</Button>
            <Button type="primary">primary</Button>
            <Button type="dashed">dashed</Button><br>
        </div>
        <div style="background-color:#f3f3f3;padding:20px">
            <Button type="success" ghost>success ghost</Button>
            <Button type="primary" ghost>primary</Button>
        </div>
        <div style="padding:20px">
            <Button type="primary" shape="circle" icon="ios-search"></Button>
            <Button type="primary" icon="ios-search">search</Button>
            <Button type="primary" shape="circle" icon="ios-search">search</Button>
            <Button icon="ios-search">search</Button>
            <Button shape="circle" icon="ios-search">search</Button>
        </div>
        <div style="padding:20px">
            <Radio-Group v-model="buttonSize">
                <Radio label="large">Large</Radio>
                <Radio label="default">default</Radio>
                <Radio label="small">small</Radio>
            </Radio-Group>
            <br><br>
            <Button v-bind:size="buttonSize" type="primary">primary</Button>
            <Button v-bind:size="buttonSize" type="dashed">dashed</Button>
            <Button v-bind:size="buttonSize" type="primary" icon="ios-download-outline" shape="circle"></Button>
            <br><br>
            <Button-Group v-bind:size="buttonSize">
                <Button v-bind:size="buttonSize" type="primary">
                    <Icon type="ios-arrow-back" /> Backward
                </Button>
                <Button v-bind:size="buttonSize" type="primary">
                    Forward
                    <Icon type="ios-arrow-forward" />
                </Button>
            </Button-Group>
            <br><br>
            <Button type="success" long>Submit</Button>
            <br><br>
            <Button type="primary" disabled>primary</Button>
            <br><br>
            <Button type="primary" loading>loading</Button>
            <Button v-bind:type="buttonType" v-bind:loading="loading" @click="toloading">
                <span v-if="!loading">Click me!</span>
                <span v-else>loading</span>
            </Button>
            <Button loading shape="circle"></Button>
            <br><br>
            <Button-Group vertical>
                <Button icon="logo-facebook"></Button>
                <Button icon="logo-twitter"></Button>
                <Button icon="logo-googleplus"></Button>
                <Button icon="logo-tumblr"></Button>
            </Button-Group>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Basic Component",
      buttonSize: "large",
      loading: false,
      buttonType: ""
    };
  },
  methods: {
    toloading: function() {
      this.loading = true;
      this.buttonType = "primary";
    }
  }
};
</script>

