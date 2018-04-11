import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // 创建一个product变量，此变量是包含若干Product类的数组
  private products: Array<Product>;
  private imgUrl = 'http://via.placeholder.com/350x150';
  constructor() { }

  ngOnInit() {
    // 创建初始数据，给product变量赋值
    this.products = [
      new Product(1, '第一个商品', 1.23, 3, '这是一段描述，用来描述商品具体信息', ['电子产品', '硬件设备']),
      new Product(2, '第二个商品', 1.23, 4, '这是一段描述，用来描述商品具体信息', ['硬件设备']),
      new Product(3, '第三个商品', 1.23, 3.5, '这是一段描述，用来描述商品具体信息', ['图书']),
      new Product(4, '第四个商品', 1.23, 2.5, '这是一段描述，用来描述商品具体信息', ['主机', '硬件设备']),
      new Product(5, '第五个商品', 1.23, 4, '这是一段描述，用来描述商品具体信息', ['家具']),
      new Product(6, '第六个商品', 1.23, 4.5, '这是一段描述，用来描述商品具体信息', ['毛巾', '洗浴'])
    ];
  }

}
// 声明一个Product类
export class Product {
  // 描述产品所包含的信息
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {}
}
