import colorPicker from '../js/colorpicker.js';
import html from './html.js';

class sidebar extends html {
    constructor() {
        super();
        this.sidebarStatus = {
            webSidebar: false,
            moduleSidebar: false,
            exportSidebar: false
        };
    }
    // 禁止回车
    stopKeyCode(e) {
        if (e.keyCode == 13) {
            e.cancelBubble = true;
            e.preventDefault();
            e.stopPropagation();
        }
    }
    setForm(that) {
        var typeId = $(that).attr('id');
        var inputValue = $(that).text();
        if (typeId == 'sidebar-input-title') {
            this.inputTitle = inputValue;
        }
        if (typeId == 'sidebar-input-keywords') {
            this.inputKeywords = inputValue;
        }
        if (typeId == 'sidebar-input-description') {
            this.inputDescription = inputValue;
        }
        if (typeId == 'sidebar-input-body-color') {
            this.bodyColor = inputValue;
        }
    }
    initEvent() {
        var _self = this;
        // 网站设置绑定禁止输入回车事件
        $(document).on("keydown", '.sidebar-input-text', this.stopKeyCode.bind(this));
        // 网站设置保存
        $(document).on("keyup", '.sidebar-input-text', function () {
            _self.setForm(this);
        });
        // tab菜单切换
        $(document).on('click', '.sidebar-module-menu li', function () {
            var index = $(this).index();
            $(this).siblings().removeClass('hover');
            $(this).addClass('hover');
            $('.sidebar-module-content').hide();
            $('.sidebar-module-content').eq(index).show();
        })
    }
    // 初始化侧栏切换
    showSidebar(name) {
        var _self = this;
        for (var item in this.sidebarStatus) {
            if (item != name) {
                this.sidebarStatus[item] = false;
            }
        }
        if (this.sidebarStatus[name]) {
            $('#sidebar-main').css('left', '-300px');
            this.sidebarStatus[name] = false;
        } else {
            $('#sidebar-main').css('left', '50px');
            this.sidebarStatus[name] = true;
        }

        if (this.pastName == name) {
            return false;
        }
        var html = this[name]();
        $('#sidebar-main').html(html);

        $('#sidebar-input-body-color').colorpicker({
            success: function(data,color){
                $('#page').css('background',color);
            }
        });
        this.pastName = name;
    }
    init() {
        var _self = this;
        this.initEvent();
        $('#sidebar li').click(function () {
            var btnName = $(this).find('i').attr('class');

            $(this).siblings().removeClass('hover');

            if (this == _self.pastBtn) {
                $(this).removeClass('hover');
                _self.pastBtn = '';
            } else {
                $(this).addClass('hover');
                _self.pastBtn = this;
            }

            switch (btnName) {
                case 'web-button':
                    _self.showSidebar('webSidebar');
                    break;
                case 'module-button':
                    _self.showSidebar('moduleSidebar');
                    break;
                case 'export-button':
                    _self.showSidebar('exportSidebar');
                    break;
                default:
                    break;
            }
        })
    }
}

export default new sidebar();