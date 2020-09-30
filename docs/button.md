# Button 按钮

常用的操作按钮。

## 基础用法

按钮的基础用法

<div class="mt-20">
<ins-button>默认按钮</ins-button>
<ins-button type="primary">主要按钮</ins-button>
<ins-button type="success">success</ins-button>
<ins-button type="warning">warning</ins-button>
<ins-button type="danger">danger</ins-button>
<ins-button type="info">info</ins-button>
</div>
<div class="mt-20">
<ins-button plain>朴素按钮</ins-button>
<ins-button type="primary" plain>主要按钮</ins-button>
<ins-button type="success" plain>success</ins-button>
<ins-button type="warning" plain>warning</ins-button>
<ins-button type="danger" plain>danger</ins-button>
<ins-button type="info" plain>info</ins-button>
</div>
<div class="mt-20">
<ins-button round>圆角按钮</ins-button>
<ins-button type="primary" round>主要按钮</ins-button>
<ins-button type="success" round>success</ins-button>
<ins-button type="warning" round>warning</ins-button>
<ins-button type="danger" round>danger</ins-button>
<ins-button type="info" round>info</ins-button>
</div>

```html
<ins-button>默认按钮</ins-button>
<ins-button type="primary">主要按钮</ins-button>
<ins-button type="success">success</ins-button>
<ins-button type="warning">warning</ins-button>
<ins-button type="danger">danger</ins-button>
<ins-button type="info">info</ins-button>

<ins-button plain>朴素按钮</ins-button>
<ins-button type="primary" plain>主要按钮</ins-button>
<ins-button type="success" plain>success</ins-button>
<ins-button type="warning" plain>warning</ins-button>
<ins-button type="danger" plain>danger</ins-button>
<ins-button type="info" plain>info</ins-button>

<ins-button round>圆角按钮</ins-button>
<ins-button type="primary" round>主要按钮</ins-button>
<ins-button type="success" round>success</ins-button>
<ins-button type="warning" round>warning</ins-button>
<ins-button type="danger" round>danger</ins-button>
<ins-button type="info" round>info</ins-button>
```

## 禁用状态

按钮的禁用状态

<div class="mt-20">
<ins-button disabled>默认按钮</ins-button>
<ins-button type="primary" disabled>主要按钮</ins-button>
<ins-button type="success" disabled>success</ins-button>
<ins-button type="warning" disabled>warning</ins-button>
<ins-button type="danger" disabled>danger</ins-button>
<ins-button type="info" disabled>info</ins-button>
</div>
<div class="mt-20">
<ins-button plain disabled>朴素按钮</ins-button>
<ins-button type="primary" plain disabled>主要按钮</ins-button>
<ins-button type="success" plain disabled>success</ins-button>
<ins-button type="warning" plain disabled>warning</ins-button>
<ins-button type="danger" plain disabled>danger</ins-button>
<ins-button type="info" plain disabled>info</ins-button>
</div>

```html
<ins-button disabled>默认按钮</ins-button>
<ins-button type="primary" disabled>主要按钮</ins-button>
<ins-button type="success" disabled>success</ins-button>
<ins-button type="warning" disabled>warning</ins-button>
<ins-button type="danger" disabled>danger</ins-button>
<ins-button type="info" disabled>info</ins-button>

<ins-button plain disabled>朴素按钮</ins-button>
<ins-button type="primary" plain disabled>主要按钮</ins-button>
<ins-button type="success" plain disabled>success</ins-button>
<ins-button type="warning" plain disabled>warning</ins-button>
<ins-button type="danger" plain disabled>danger</ins-button>
<ins-button type="info" plain disabled>info</ins-button>
```

## 文字按钮

没有边框和背景色的按钮。

<ins-button type="text">文字按钮</ins-button>
<ins-button disabled type="text">文字按钮</ins-button>

```html
<ins-button type="text">文字按钮</ins-button>

<ins-button disabled type="text">文字按钮</ins-button>
```

## 不同尺寸

`Button`组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸

<div class="mt-20">
<ins-button size="large">large</ins-button>
<ins-button>默认</ins-button>
<ins-button size="small">small</ins-button>
<ins-button size="mini">mini</ins-button>
</div>
<div class="mt-20">
<ins-button size="large" round>large</ins-button>
<ins-button round>默认</ins-button>
<ins-button size="small" round>small</ins-button>
<ins-button size="mini" round>mini</ins-button>
</div>

```html
<ins-button size="large">large</ins-button>
<ins-button>默认</ins-button>
<ins-button size="small">small</ins-button>
<ins-button size="mini">mini</ins-button>

<ins-button size="large" round>large</ins-button>
<ins-button round>默认</ins-button>
<ins-button size="small" round>small</ins-button>
<ins-button size="mini" round>mini</ins-button>
```

## loading 状态

使用 _`loading`_ 图标表示加载中的状态

<ins-button :loading="loading">加载中</ins-button>

```html
<ins-button :loading="loading">加载中</ins-button>
```

## Select Props

| 属性     | 说明           | 类型    | 可选值                                             | 默认值 |
| -------- | -------------- | ------- | -------------------------------------------------- | ------ |
| type     | 类型           | string  | primary / success / warning / danger / info / text | -      |
| size     | 尺寸           | string  | large / small / mini                               | -      |
| plain    | 是否朴素按钮   | boolean | -                                                  | false  |
| round    | 是否圆角按钮   | boolean | -                                                  | false  |
| loading  | 是否加载中状态 | boolean | -                                                  | false  |
| disabled | 是否禁用       | boolean | -                                                  | false  |

<script>
export default {
    data(){
        return {
            loading: true
        }
    }
}
</script>
