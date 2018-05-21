class html{
    webSidebar(){
        var title = this.inputTitle || '';
        var keywords = this.inputKeywords || '';
        var description = this.inputDescription || '';
        var bodyColor = this.bodyColor || '';
        var webHtml = [
            '<div class="sidebar-main-title">设置网站信息</div>',
            '<ul class="sidebar-main-form"><li>',
            '<p>网站标题</p>',
            '<div id="sidebar-input-title" class="sidebar-input-text" contenteditable="true">'+title+'</div>',
            '</li><li>',
            '<p>网站关键字</p>',
            '<div id="sidebar-input-keywords" class="sidebar-input-text" contenteditable="true">'+keywords+'</div>',
            '</li><li>',
            '<p>网站描述</p>',
            '<div id="sidebar-input-description" class="sidebar-input-text" contenteditable="true">'+description+'</div>',
            '</li><li>',
            '<p>网站背景色</p>',
            '<div id="sidebar-input-body-color" class="sidebar-input-text" style="height: 30px">'+bodyColor+'</div>',
            '</li></ul>'
        ]
        return webHtml.join('');
    }
    moduleSidebar(){
        var moduleHtml = [
            '<ul class="sidebar-module-menu">',
            '<li class="hover">头部模块</li>',
            '<li>主体模块</li>',
            '<li>底部模块</li></ul>',
            '<ul class="sidebar-module-content">',
            '<li data-id="0001"><img src="http://iph.href.lu/280x180?text=占位图"><span class="sidebar-module-id">10001</span></li>',
            '<li data-id="0001"><img src="http://iph.href.lu/280x180?text=占位图"><span class="sidebar-module-id">10002</span></li></ul>',
            '<ul class="sidebar-module-content"style="display: none">',
            '<li data-id="0001"><img src="http://iph.href.lu/280x180?text=占位图"><span class="sidebar-module-id">20001</span></li>',
            '<li data-id="0001"><img src="http://iph.href.lu/280x180?text=占位图"><span class="sidebar-module-id">20002</span></li>',
            '<li data-id="0001"><img src="http://iph.href.lu/280x180?text=占位图"><span class="sidebar-module-id">20003</span></li></ul>',
            '<ul class="sidebar-module-content"style="display: none">',
            '<li data-id="0001"><img src="http://iph.href.lu/280x180?text=占位图"><span class="sidebar-module-id">30001</span></li>',
            '<li data-id="0001"><img src="http://iph.href.lu/280x180?text=占位图"><span class="sidebar-module-id">30002</span></li></ul>',
        ]
        return moduleHtml.join('');
    }
    exportSidebar(){
        var exportHtml = [
            '<div class="sidebar-main-title">导出设置</div>',
            '<a href="javascript:void(0)" class="export-page">导出HTML</a>',
            '<a href="javascript:void(0)" class="save-page">保存页面</a>'
        ]
        return exportHtml.join('');
    }
}

export default html;