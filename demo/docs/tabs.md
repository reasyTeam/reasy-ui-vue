## 标签页

Tab 让用户可以在不同的子任务、视图、模式之间切换，它具有全局导航的作用，是全局功能的主要展示和切换区域，一个Tab标记一个核心功能，Tab之间可以快速点击切换。提供平级的区域将大块内容进行收纳盒展现，保持界面整洁。

### 基础示例

:::demo

```html
<template>
  <v-tabs v-model="activeName">
    <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
    <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
    <v-tab-pane label="标签3" value="3">标签3内容</v-tab-pane>
  </v-tabs>
</template>

<script>
export default {
  data() {
    return {
      activeName: ""
    };
  }
};
</script>
```

:::



### 标签页大小

:::demo 通过设置`tabs`的`size`属性来控制标签页大小，可选值有`S/M/L`，默认为`M`。

```html
<template>
  <div>
    <v-row class="tabs-demo__size">
      <v-col :span="1">
        <label>小</label>
      </v-col>
      <v-col :span="22">
        <v-tabs v-model="activeName" size="S">
          <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
          <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
          <v-tab-pane label="标签3" value="3">标签3内容</v-tab-pane>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row class="tabs-demo__size">
      <v-col :span="1">
        <label>中</label>
      </v-col>
      <v-col :span="22">
        <v-tabs v-model="activeName1" size="M">
          <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
          <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
          <v-tab-pane label="标签3" value="3">标签3内容</v-tab-pane>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row class="tabs-demo__size">
      <v-col :span="1">
        <label>大</label>
      </v-col>
      <v-col :span="22">
        <v-tabs v-model="activeName2" size="L">
          <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
          <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
          <v-tab-pane label="标签3" value="3">标签3内容</v-tab-pane>
        </v-tabs>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "",
      activeName1: "",
      activeName2: ""
    };
  }
};
</script>
```

:::



### 卡片样式

:::demo `type`设置为`card`。

```html
<template>
  <div>
    <v-row class="tabs-demo__size">
      <v-col :span="1">
        <label>小</label>
      </v-col>
      <v-col :span="22">
        <v-tabs v-model="activeName" size="S" type="card">
          <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
          <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
          <v-tab-pane label="标签3" value="3">标签3内容</v-tab-pane>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row class="tabs-demo__size">
      <v-col :span="1">
        <label>中</label>
      </v-col>
      <v-col :span="22">
        <v-tabs v-model="activeName1" size="M" type="card">
          <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
          <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
          <v-tab-pane label="标签3" value="3">标签3内容</v-tab-pane>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row class="tabs-demo__size">
      <v-col :span="1">
        <label>大</label>
      </v-col>
      <v-col :span="22">
        <v-tabs v-model="activeName2" size="L" type="card">
          <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
          <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
          <v-tab-pane label="标签3" value="3">标签3内容</v-tab-pane>
        </v-tabs>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "",
      activeName1: "",
      activeName2: ""
    };
  }
};
</script>
```

:::


### 按钮样式

:::demo `type`设置为`button`。

```html
<template>
  <div>
    <v-row class="tabs-demo__size">
      <v-col :span="1">
        <label>小</label>
      </v-col>
      <v-col :span="22">
        <v-tabs v-model="activeName" size="S" type="button">
          <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
          <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
          <v-tab-pane label="标签3" value="3">标签3内容</v-tab-pane>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row class="tabs-demo__size">
      <v-col :span="1">
        <label>中</label>
      </v-col>
      <v-col :span="22">
        <v-tabs v-model="activeName1" size="M" type="button">
          <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
          <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
          <v-tab-pane label="标签3" value="3">标签3内容</v-tab-pane>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row class="tabs-demo__size">
      <v-col :span="1">
        <label>大</label>
      </v-col>
      <v-col :span="22">
        <v-tabs v-model="activeName2" size="L" type="button">
          <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
          <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
          <v-tab-pane label="标签3" value="3">标签3内容</v-tab-pane>
        </v-tabs>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "",
      activeName1: "",
      activeName2: ""
    };
  }
};
</script>
```

:::


### 标签禁用

:::demo `disabled`设置为`true`。

```html
<template>
  <div class="tabs-demo">
    <h5></h5>
    <v-tabs v-model="activeName">
      <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
      <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
      <v-tab-pane label="标签3" value="3" :disabled="true">标签3内容</v-tab-pane>
    </v-tabs>
  </div>
  <div class="tabs-demo">
    <h5></h5>
    <v-tabs v-model="activeName1" type="card">
      <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
      <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
      <v-tab-pane label="标签3" value="3" :disabled="true">标签3内容</v-tab-pane>
    </v-tabs>
  </div>
  <div class="tabs-demo">
    <h5></h5>
    <v-tabs v-model="activeName2" type="button">
      <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
      <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
      <v-tab-pane label="标签3" value="3" :disabled="true">标签3内容</v-tab-pane>
    </v-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "",
      activeName1: "",
      activeName2: ""
    };
  }
};
</script>
```

:::





### 属性 Attributes

#### tabs属性

| 参数         | 说明                                                                 | 类型                                  | 可选值           | 默认值              |
| ------------ | -------------------------------------------------------------------- | ------------------------------------- | ---------------- | ------------------- |
| v-model      | 当前激活tab的key                                                     | string                                | -                | 第一个选项卡的value |
| type         | 风格类型                                                             | string                                | link/card/button | link                |
| size         | 大小                                                                 | string                                | S/M/L            | M                   |
| lazy         | tab内容加载方式。true使用v-if加载，false使用v-show              | string                                | -                | true                |
| disabled     | 是否全部禁用                                                         | boolean                               | -                | false               |
| before-leave | 切换标签之前的钩子，若返回false或者返回Promise且被reject，则阻止切换 | Function(activeValue, oldActiveValue) | -                | -                   |

#### tabs Events

| 事件名称  | 说明            | 参数                            |
| --------- | --------------- | ------------------------------- |
| tab-click | tab被选中时触发 | (被选中的标签tab实例, 事件对象) |

#### tab-pane属性

| 参数     | 说明                                            | 类型        | 可选值 | 默认值                                                |
| -------- | ----------------------------------------------- | ----------- | ------ | ----------------------------------------------------- |
| label    | 选项卡标题                                      | string/slot | -      | -                                                     |
| disabled | 是否禁用                                        | boolean     | -      | false                                                 |
| value    | 与选项卡绑定值value对应的标识符，标识选项卡别名 | string      | -      | 该选项卡在选项卡列表中的顺序值，如第一个选项卡则为“1” |

#### tabs Slot

| name    | 说明               |
| ------- | ------------------ |
| default | 一般为tab-pane组件 |

#### tab-pane Slot

| name    | 说明      |
| ------- | --------- |
| default | tab内容区 |