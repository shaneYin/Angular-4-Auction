### 记录1：如何在Angular中引入包

1. 用npm安装包到node_modules中
2. 在angular-cli.json中配置 script 和 style 属性，将需要引入的包文件地址写入进进去。 **这里需要注意书写地址的源路径，在app下的root属性中设置，默认为src**
3. 由于typescript语法的原因，需要安装包的类型描述文件去使用   npm install @types/xxx --save-dev

### 记录2：如何创建新组件

可以用 ` ng g component xxx `去快速创建新组件

### 记录3：如何实现数据绑定

* 模板数据： 和AngularJS相同 {{}}
* 标签属性： 属性名用[]括起来，值直接使用后台控制器中的属性 e.g. ` <img [src]="imgUrl" /> `

### 记录4： 装饰器

装饰器的作用是父子组件之间的通信，在子组件的标签中获得父组件的传给的值，在子组件的控制器中 用 **@Input()** 去引用其值

父组件中
```Angular
  <father @ngFor="let obj of arr">
    <son [prop] = "obj.name"></son>
  <father>
```

子组件的控制器中
```Typescript
  import { Input } from '@angular/core'
  
  @Input()
  private prop: number;
```
