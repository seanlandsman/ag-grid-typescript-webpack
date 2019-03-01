function CustomTooltip() {
}

CustomTooltip.prototype.init = function (params) {
    this.eGui = document.createElement('span');


    this.eGui.style.position = 'absolute';

    this.eGui.style['background-color'] = 'lightgreen';
    this.eGui.innerHTML = params.value;
};

CustomTooltip.prototype.getGui = function () {
    return this.eGui;
};
