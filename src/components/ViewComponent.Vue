<template>
    <div>

        <div style="padding:20px">
            <h2>{{msg}}</h2>
            <Alert>An info prompt</Alert>
            <Alert>
                An info prompt
                <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
            </Alert>
        </div>
        <div style="padding:20px">
            <Button type="primary" @click="info">Display info prompt</Button>
            <Button @click="success">Display success prompt</Button>
        </div>
        <div style="padding:20px">
            <Button type="primary" @click="open(true)">Open notice</Button>
        </div>
        <div style="padding:20px">
            <Button type="primary" @click="modal1 = true">Display dialog box</Button>
            <Modal v-model="modal1" title="Common Modal dialog box title" @on-ok="ok" @on-cancel="cancel">
                <p>Content of dialog</p>
                <p>Content of dialog</p>
                <p>Content of dialog</p>
            </Modal>
        </div>
        <div style="padding:20px">
            <Tree :data="data1" show-checkbox></Tree>
        </div>
        <div style="padding:20px">
            <Tooltip content="Here is the prompt text">
                A balloon appears when the mouse passes over this text
            </Tooltip>
            <Progress :percent="25" />
            <Progress :percent="45" status="active" />
            <Progress :percent="65" status="wrong" />
            <Progress :percent="100" />
            <Progress :percent="25" hide-info />
            <div class="demo-avatar">
                <Avatar icon="ios-person" size="large" />
                <Avatar icon="ios-person" />
                <Avatar icon="ios-person" size="small" />
            </div>
        </div>
        <div style="padding:20px">
            <Tag>标签一</Tag>
            <Tag>标签二</Tag>
            <Tag v-if="show" closable @on-close="handleClose">标签三</Tag>
        </div>
        <div style="padding:20px">
            <Carousel v-model="value1" loop>
                <CarouselItem>
                    <div class="demo-carousel">1</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">2</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">3</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">4</div>
                </CarouselItem>
            </Carousel>
        </div>
        <div style="padding:30px">
            <Timeline>
                <TimelineItem>
                    <p class="time">1976年</p>
                    <p class="content">Apple I 问世</p>
                </TimelineItem>
                <TimelineItem>
                    <p class="time">1984年</p>
                    <p class="content">发布 Macintosh</p>
                </TimelineItem>
                <TimelineItem>
                    <p class="time">2007年</p>
                    <p class="content">发布 iPhone</p>
                </TimelineItem>
                <TimelineItem>
                    <p class="time">2010年</p>
                    <p class="content">发布 iPad</p>
                </TimelineItem>
                <TimelineItem>
                    <p class="time">2011年10月5日</p>
                    <p class="content">史蒂夫·乔布斯去世</p>
                </TimelineItem>
            </Timeline>
            <Time :time="time1" />
            <br>
            <Time :time="time2" />
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "View Component",
      modal1: false,
      show: true,
      value1: 0,
      time1: new Date().getTime() - 60 * 3 * 1000,
      time2: new Date().getTime() - 86400 * 3 * 1000,
      data1: [
        {
          title: "parent 1",
          expand: true,
          children: [
            {
              title: "parent 1-1",
              expand: true,
              children: [
                {
                  title: "leaf 1-1-1"
                },
                {
                  title: "leaf 1-1-2"
                }
              ]
            },
            {
              title: "parent 1-2",
              expand: true,
              children: [
                {
                  title: "leaf 1-2-1"
                },
                {
                  title: "leaf 1-2-1"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    info: function() {
      this.$Message.info("This is a info tip");
    },
    success: function() {
      this.$Message.success("This is a info tip");
    },
    open: function(nodesc) {
      this.$Notice.open({
        title: "Notification title",
        desc: nodesc
          ? ""
          : "Here is the notification description. Here is the notification description. "
      });
    },
    ok: function() {
      this.$Message.info("Clicked ok");
    },
    cancel: function() {
      this.$Message.info("Clicked cancel");
    },
    handleClose: function() {
      this.show = false;
    }
  }
};
</script>

