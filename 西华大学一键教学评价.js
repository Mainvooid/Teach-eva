/**
 * @name 西华大学一键教学评价
 * 改进了一下代码，注释并进行了规范化
 */
(function () {
    var courseCode;//声明课程代码（数组）用于判断是否评价到最后一页
    var timer;//声明Interval（按周期调用函数）
    var autoFill = function () {
        var frame = document.getElementById('rightDiv').querySelector('iframe').contentWindow.document;//获取frame
        var divJs = frame.getElementById('divJs');//frame获取divJs
        var items = divJs.querySelectorAll('select');//divJs获取select并把所有select存为items（数组）

        if (!frame.getElementById('pjkc')){
            return false;//若frame没有获取到pjkc（课程代码）
        }else{
            var newCourseCode = frame.getElementById('pjkc').value;//当前页的课程代码存为newCourseCode
        }
        //若临时变量courseCode等于当前页的课程代码newCourseCode，说明已经评价过了
        if (newCourseCode == courseCode) {
            clearInterval(timer);//关闭timer
            frame.getElementById('Button2').click();//点击提交按钮
            /*console.log('评价完成！');//控制台输出完成信息*/
            return true;
        }else{
             courseCode = newCourseCode;//当前页课程代码存入临时变量
        }

        for (i = 0; i < items.length; i++){
            items[i].value = "1(完全同意)"//遍历select类数组items，设置选择值
            frame.getElementById('Button1').click();//点击当前页的确定按钮
        }    
    }
    timer = setInterval(autoFill, 1000);//1000ms调用一次autoFill方法,网络卡的可以改大一点，目的是为了等待网页加载完成
})();
