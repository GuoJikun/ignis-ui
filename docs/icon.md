# Icon 图标

提供了一套常用的图标集合。

## 使用方法

直接通过设置类名为 ins-icon-iconName 来使用即可。

<ins-icon name="arrow-repeat"></ins-icon>
<ins-icon name="broadcast-pin"></ins-icon>
<ins-icon name="cloud"></ins-icon>

```html
<ins-icon name="arrow-repeat"></ins-icon>
<ins-icon name="broadcast-pin"></ins-icon>
<ins-icon name="cloud"></ins-icon>
```

## 设置大小

通过 _`size`_ 属性来设置图标的大小

<ins-icon name="arrow-repeat" size="16px"></ins-icon>
<ins-icon name="broadcast-pin" size="24px"></ins-icon>
<ins-icon name="cloud" size="30px"></ins-icon>

```html
<ins-icon name="arrow-repeat" size="16px"></ins-icon>
<ins-icon name="broadcast-pin" size="24px"></ins-icon>
<ins-icon name="cloud" size="30px"></ins-icon>
```

## 设置颜色

通过 _`color`_ 属性来设置图标的大小

<ins-icon name="arrow-repeat" color="pink"></ins-icon>
<ins-icon name="broadcast-pin" color="blue"></ins-icon>
<ins-icon name="cloud" color="purple"></ins-icon>

```html
<ins-icon name="arrow-repeat" color="pink"></ins-icon>
<ins-icon name="broadcast-pin" color="blue"></ins-icon>
<ins-icon name="cloud" color="purple"></ins-icon>
```

## props

| 属性  | 说明       | 类型           | 可选值 | 默认值 |
| ----- | ---------- | -------------- | ------ | ------ |
| name  | 图标的名称 | String         | -      | -      |
| size  | 图标的大小 | String，Number | -      | -      |
| color | 图标的颜色 | String         | -      | -      |
