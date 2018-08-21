<template>
  <div>

    <div style="padding:20px">
      <h2>{{msg}}</h2>
      <Input v-model="value" clearable size="small" placeholder="Enter something..." style="width: 300px" icon="ios-clock-outline" />
      <span>{{value}}</span>
      <br><br>
      <Input prefix="ios-contact" placeholder="Enter name" style="width: auto" />
      <Input suffix="ios-search" placeholder="Enter text" style="width: auto" />
      <br><br>
      <i-Input placeholder="Enter name" style="width: auto">
        <Icon type="ios-contact" slot="prefix" />
      </i-Input>
      <i-Input placeholder="Enter name" style="width: auto">
        <Icon type="ios-contact" slot="suffix" />
      </i-Input>
      <br><br>
      <Input search placeholder="Enter something..." />
      <br><br>
      <Input search enter-button placeholder="Enter something..." />
      <br><br>
      <Input search enter-button="Search" placeholder="Enter something..." />
      <br><br>
      <i-Input v-model="value11">
        <span slot="prepend">http://</span>
        <span slot="append">.com</span>
      </i-Input>
    </div>
    <div style="padding:20px">
      <Radio v-model="single">Radio</Radio>
      <span>{{single}}</span>
      <RadioGroup v-model="button1" type="button" size="small">
        <Radio label="北京"></Radio>
        <Radio label="上海"></Radio>
      </RadioGroup>
      <Checkbox v-model="single1"></Checkbox>
      <span>{{single1}}</span>
      <CheckboxGroup v-model="social">
        <Checkbox label="twitter">
          <Icon type="logo-twitter"></Icon>
          <span>Twitter</span>
        </Checkbox>
        <Checkbox label="facebook">
          <Icon type="logo-facebook"></Icon>
          <span>Facebook</span>
        </Checkbox>
        <Checkbox label="github">
          <Icon type="logo-github"></Icon>
          <span>Github</span>
        </Checkbox>
        <Checkbox label="snapchat">
          <Icon type="logo-snapchat"></Icon>
          <span>Snapchat</span>
        </Checkbox>
      </CheckboxGroup>
      <span>{{social}}</span>
    </div>
    <div style="padding:20px">
      <i-Switch v-model="switch1" @on-change="change" size="small" />
      <i-Switch loading :value="true" />
    </div>
    <div style="padding:20px">
      <Table border stripe :columns="columns1" :data="data1"></Table>
    </div>
    <Select style="width:200px">
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <Slider v-model="slideValue" show-input></Slider>
    <span>{{slideValue}}</span>
    <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
    <TimePicker type="time" placeholder="Select time" style="width: 168px"></TimePicker>
    <Rate v-model="rateValue" allow-half show-text/>
    <Rate v-model="rateValue" allow-half show-text>
      <span style="color: #f5a623">{{rateValue}}</span>
    </Rate>
    <!-- 设置属性 multiple，可以选择多个文件 -->
    <Upload action="//jsonplaceholder.typicode.com/posts/">
      <Button icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>
    <ColorPicker v-model="color1" />
  </div>

</template>
<script>
export default {
  data() {
    return {
      msg: "Form Component",
      value: "",
      value11: "",
      single: false,
      button1: "北京",
      single1: false,
      social: ["facebook", "github"],
      switch1: false,
      slideValue: 25,
      rateValue: 1.5,
      color1: "#19be6b",
      columns1: [
        {
          title: "Date",
          key: "date"
        },
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ],
      cityList: [
        {
          value: "New York",
          label: "New York"
        },
        {
          value: "London",
          label: "London"
        }
      ]
    };
  },
  methods: {
    change(status) {
      //按钮弹出文字提示气泡
      this.$Message.info("开关状态：" + status);
    }
  }
};
</script>
<style>
</style>


