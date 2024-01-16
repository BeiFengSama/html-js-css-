var container = document.getElementById("container");
var modaloverlay = document.getElementById('modalOverlay');
var fold_input = document.getElementById('fold_input');
//点击创建响应按钮
document.getElementById('create_fold').onclick = function()
{
    create_fold();
    openModalOverlay();
};

//创建文件夹
function create_fold()
{
    var create_fold_button = document.getElementById('modalCreateButton');
    create_fold_button.onclick = function(){
        var input = fold_input.value;
        ShowFold(input);
        modaloverlay.style.display = 'none';
    };
};

//关闭模态框
var modal_close_button = document.getElementById('modal-close-button');
modal_close_button.onclick = function()
{
    modaloverlay.style.display = 'none';
};

//开启模态框
function openModalOverlay()
{
    modaloverlay.style.display = 'flex';
};

//显示文件夹
function ShowFold(input)
{
    //容器
    var fold_container = document.createElement('div');
    fold_container.classList.add('fold-container');
    fold_container.id = input;
    //最外层
    var fold_div = document.createElement('div');
    fold_div.classList.add('fold_style');
    //中间层
    var style_div = document.createElement('div');
    style_div.classList.add('style');
    //最内侧
    var style2_div = document.createElement('div');
    style2_div.classList.add('style_2');
    //名字
    var name_p = document.createElement('p');
    name_p.textContent = input;
    name_p.classList.add('fold_name');

    //标志位置
    var new_fold = document.getElementById('new_fold');

    //链接
    style_div.appendChild(style2_div);
    fold_div.appendChild(style_div);
    fold_container.appendChild(fold_div);
    fold_container.appendChild(name_p);

    container.insertBefore(fold_container, new_fold);
};