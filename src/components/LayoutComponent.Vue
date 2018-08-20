<template>
    <div>
        <div style="padding:20px">
            <h2>{{msg}}</h2>
            <Collapse v-model="value1" accordion>
                <Panel name="1">
                    史蒂夫乔布斯
                    <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</P>
                </Panel>
                <Panel name="2">
                    沃兹尼亚克
                    <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</P>
                </Panel>
                <Panel name="3">
                    乔纳森
                    <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</P>
                </Panel>
            </Collapse>
            <Collapse v-model="value2" simple>
                <Panel name="1">
                    史蒂夫乔布斯
                    <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</P>
                </Panel>
                <Panel name="2">
                    沃兹尼亚克
                    <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</P>
                </Panel>
                <Panel name="3">
                    乔纳森
                    <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</P>
                </Panel>
            </Collapse>
        </div>
        <div class="demo-split">
            <Split v-model="split1">
                <div slot="left" class="demo-split-pane">
                    Left Pane
                </div>
                <div slot="right" class="demo-split-pane">
                    Left Pane
                </div>
            </Split>
        </div>
        <div style="padding:20px">
            <p>Steven paul jobs</p>
            <Divider/>
            <p>Steven paul jobs</p>
        </div>
        <div style="padding:20px">
            Text
            <Divider type="vertical" /> Link
            <Divider type="vertical" /> Link
        </div>
        <div style="padding:20px">
            <Divider orientation="left">Left Text</Divider>
            <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
            <Divider orientation="right">Right Text</Divider>
            <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
        </div>
        <div style="padding:20px">
            <Card title="Options" icon="ios-options" :padding="0" shadow style="width: 300px;">
                <CellGroup>
                    <Cell title="Only show titles" />
                    <Cell title="Display label content" label="label content" />
                    <Cell title="Display right content" extra="details" />
                    <Cell title="Link" extra="details" to="/components/button" />
                    <Cell title="Open link in new window" to="/components/button" target="_blank" />
                    <Cell title="Disabled" disabled />
                    <Cell title="Selected" selected />
                    <Cell title="With Badge" to="/components/badge">
                        <Badge :count="10" slot="extra" />
                    </Cell>
                    <Cell title="With Switch">
                        <Switch v-model="switchValue" slot="extra" />
                    </Cell>
                </CellGroup>
            </Card>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "layout Component",
      buttonSize: "large",
      loading: false,
      buttonType: "",
      value1: 1,
      value2: 1,
      split1: 0.5,
      switchValue: true
    };
  }
};
</script>
<style>
.demo-split {
  height: 200px;
  border: 1px solid #dcdee2;
}
.demo-split-pane {
  padding: 20px;
}
</style>


