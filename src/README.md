### 记录1：如何在Angular中引入包

1. 用npm安装包到*node_modules*中
2. 在angular-cli.json中配置 script 和 style 属性，将需要引入的包文件地址写入进去。 **这里需要注意书写地址的源路径，在app下的root属性中设置，默认为src**
3. 由于typescript语法的原因，需要安装包的类型描述文件去使用   npm install @types/xxx --save-dev

### 记录2：如何创建新组件

可以用 ` ng g component xxx `去快速创建新组件

### 记录3：如何实现数据绑定

* 模板数据： 和AngularJS相同 {{}}
* 标签属性： 属性名用[]括起来，值直接使用后台控制器中的属性 e.g. ` <img [src]="imgUrl" /> `
* 事件处理： 事件名称用小括号括起来后面跟执行事件的方法，方法在controller中创建  ` (click) = "event()" `

### 记录4： 装饰器

装饰器的作用是父子组件之间的通信，在子组件的标签中获得父组件的传给的值，在子组件的控制器中 用 **@Input()** 去引用其值

父组件中
```HTML
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

### 记录5： 路由

可以用 ` ng new router --routing ` 去创建一个带有路由的项目

* **路由模块：** 路由配置会有它自己的模块（），而且主模块会导入它
* **创建路由：** 在路由模块中新建一个Router类数组 并且配置路径和对应的模块，让它们联系起来

  数组中其中的一个对象例子： ` {path: '', component: AppComponent} `
  
  即在 / 路径下，可以访问到 AppComponent 组件
  
* **使用路由：** 在组件中使用路由时有两种方式

  1. a标签方式，在a标签中插入一个属性 **routerLink** 即 `<a [routerLink] = "['/']">链接</a>`

  2. 事件方式，在标签中插入一个事件并指定方法，即 ` <button (click) = "toAnotherPage()"></button> `
     并且在对应的controller中创建这个方法 即 
     
     ```Typescript
      // 获得router数组
      constructor (private router: Router) {
      }
     
      toAnotherPage () {
        this.router.navigate(['/']);
      }
     ```
     
* **默认路由** 默认路由就是当所有路由都不匹配时去默认选择的路由 path属性为 "**"
 
