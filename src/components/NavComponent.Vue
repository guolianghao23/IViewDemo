<template>

    <div>

        <div style="padding:20px">
            <h2>{{msg}}</h2>
            <Menu mode="horizontal" v-bind:theme="theme1" active-name="1">
                <Menu-Item name="1">
                    <Icon type="ios-paper" /> 内容管理
                </Menu-Item>
                <Menu-Item name="2">
                    <Icon type="ios-people" /> 用户管理
                </Menu-Item>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats" />统计分析
                    </template>
                    <Menu-Group title="使用">
                        <Menu-Item name="3-1">新增和启动</Menu-Item>
                        <Menu-Item name="3-2">活跃分析</Menu-Item>
                        <Menu-Item name="3-3">时段分析</Menu-Item>
                    </Menu-Group>
                    <Menu-Group title="留存">
                        <Menu-Item name="3-4">用户留存</Menu-Item>
                        <Menu-Item name="3-5">流失用户</Menu-Item>
                    </Menu-Group>
                </Submenu>
                <Menu-Item name="4">
                    <Icon type="ios-construct" /> 综合设置
                </Menu-Item>
            </Menu>
            <br>
            <p>change theme</p>
            <Radio-Group v-model="theme1">
                <Radio label="light"></Radio>
                <Radio label="dark"></Radio>
                <Radio label="primary"></Radio>
            </Radio-Group>
        </div>
        <div style="padding:20px">
            <Tabs>
                <TabPane label="标签1" icon="logo-apple">标签一的内容</TabPane>
                <TabPane label="标签2">标签二的内容</TabPane>
            </Tabs>
            <Tabs type="card">
                <TabPane label="标签一">标签一的内容</TabPane>
                <TabPane label="标签二">标签二的内容</TabPane>
                <TabPane label="标签三">标签三的内容</TabPane>
            </Tabs>
        </div>
        <div style="padding:20px">
            <Dropdown>
                <a href="javascript:void(0)">
                    下拉菜单
                    <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem>驴打滚</DropdownItem>
                    <DropdownItem>炸酱面</DropdownItem>
                    <DropdownItem disabled>豆汁儿</DropdownItem>
                    <DropdownItem>冰糖葫芦</DropdownItem>
                    <DropdownItem divided>北京烤鸭</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
        <div style="padding:20px">
            <Page :total="100" show-sizer show-elevator show-total/>
            <Page :total="100" prev-text="Previous" next-text="Next" />
        </div>
        <div style="padding:20px">
            <Breadcrumb>
                <BreadcrumbItem to="/">
                    <Icon type="ios-home-outline" />Home</BreadcrumbItem>
                <BreadcrumbItem to="/">Components</BreadcrumbItem>
                <BreadcrumbItem to="/">Breadcrumb</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div style="padding:20px">
            <Badge :count="3">
                <a href="#" class="demo-badge"></a>
            </Badge>
            <Badge dot>
                <a href="#" class="demo-badge"></a>
            </Badge>
            <Badge :count="100" overflow-count="50">
                <a href="#" class="demo-badge"></a>
            </Badge>
            <Badge text="new">
                <a href="#" class="demo-badge"></a>
            </Badge>
            <Badge status="success" />
            <Badge :count="5" type="primary">
                <a href="#" class="demo-badge"></a>
            </Badge>
        </div>
        <div style="padding:20px">
            <Anchor show-ink>
                <AnchorLink title="Basic Usage" />
                <AnchorLink title="Static Position" />
                <AnchorLink title="API">
                    <AnchorLink title="Anchor props" />
                    <AnchorLink title="Anchor events" />
                    <AnchorLink title="AnchorLink props" />
                </AnchorLink>
            </Anchor>
        </div>
        <div style="padding:20px">
            <Steps :current="stepWhich" size="small" :status="stepStatus">
                <Step title="已完成" content="这里是该步骤的描述信息"></Step>
                <Step title="进行中" content="这里是该步骤的描述信息"></Step>
                <Step title="待进行" content="这里是该步骤的描述信息"></Step>
                <Step title="待进行" content="这里是该步骤的描述信息"></Step>
            </Steps>
            <Steps :current="stepWhich2" size="middle" direction="vertical">
                <Step title="已完成" content="这里是该步骤的描述信息"></Step>
                <Step title="进行中" content="这里是该步骤的描述信息"></Step>
                <Step title="待进行" content="这里是该步骤的描述信息"></Step>
                <Step title="待进行" content="这里是该步骤的描述信息"></Step>
            </Steps>
            <Button type="primary" size="small" @click="changeStep">next
                <icon type="ios-arrow-forward" />
            </Button>
            <Button type="success" size="small" @click="resetStep">reset
                <icon type="ios-refresh" />
            </Button>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "nav component",
      theme1: "light",
      stepWhich: 1,
      stepStatus: "error",
      stepWhich2: 1
    };
  },
  methods: {
    changeStep: function() {
      var _status = this.stepStatus;
      if (_status != "error") {
        this.stepWhich++;
      }
      this.stepWhich2++;
    },
    resetStep: function() {
      this.stepWhich = 0;
      this.stepWhich2 = 0;
    }
  }
};
</script>
<style scoped>
.demo-badge {
  width: 42px;
  height: 42px;
  background: #eee;
  border-radius: 6px;
  display: inline-block;
}
</style>


