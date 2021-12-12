//队列与栈不同 队列是先进先出
//栈式后进先出
//栈就是吃了吐
//队列吃了拉

function Queue() {
  //属性
  this.items = [];

  //方法
  //1.给队列添加元素
  Queue.prototype.enqueue = function (Element) {
    this.items.push(Element);
  };
  //2.从队列中删除前端元素
  Queue.prototype.dequeue = function () {
    return this.items.shift();
  };

  //3.查看前端元素
  Queue.prototype.peek = function () {
    return this.items?.[0];
  };
  //4.查看队列是否为空
  Queue.prototype.isEmpty = function () {
    return this.items.length === 0;
  };
  //5.查看队列中元素的个数
  Queue.prototype.size = function () {
    return this.items.length;
  };
  //6.toString方法
  Queue.prototype.toString = function () {
    var result = "";
    for (let i = 0; i < this.items.length; i++) {
      result += this.items[i] + " ";
    }
    return result;
  };
}
